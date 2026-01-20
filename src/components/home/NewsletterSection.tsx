import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { fadeIn } from '@/lib/animations';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: 'Welcome to Casa Romana!',
      description: 'Thank you for joining our fusion community.',
    });
    
    setEmail('');
    setIsLoading(false);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={fadeIn('up', 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            variants={fadeIn('up', 0.1)}
            className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
          >
            <Mail className="h-8 w-8 text-primary" />
          </motion.div>
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Join Our <span className="text-primary">Community</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 0.3)}
            className="text-muted-foreground text-lg mb-8"
          >
            Subscribe to receive exclusive recipes, special offers, and updates on our unique Roman-Bangladeshi fusion menu.
          </motion.p>

          <motion.form 
            variants={fadeIn('up', 0.4)}
            onSubmit={handleSubmit} 
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 text-base"
              required
            />
            <Button type="submit" variant="hero" size="lg" disabled={isLoading}>
              {isLoading ? (
                'Subscribing...'
              ) : (
                <>
                  Subscribe
                  <Send className="h-4 w-4" />
                </>
              )}
            </Button>
          </motion.form>

          <motion.p 
            variants={fadeIn('up', 0.5)}
            className="text-muted-foreground text-sm mt-4"
          >
            We respect your privacy. Unsubscribe anytime. Taste the fusion!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
