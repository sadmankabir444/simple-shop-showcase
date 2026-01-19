import { motion } from 'framer-motion';
import { useState } from 'react';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80',
    alt: 'Restaurant interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600&q=80',
    alt: 'Pasta dish',
  },
  {
    src: 'https://images.unsplash.com/photo-1540914124281-342587941389?w=600&q=80',
    alt: 'Wine cellar',
  },
  {
    src: 'https://images.unsplash.com/photo-1574966739987-65e38db0f7f9?w=600&q=80',
    alt: 'Table setting',
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    alt: 'Kitchen action',
  },
  {
    src: 'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=600&q=80',
    alt: 'Dessert plating',
  },
];

const GallerySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-foreground">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium tracking-wider uppercase text-sm">
            Our Gallery
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mt-3 mb-4">
            A Visual <span className="text-gold">Journey</span>
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Step inside our world of culinary artistry and elegant ambiance.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-xl ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  hoveredIndex === index ? 'scale-110' : 'scale-100'
                } ${index === 0 ? 'min-h-[400px]' : 'h-48 md:h-56'}`}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                } flex items-end p-6`}
              >
                <p className="text-primary-foreground font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
