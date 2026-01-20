import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, isAuthenticated, getCurrentUser, login as authLogin, logout as authLogout } from '@/lib/auth';
import { firebaseSignInWithGoogle, firebaseSignOut, isFirebaseAuthenticated, getCurrentFirebaseUser } from '@/lib/firebaseAuth';

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => { success: boolean; error?: string };
  loginWithGoogle: () => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check authentication status on mount
    if (isAuthenticated()) {
      setUser(getCurrentUser());
    }
    setIsLoading(false);
  }, []);

  const login = (email: string, password: string) => {
    const result = authLogin(email, password);
    if (result.success && result.user) {
      setUser(result.user);
    }
    return { success: result.success, error: result.error };
  };

  const loginWithGoogle = async (): Promise<{ success: boolean; error?: string }> => {
    const result = await firebaseSignInWithGoogle();
    if (result.success && result.user) {
      setUser(result.user);
    }
    return { success: result.success, error: result.error };
  };

  const logout = () => {
    authLogout();
    firebaseSignOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, loginWithGoogle, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
