import { signInWithPopup, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { auth, googleProvider } from './firebase';

// Firebase authentication utilities
export const firebaseSignInWithGoogle = async (): Promise<{ success: boolean; user?: any; error?: string }> => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    
    // Convert Firebase user to our User interface
    const userData = {
      email: user.email || '',
      name: user.displayName || user.email?.split('@')[0] || 'User',
      role: 'user' as const
    };
    
    return { success: true, user: userData };
  } catch (error: any) {
    console.error('Google sign-in error:', error);
    return { success: false, error: error.message || 'Google sign-in failed' };
  }
};

export const firebaseSignInWithEmail = async (email: string, password: string): Promise<{ success: boolean; user?: any; error?: string }> => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const user = result.user;
    
    // Convert Firebase user to our User interface
    const userData = {
      email: user.email || '',
      name: user.displayName || user.email?.split('@')[0] || 'User',
      role: 'user' as const
    };
    
    return { success: true, user: userData };
  } catch (error: any) {
    console.error('Email sign-in error:', error);
    let errorMessage = 'Invalid email or password';
    
    if (error.code === 'auth/user-not-found') {
      errorMessage = 'No account found with this email';
    } else if (error.code === 'auth/wrong-password') {
      errorMessage = 'Incorrect password';
    } else if (error.code === 'auth/invalid-email') {
      errorMessage = 'Invalid email format';
    }
    
    return { success: false, error: errorMessage };
  }
};

export const firebaseSignOut = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Sign-out error:', error);
  }
};

export const getCurrentFirebaseUser = (): User | null => {
  return auth.currentUser;
};

export const isFirebaseAuthenticated = (): boolean => {
  return !!auth.currentUser;
};