import { motion } from 'framer-motion';
import { Leaf, Award, Heart } from 'lucide-react';
import { fadeIn, staggerContainer } from '@/lib/animations';

const AboutSection = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Farm Fresh',
      description: 'Ingredients sourced daily from local Italian farms',
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for culinary excellence since 1985',
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every dish crafted with passion and tradition',
    },
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <motion.div
            variants={fadeIn('left', 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.img
                variants={fadeIn('up', 0.1)}
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80"
                alt="Chef preparing dish"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
              <motion.img
                variants={fadeIn('up', 0.2)}
                src="https://images.unsplash.com/photo-1551218372-a8789b81b253?w=400&q=80"
                alt="Fresh pasta"
                className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8"
              />
              <motion.img
                variants={fadeIn('up', 0.3)}
                src="https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=400&q=80"
                alt="Fresh ingredients"
                className="rounded-2xl shadow-lg w-full h-64 object-cover -mt-8"
              />
              <motion.img
                variants={fadeIn('up', 0.4)}
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&q=80"
                alt="Wine selection"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
            {/* Decorative Badge */}
            <motion.div 
              variants={fadeIn('up', 0.5)}
              className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl hidden md:block"
            >
              <p className="font-serif text-4xl font-bold">14+</p>
              <p className="text-sm opacity-80">Years of Excellence</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Our Story
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Bringing Rome to
              <br />
              <span className="text-primary">Bangladesh</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Founded in 2010 by Chef Md Fahim, Casa Romana has been serving authentic Roman-Italian cuisine in Cumilla for over a decade. Our recipes blend traditional Roman cooking techniques with locally sourced Bangladeshi ingredients.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Every dish is carefully crafted, every ingredient thoughtfully selected, and every guest welcomed like family. This is not just a restaurant—it's a bridge between two cultures, creating something entirely unique.
            </p>

            {/* Features */}
            <motion.div 
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={fadeIn('up', 0.3 + index * 0.1)}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
