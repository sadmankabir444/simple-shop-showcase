import Cookies from 'js-cookie';

const AUTH_COOKIE_KEY = 'bella_cucina_auth';
const USER_COOKIE_KEY = 'bella_cucina_user';

// Mock credentials for demonstration
const MOCK_CREDENTIALS = {
  email: 'admin@bellacucina.com',
  password: 'gourmet2024',
};

export interface User {
  email: string;
  name: string;
  role: 'admin' | 'user';
}

export const login = (email: string, password: string): { success: boolean; user?: User; error?: string } => {
  if (email === MOCK_CREDENTIALS.email && password === MOCK_CREDENTIALS.password) {
    const user: User = {
      email: MOCK_CREDENTIALS.email,
      name: 'Chef Md Fahim',
      role: 'admin',
    };
    
    // Set cookies with 7 day expiry
    Cookies.set(AUTH_COOKIE_KEY, 'authenticated', { expires: 7 });
    Cookies.set(USER_COOKIE_KEY, JSON.stringify(user), { expires: 7 });
    
    return { success: true, user };
  }
  
  return { success: false, error: 'Invalid email or password' };
};

export const logout = (): void => {
  Cookies.remove(AUTH_COOKIE_KEY);
  Cookies.remove(USER_COOKIE_KEY);
};

export const isAuthenticated = (): boolean => {
  return Cookies.get(AUTH_COOKIE_KEY) === 'authenticated';
};

export const getCurrentUser = (): User | null => {
  const userCookie = Cookies.get(USER_COOKIE_KEY);
  if (userCookie) {
    try {
      return JSON.parse(userCookie) as User;
    } catch {
      return null;
    }
  }
  return null;
};

// Export credentials for README
export const getMockCredentials = () => MOCK_CREDENTIALS;
