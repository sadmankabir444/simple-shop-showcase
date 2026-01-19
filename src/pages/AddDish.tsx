import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { addDish, Dish } from '@/lib/dishes';

const AddDish = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({ name: '', description: '', longDescription: '', price: '', category: 'main' as Dish['category'], image: '', ingredients: '', dietary: '', prepTime: '', calories: '', chef: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await addDish({
      ...form,
      price: parseFloat(form.price),
      calories: parseInt(form.calories),
      ingredients: form.ingredients.split(',').map(i => i.trim()),
      dietary: form.dietary.split(',').map(d => d.trim()),
      featured: false,
    });

    toast({ title: 'Success!', description: 'Dish has been added to the menu.' });
    setIsLoading(false);
    navigate('/menu');
  };

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-serif text-4xl font-bold text-foreground mb-2">Add New Dish</h1>
            <p className="text-muted-foreground mb-8">Create a new menu item</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div><Label>Name</Label><Input value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required /></div>
                <div><Label>Price (€)</Label><Input type="number" value={form.price} onChange={(e) => setForm({...form, price: e.target.value})} required /></div>
              </div>
              <div><Label>Short Description</Label><Input value={form.description} onChange={(e) => setForm({...form, description: e.target.value})} required /></div>
              <div><Label>Full Description</Label><Textarea value={form.longDescription} onChange={(e) => setForm({...form, longDescription: e.target.value})} required /></div>
              <div className="grid md:grid-cols-2 gap-4">
                <div><Label>Category</Label><Select value={form.category} onValueChange={(v) => setForm({...form, category: v as Dish['category']})}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="appetizer">Appetizer</SelectItem><SelectItem value="main">Main</SelectItem><SelectItem value="dessert">Dessert</SelectItem><SelectItem value="drink">Drink</SelectItem></SelectContent></Select></div>
                <div><Label>Image URL</Label><Input value={form.image} onChange={(e) => setForm({...form, image: e.target.value})} required /></div>
              </div>
              <div><Label>Ingredients (comma separated)</Label><Input value={form.ingredients} onChange={(e) => setForm({...form, ingredients: e.target.value})} required /></div>
              <div className="grid md:grid-cols-3 gap-4">
                <div><Label>Prep Time</Label><Input value={form.prepTime} onChange={(e) => setForm({...form, prepTime: e.target.value})} placeholder="20 min" required /></div>
                <div><Label>Calories</Label><Input type="number" value={form.calories} onChange={(e) => setForm({...form, calories: e.target.value})} required /></div>
                <div><Label>Chef</Label><Input value={form.chef} onChange={(e) => setForm({...form, chef: e.target.value})} required /></div>
              </div>
              <div><Label>Dietary (comma separated)</Label><Input value={form.dietary} onChange={(e) => setForm({...form, dietary: e.target.value})} placeholder="Vegetarian, Gluten-Free" /></div>
              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isLoading}>{isLoading ? 'Adding...' : 'Add Dish'}</Button>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AddDish;
