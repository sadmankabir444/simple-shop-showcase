import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChefHat, UtensilsCrossed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeIn } from '@/lib/animations';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background to-muted relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 opacity-20 rotate-45">
        <UtensilsCrossed className="h-24 w-24 text-primary" />
      </div>
      <div className="absolute bottom-20 right-20 opacity-20 -rotate-45">
        <ChefHat className="h-24 w-24 text-primary" />
      </div>
      
      <motion.div 
        variants={fadeIn('up', 0)}
        initial="hidden"
        animate="show"
        className="text-center z-10 max-w-lg px-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          className="inline-block mb-6"
        >
          <div className="text-9xl font-bold text-primary bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
            404
          </div>
        </motion.div>
        
        <motion.h1 
          variants={fadeIn('up', 0.1)}
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
        >
          Oops! Page Lost in the Kitchen
        </motion.h1>
        
        <motion.p 
          variants={fadeIn('up', 0.2)}
          className="mb-8 text-lg text-muted-foreground max-w-md mx-auto"
        >
          The dish you're looking for doesn't exist in our menu. But don't worry, we have plenty of other delicious options!
        </motion.p>
        
        <motion.div 
          variants={fadeIn('up', 0.3)}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/">
            <Button variant="hero" size="lg">
              Back to Home
            </Button>
          </Link>
          <Link to="/menu">
            <Button variant="outline" size="lg">
              View Menu
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
