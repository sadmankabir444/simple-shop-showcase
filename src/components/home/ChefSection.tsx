import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';

const ChefSection = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            variants={fadeIn('left', 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Meet the Visionary
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Chef Md Fahim
              <br />
              <span className="text-primary">Founder</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              With over 14 years of culinary expertise, Chef Md Fahim brings authentic Roman recipes to Bangladesh. Trained in Rome's finest kitchens, he combines Italian techniques with local flavors to create something truly unique.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              "Cooking is about fusion—not just of flavors, but of cultures. Every dish tells the story of two worlds coming together in harmony."
            </p>

            {/* Achievements */}
            <motion.div 
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6"
            >
              {[{ value: '1', label: 'National Award' },
                { value: '14+', label: 'Years Experience' },
                { value: '80+', label: 'Signature Dishes' },
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  variants={fadeIn('up', 0.3 + index * 0.1)}
                  className="text-center p-4 bg-secondary rounded-xl"
                >
                  <p className="font-serif text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80"
                alt="Chef Md Fahim"
                className="rounded-2xl shadow-2xl w-full"
              />
              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold rounded-2xl -z-10" />
              
              {/* Signature Badge */}
              <motion.div 
                variants={fadeIn('up', 0.5)}
                className="absolute -bottom-8 -left-8 bg-foreground text-primary-foreground rounded-2xl p-6 shadow-xl"
              >
                <p className="font-serif text-lg italic">"La cucina è amore"</p>
                <p className="text-sm opacity-70 mt-1">— Chef Fahim</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChefSection;