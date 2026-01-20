import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { fadeIn, staggerContainer } from '@/lib/animations';

const ClientTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Nusrat Jahan',
      role: 'Food Enthusiast',
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      content: 'The perfect marriage of Roman technique and Bangladeshi warmth. Their carbonara is legendary!',
      rating: 5,
      date: 'June 2024'
    },
    {
      id: 2,
      name: 'Mahfuz Khandaker',
      role: 'Local Blogger',
      image: 'https://randomuser.me/api/portraits/men/44.jpg',
      content: 'Casa Romana redefines fusion cuisine. Authentic Roman recipes with local soul - simply brilliant!',
      rating: 5,
      date: 'July 2024'
    },
    {
      id: 3,
      name: 'Sharmin Sultana',
      role: 'Regular Patron',
      image: 'https://randomuser.me/api/portraits/women/22.jpg',
      content: 'Family celebrations here for 3 years. The osso buco and tiramisu are unmatched in Bangladesh.',
      rating: 5,
      date: 'August 2024'
    }
  ];

  return (
    <section className="py-24 bg-background">
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
            Customer Voices
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Fusion <span className="text-primary">Success Stories</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our valued customers who have experienced our unique Roman-Bangladeshi fusion cuisine.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={fadeIn('up', 0.2 + index * 0.1)}
              className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow relative group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gold fill-gold" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground mt-1">{testimonial.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientTestimonials;