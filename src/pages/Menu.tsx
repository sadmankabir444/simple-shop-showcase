import { useState } from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { Search } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import DishCard from '@/components/menu/DishCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { getAllDishes, Dish } from '@/lib/dishes';

const categories = ['all', 'appetizer', 'main', 'dessert', 'drink'] as const;

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const { data: dishes = [], isLoading } = useQuery<Dish[]>({
    queryKey: ['dishes'],
    queryFn: getAllDishes,
  });

  const filteredDishes = dishes.filter((dish) => {
    const matchesCategory = selectedCategory === 'all' || dish.category === selectedCategory;
    const matchesSearch = dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dish.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="font-serif text-5xl font-bold text-foreground mb-4">Our <span className="text-primary">Menu</span></h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">Explore our carefully crafted selection of authentic Italian dishes.</p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10">
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map((cat) => (
                <Button key={cat} variant={selectedCategory === cat ? 'default' : 'outline'} size="sm" onClick={() => setSelectedCategory(cat)} className="capitalize">
                  {cat === 'all' ? 'All Dishes' : cat}
                </Button>
              ))}
            </div>
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search dishes..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10" />
            </div>
          </div>

          {/* Grid */}
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (<div key={i} className="h-80 bg-muted animate-pulse rounded-2xl" />))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredDishes.map((dish, index) => (
                <motion.div key={dish.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
                  <DishCard dish={dish} />
                </motion.div>
              ))}
            </div>
          )}

          {filteredDishes.length === 0 && !isLoading && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No dishes found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
