import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dish, getFeaturedDishes } from '@/lib/dishes';
import { useQuery } from '@tanstack/react-query';
import DishCard from '@/components/menu/DishCard';
import { fadeIn, staggerContainer } from '@/lib/animations';

const FeaturedDishesSection = () => {
  const { data: dishes = [], isLoading } = useQuery<Dish[]>({
    queryKey: ['featuredDishes'],
    queryFn: getFeaturedDishes,
  });

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          variants={fadeIn('up', 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Chef's Selection
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Signature <span className="text-primary">Creations</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most beloved Roman-inspired dishes, crafted with authentic techniques and local Bangladeshi ingredients.
          </p>
        </motion.div>

        {/* Dishes Grid */}
        {isLoading ? (
          <motion.div 
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[...Array(4)].map((_, i) => (
              <motion.div 
                key={i}
                variants={fadeIn('up', 0.2)}
              >
                <div className="h-80 bg-muted animate-pulse rounded-2xl" />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {dishes.map((dish, index) => (
              <motion.div
                key={dish.id}
                variants={fadeIn('up', 0.2 + index * 0.1)}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <DishCard dish={dish} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/menu">
            <Button variant="default" size="lg">
              View Full Menu
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDishesSection;
