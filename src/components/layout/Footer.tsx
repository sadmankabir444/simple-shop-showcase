import { Link } from 'react-router-dom';
import { ChefHat, MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <ChefHat className="h-8 w-8 text-gold" />
              <span className="font-serif text-2xl font-bold">
                Bella <span className="text-gold">Cucina</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed">
              An authentic Italian dining experience, bringing the finest flavors of Italy to your table since 1985.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-gold-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-gold-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Our Menu', href: '/menu' },
                { label: 'Login', href: '/login' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="h-5 w-5 text-gold mt-0.5" />
                <span>123 Via Roma, Milan, Italy</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Phone className="h-5 w-5 text-gold" />
                <span>+39 02 1234 5678</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Mail className="h-5 w-5 text-gold" />
                <span>info@bellacucina.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl font-semibold">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <Clock className="h-5 w-5 text-gold mt-0.5" />
                <div>
                  <p className="font-medium text-primary-foreground">Mon - Fri</p>
                  <p>12:00 PM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <Clock className="h-5 w-5 text-gold mt-0.5" />
                <div>
                  <p className="font-medium text-primary-foreground">Sat - Sun</p>
                  <p>11:00 AM - 11:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/50 text-sm">
          <p>© {new Date().getFullYear()} Bella Cucina. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
