import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeIn, staggerContainer } from '@/lib/animations';

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
      <motion.div 
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4 relative z-10"
      >
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            variants={fadeIn('up', 0)}
            className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2 mb-6"
          >
            <Star className="h-4 w-4 text-gold fill-gold" />
            <span className="text-gold font-medium text-sm">Award-Winning Cuisine</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeIn('up', 0.1)}
            className="font-serif text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
          >
            Experience
            <br />
            <span className="text-gold">Roman-Italian</span> Cuisine
            <br />
            in Bangladesh
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeIn('up', 0.2)}
            className="text-primary-foreground/80 text-lg md:text-xl mb-8 leading-relaxed"
          >
            Where Roman traditions meet Bangladeshi hospitality. Every dish tells a story of passion, crafted with authentic recipes and local ingredients.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/menu">
              <Button variant="hero" size="xl">
                Explore Menu
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Button variant="heroOutline" size="xl">
              Book Your Table
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            className="flex gap-8 mt-12 pt-8 border-t border-primary-foreground/20"
          >
            {[{ value: '14+', label: 'Years of Excellence' },
              { value: '80+', label: 'Signature Dishes' },
              { value: '5K+', label: 'Happy Guests' },
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                variants={fadeIn('up', 0.5 + index * 0.1)}
              >
                <p className="font-serif text-3xl font-bold text-gold">{stat.value}</p>
                <p className="text-primary-foreground/60 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative Element */}
      <motion.div
        variants={fadeIn('left', 0.7)}
        initial="hidden"
        animate="show"
        className="absolute bottom-8 right-8 hidden lg:block"
      >
        <div className="w-32 h-32 rounded-full border-2 border-gold/30 flex items-center justify-center">
          <div className="text-center">
            <p className="font-serif text-2xl font-bold text-gold">Since</p>
            <p className="text-primary-foreground text-lg">2010</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;