import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChefHat, LogIn, LogOut, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, user, logout } = useAuth();
  const location = useLocation();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <ChefHat className="h-8 w-8 text-primary transition-transform group-hover:rotate-12" />
            <span className="font-serif text-2xl font-bold text-foreground">
              Casa <span className="text-primary">Romana</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-primary'
                    : 'text-foreground/70 hover:text-primary'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <Link to="/add-dish">
                  <Button variant="gold" size="sm">
                    <Plus className="h-4 w-4" />
                    Add Dish
                  </Button>
                </Link>
                <span className="text-sm text-muted-foreground">
                  Welcome, {user?.name}
                </span>
                <Button variant="ghost" size="sm" onClick={logout}>
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button variant="default" size="sm">
                  <LogIn className="h-4 w-4" />
                  Login
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4 border-t border-border">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 font-medium ${
                      isActive(link.href)
                        ? 'text-primary'
                        : 'text-foreground/70'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-border space-y-3">
                  {isLoggedIn ? (
                    <>
                      <Link to="/add-dish" onClick={() => setIsOpen(false)}>
                        <Button variant="gold" className="w-full">
                          <Plus className="h-4 w-4" />
                          Add Dish
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        className="w-full"
                        onClick={() => {
                          logout();
                          setIsOpen(false);
                        }}
                      >
                        <LogOut className="h-4 w-4" />
                        Logout
                      </Button>
                    </>
                  ) : (
                    <Link to="/login" onClick={() => setIsOpen(false)}>
                      <Button variant="default" className="w-full">
                        <LogIn className="h-4 w-4" />
                        Login
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
