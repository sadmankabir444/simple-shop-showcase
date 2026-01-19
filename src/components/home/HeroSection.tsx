import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
          alt="Elegant Italian restaurant ambiance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2 mb-6"
          >
            <Star className="h-4 w-4 text-gold fill-gold" />
            <span className="text-gold font-medium text-sm">Michelin Recommended</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
          >
            Experience
            <br />
            <span className="text-gold">Authentic</span> Italian
            <br />
            Cuisine
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary-foreground/80 text-lg md:text-xl mb-8 leading-relaxed"
          >
            Where tradition meets innovation. Every dish tells a story of passion, crafted with the finest ingredients from the heart of Italy.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/menu">
              <Button variant="hero" size="xl">
                Explore Menu
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Button variant="heroOutline" size="xl">
              Reserve a Table
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-8 mt-12 pt-8 border-t border-primary-foreground/20"
          >
            {[
              { value: '38+', label: 'Years of Excellence' },
              { value: '200+', label: 'Signature Dishes' },
              { value: '15K+', label: 'Happy Guests' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl font-bold text-gold">{stat.value}</p>
                <p className="text-primary-foreground/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-8 right-8 hidden lg:block"
      >
        <div className="w-32 h-32 rounded-full border-2 border-gold/30 flex items-center justify-center">
          <div className="text-center">
            <p className="font-serif text-2xl font-bold text-gold">Since</p>
            <p className="text-primary-foreground text-lg">1985</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
