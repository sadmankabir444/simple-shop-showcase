export interface Dish {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  category: 'appetizer' | 'main' | 'dessert' | 'drink';
  image: string;
  ingredients: string[];
  dietary: string[];
  prepTime: string;
  calories: number;
  featured: boolean;
  chef: string;
}

// Mock dishes data (simulating Express API response)
export const dishes: Dish[] = [
  {
    id: '1',
    name: 'Truffle Risotto',
    description: 'Creamy Arborio rice with black truffle and aged Parmesan',
    longDescription: 'Our signature risotto features the finest Arborio rice, slowly cooked to perfection with a rich vegetable broth. Finished with generous shavings of black winter truffle and 24-month aged Parmigiano-Reggiano. A true celebration of Italian culinary tradition.',
    price: 38,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800',
    ingredients: ['Arborio rice', 'Black truffle', 'Parmigiano-Reggiano', 'White wine', 'Shallots', 'Butter'],
    dietary: ['Vegetarian', 'Gluten-Free'],
    prepTime: '25 min',
    calories: 520,
    featured: true,
    chef: 'Chef Antonio',
  },
  {
    id: '2',
    name: 'Seared Sea Bass',
    description: 'Mediterranean sea bass with lemon beurre blanc and capers',
    longDescription: 'Wild-caught Mediterranean sea bass, pan-seared to golden perfection. Served on a bed of sautéed spinach with a delicate lemon beurre blanc sauce, garnished with crispy capers and fresh herbs from our garden.',
    price: 45,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800',
    ingredients: ['Sea bass', 'Lemon', 'Capers', 'Butter', 'Spinach', 'White wine'],
    dietary: ['Gluten-Free', 'Pescatarian'],
    prepTime: '20 min',
    calories: 380,
    featured: true,
    chef: 'Chef Maria',
  },
  {
    id: '3',
    name: 'Burrata Caprese',
    description: 'Fresh burrata with heirloom tomatoes and aged balsamic',
    longDescription: 'Creamy imported burrata cheese, hand-pulled daily from Puglia. Served with vine-ripened heirloom tomatoes, fresh basil leaves, extra virgin olive oil, and a drizzle of 25-year aged balsamic from Modena.',
    price: 22,
    category: 'appetizer',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=800',
    ingredients: ['Burrata', 'Heirloom tomatoes', 'Basil', 'Olive oil', 'Aged balsamic'],
    dietary: ['Vegetarian', 'Gluten-Free'],
    prepTime: '10 min',
    calories: 290,
    featured: true,
    chef: 'Chef Antonio',
  },
  {
    id: '4',
    name: 'Tiramisu Classico',
    description: 'Traditional Italian tiramisu with espresso and mascarpone',
    longDescription: 'Our family recipe passed down through generations. Delicate ladyfinger biscuits soaked in freshly brewed espresso, layered with light mascarpone cream and dusted with premium cocoa powder. A perfect ending to any meal.',
    price: 16,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800',
    ingredients: ['Mascarpone', 'Espresso', 'Ladyfingers', 'Cocoa', 'Eggs', 'Sugar'],
    dietary: ['Vegetarian'],
    prepTime: '15 min',
    calories: 420,
    featured: true,
    chef: 'Pastry Chef Elena',
  },
  {
    id: '5',
    name: 'Osso Buco',
    description: 'Slow-braised veal shanks with gremolata and saffron risotto',
    longDescription: 'Tender veal shanks braised for hours in white wine, tomatoes, and aromatic vegetables. Served with traditional gremolata and accompanied by our signature saffron risotto. A Milanese classic.',
    price: 52,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1544025162-d76978a8e2d5?w=800',
    ingredients: ['Veal shank', 'White wine', 'Tomatoes', 'Gremolata', 'Saffron', 'Arborio rice'],
    dietary: ['Gluten-Free'],
    prepTime: '180 min',
    calories: 680,
    featured: false,
    chef: 'Chef Antonio',
  },
  {
    id: '6',
    name: 'Carpaccio di Manzo',
    description: 'Thinly sliced beef tenderloin with arugula and truffle oil',
    longDescription: 'Paper-thin slices of premium beef tenderloin, dressed with peppery arugula, shaved Parmigiano-Reggiano, and finished with white truffle oil. A light and elegant start to your meal.',
    price: 26,
    category: 'appetizer',
    image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800',
    ingredients: ['Beef tenderloin', 'Arugula', 'Parmesan', 'Truffle oil', 'Lemon'],
    dietary: ['Gluten-Free'],
    prepTime: '15 min',
    calories: 220,
    featured: false,
    chef: 'Chef Maria',
  },
  {
    id: '7',
    name: 'Panna Cotta',
    description: 'Silky vanilla cream with fresh berry compote',
    longDescription: 'Delicate Italian cream dessert infused with Madagascar vanilla bean, topped with a vibrant compote of seasonal berries and a hint of fresh mint. Light, creamy, and utterly delicious.',
    price: 14,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800',
    ingredients: ['Cream', 'Vanilla', 'Mixed berries', 'Sugar', 'Gelatin'],
    dietary: ['Vegetarian', 'Gluten-Free'],
    prepTime: '20 min',
    calories: 340,
    featured: false,
    chef: 'Pastry Chef Elena',
  },
  {
    id: '8',
    name: 'Aperol Spritz',
    description: 'Classic Italian aperitif with Prosecco and orange',
    longDescription: 'The quintessential Italian aperitivo. Premium Aperol combined with crisp Prosecco and a splash of soda, served over ice with a fresh orange slice. The perfect way to begin your evening.',
    price: 14,
    category: 'drink',
    image: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?w=800',
    ingredients: ['Aperol', 'Prosecco', 'Soda water', 'Orange'],
    dietary: ['Vegan', 'Gluten-Free'],
    prepTime: '5 min',
    calories: 180,
    featured: false,
    chef: 'Bartender Marco',
  },
];

// Simulated API functions
export const getAllDishes = (): Promise<Dish[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...dishes]), 300);
  });
};

export const getDishById = (id: string): Promise<Dish | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(dishes.find((d) => d.id === id)), 200);
  });
};

export const getFeaturedDishes = (): Promise<Dish[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(dishes.filter((d) => d.featured)), 200);
  });
};

export const addDish = (dish: Omit<Dish, 'id'>): Promise<Dish> => {
  return new Promise((resolve) => {
    const newDish: Dish = {
      ...dish,
      id: String(dishes.length + 1),
    };
    dishes.push(newDish);
    setTimeout(() => resolve(newDish), 300);
  });
};

export const getDishesByCategory = (category: Dish['category']): Promise<Dish[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(dishes.filter((d) => d.category === category)), 200);
  });
};
