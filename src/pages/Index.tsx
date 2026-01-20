import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import FeaturedDishesSection from '@/components/home/FeaturedDishesSection';
import ChefSection from '@/components/home/ChefSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import GallerySection from '@/components/home/GallerySection';
import NewsletterSection from '@/components/home/NewsletterSection';
import ClientTestimonials from '@/components/home/ClientTestimonials';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <FeaturedDishesSection />
      <ChefSection />
      <TestimonialsSection />
      <ClientTestimonials />
      <GallerySection />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
