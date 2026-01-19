import { motion } from 'framer-motion';
import { Leaf, Award, Heart } from 'lucide-react';

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
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80"
                alt="Chef preparing dish"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1551218372-a8789b81b253?w=400&q=80"
                alt="Fresh pasta"
                className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=400&q=80"
                alt="Fresh ingredients"
                className="rounded-2xl shadow-lg w-full h-64 object-cover -mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&q=80"
                alt="Wine selection"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
            {/* Decorative Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl hidden md:block">
              <p className="font-serif text-4xl font-bold">38+</p>
              <p className="text-sm opacity-80">Years of Excellence</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Our Story
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              A Legacy of
              <br />
              <span className="text-primary">Culinary Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Founded in 1985 by the Rossi family, Bella Cucina has been serving authentic Italian cuisine for nearly four decades. Our recipes have been passed down through generations, preserving the true essence of Italian cooking while embracing modern techniques.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Every ingredient is carefully selected, every dish meticulously prepared, and every guest welcomed like family. This is not just a restaurant—it's a celebration of Italian culture, one plate at a time.
            </p>

            {/* Features */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
