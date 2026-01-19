import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Flame, Leaf } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { getDishById, Dish } from '@/lib/dishes';

const DishDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data: dish, isLoading } = useQuery<Dish | undefined>({
    queryKey: ['dish', id],
    queryFn: () => getDishById(id!),
    enabled: !!id,
  });

  if (isLoading) return <Layout><div className="min-h-screen flex items-center justify-center"><p>Loading...</p></div></Layout>;
  if (!dish) return <Layout><div className="min-h-screen flex items-center justify-center"><p>Dish not found</p></div></Layout>;

  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Link to="/menu" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Menu
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <img src={dish.image} alt={dish.name} className="w-full h-[500px] object-cover rounded-2xl shadow-xl" />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <span className="text-primary font-medium uppercase tracking-wider">{dish.category}</span>
              <h1 className="font-serif text-5xl font-bold text-foreground">{dish.name}</h1>
              <p className="text-3xl font-bold text-primary">€{dish.price}</p>
              <p className="text-muted-foreground text-lg leading-relaxed">{dish.longDescription}</p>

              <div className="flex gap-6 py-4 border-y border-border">
                <span className="flex items-center gap-2"><Clock className="h-5 w-5 text-primary" />{dish.prepTime}</span>
                <span className="flex items-center gap-2"><Flame className="h-5 w-5 text-primary" />{dish.calories} cal</span>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">Ingredients</h3>
                <div className="flex flex-wrap gap-2">
                  {dish.ingredients.map((ing) => (<span key={ing} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">{ing}</span>))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">Dietary Info</h3>
                <div className="flex flex-wrap gap-2">
                  {dish.dietary.map((d) => (<span key={d} className="flex items-center gap-1 bg-accent/20 text-accent px-3 py-1 rounded-full text-sm"><Leaf className="h-3 w-3" />{d}</span>))}
                </div>
              </div>

              <p className="text-muted-foreground text-sm">Prepared by {dish.chef}</p>
              <Button variant="hero" size="lg">Reserve a Table</Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DishDetails;
