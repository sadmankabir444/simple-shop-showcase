import { Link } from 'react-router-dom';
import { Clock, Flame } from 'lucide-react';
import { Dish } from '@/lib/dishes';

interface DishCardProps {
  dish: Dish;
}

const DishCard = ({ dish }: DishCardProps) => {
  return (
    <Link to={`/menu/${dish.id}`} className="group block">
      <div className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {dish.featured && (
            <div className="absolute top-3 left-3 bg-gold text-gold-foreground text-xs font-semibold px-3 py-1 rounded-full">
              Featured
            </div>
          )}
          <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full">
            €{dish.price}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-xs text-primary font-medium uppercase tracking-wider mb-1">
            {dish.category}
          </p>
          <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {dish.name}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
            {dish.description}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {dish.prepTime}
            </span>
            <span className="flex items-center gap-1">
              <Flame className="h-4 w-4" />
              {dish.calories} cal
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DishCard;
