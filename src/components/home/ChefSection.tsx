import { motion } from 'framer-motion';

const ChefSection = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Meet the Mastermind
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Chef Antonio
              <br />
              <span className="text-primary">Rossi</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              With over three decades of culinary mastery, Chef Antonio Rossi brings the authentic flavors of his grandmother's kitchen to every dish. Trained in the finest restaurants of Milan and Rome, he returned home to continue his family's legacy.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              "Cooking is not just about food—it's about memories, love, and bringing people together. Every dish I create carries a piece of my heart and the traditions of my ancestors."
            </p>

            {/* Achievements */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: '2', label: 'Michelin Stars' },
                { value: '30+', label: 'Years Experience' },
                { value: '12', label: 'Culinary Awards' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-secondary rounded-xl">
                  <p className="font-serif text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80"
                alt="Chef Antonio Rossi"
                className="rounded-2xl shadow-2xl w-full"
              />
              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold rounded-2xl -z-10" />
              
              {/* Signature Badge */}
              <div className="absolute -bottom-8 -left-8 bg-foreground text-primary-foreground rounded-2xl p-6 shadow-xl">
                <p className="font-serif text-lg italic">"La cucina è amore"</p>
                <p className="text-sm opacity-70 mt-1">— Chef Antonio</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChefSection;
