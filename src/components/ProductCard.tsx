import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { Product } from '@/lib/types';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { addItem, getConvertedPrice, formatPrice } = useCart();
  
  const firstVariant = product.variants[0];
  const lowestPrice = product.variants.reduce((min, v) => {
    if (v.price === null) return min;
    if (min === null) return v.price;
    return v.price < min ? v.price : min;
  }, null as number | null);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (firstVariant && firstVariant.inStock && firstVariant.price !== null) {
      addItem(product.id, firstVariant.id);
    }
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className={cn(
        "group block bg-card border border-border hover:shadow-md transition-shadow",
        className
      )}
    >
      <div className="aspect-square bg-muted relative overflow-hidden">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {!firstVariant?.inStock && (
          <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
            <span className="bg-background px-3 py-1 text-sm font-medium">Out of Stock</span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
        <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {product.name}
        </h3>
        
        <div className="mt-3 flex items-center justify-between">
          <div>
            {lowestPrice !== null ? (
              <p className="font-semibold text-foreground">
                {product.variants.length > 1 && <span className="text-sm font-normal text-muted-foreground">From </span>}
                {formatPrice(getConvertedPrice(lowestPrice))}
              </p>
            ) : (
              <p className="text-sm text-muted-foreground">Price on request</p>
            )}
          </div>
          
          {firstVariant?.inStock && firstVariant?.price !== null && (
            <Button
              size="icon"
              variant="outline"
              className="h-8 w-8 border-foreground hover:bg-foreground hover:text-background"
              onClick={handleQuickAdd}
            >
              <Plus className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </Link>
  );
}
