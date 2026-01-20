import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, ChefHat, ArrowLeft, Loader2, Chrome } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { fadeIn, staggerContainer } from '@/lib/animations';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/menu';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 500));

    const result = login(email, password);

    if (result.success) {
      toast({ title: 'Welcome back!', description: 'You have successfully logged in.' });
      navigate(from, { replace: true });
    } else {
      toast({ title: 'Login Failed', description: result.error, variant: 'destructive' });
    }

    setIsLoading(false);
  };

  const handleGoogleLogin = async () => {
    setIsGoogleLoading(true);
    
    const result = await loginWithGoogle();

    if (result.success) {
      toast({ title: 'Welcome!', description: 'You have successfully logged in with Google.' });
      navigate(from, { replace: true });
    } else {
      toast({ title: 'Google Login Failed', description: result.error, variant: 'destructive' });
    }

    setIsGoogleLoading(false);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-background to-muted">
        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          animate="show"
          className="w-full max-w-md"
        >
          <motion.div
            variants={fadeIn('up', 0)}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8"
          >
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.1)}
            className="flex items-center gap-3 mb-8"
          >
            <ChefHat className="h-10 w-10 text-primary" />
            <span className="font-serif text-3xl font-bold">Casa Romana</span>
          </motion.div>

          <motion.h1 
            variants={fadeIn('up', 0.2)}
            className="font-serif text-3xl font-bold text-foreground mb-2"
          >
            Welcome Back
          </motion.h1>
          <motion.p 
            variants={fadeIn('up', 0.3)}
            className="text-muted-foreground mb-8"
          >
            Sign in to access exclusive features
          </motion.p>

          <motion.form 
            variants={fadeIn('up', 0.4)}
            onSubmit={handleSubmit} 
            className="space-y-6 mb-6"
          >
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@casaromana.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="py-6 px-4"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="py-6 px-4 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <Button type="submit" variant="hero" className="w-full py-6 text-lg" size="lg" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : 'Sign In'}
            </Button>
          </motion.form>

          {/* Google Login */}
          <motion.div 
            variants={fadeIn('up', 0.5)}
            className="space-y-4"
          >
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-muted"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background text-muted-foreground px-2">Or continue with</span>
              </div>
            </div>

            <Button
              onClick={handleGoogleLogin}
              variant="outline"
              className="w-full py-6 flex items-center justify-center gap-3"
              disabled={isGoogleLoading}
            >
              {isGoogleLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Chrome className="h-5 w-5" />
              )}
              {isGoogleLoading ? 'Signing in...' : 'Continue with Google'}
            </Button>
          </motion.div>

          <motion.div 
            variants={fadeIn('up', 0.6)}
            className="mt-8 p-4 bg-muted rounded-lg border border-muted-foreground/20"
          >
            <p className="text-sm font-medium text-foreground mb-2">Demo Credentials:</p>
            <p className="text-sm text-muted-foreground">Email: admin@casaromana.com</p>
            <p className="text-sm text-muted-foreground">Password: gourmet2024</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Right - Animated Image */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80"
            alt="Restaurant ambiance"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-foreground/90 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center text-primary-foreground p-8 max-w-lg"
          >
            <h2 className="font-serif text-4xl font-bold mb-4">Join Our Family</h2>
            <p className="text-lg opacity-80">Access exclusive recipes and add your own creations to our menu.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;
