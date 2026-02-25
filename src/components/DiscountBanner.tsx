import { useState, useEffect } from 'react';
import { X, Tag, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function DiscountBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 right-4 z-50 animate-in slide-in-from-right duration-500">
      <div className="bg-primary text-primary-foreground p-4 shadow-2xl max-w-xs relative animate-bounce">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 h-6 w-6 bg-background text-foreground rounded-full flex items-center justify-center hover:scale-110 transition-transform"
        >
          <X className="h-4 w-4" />
        </button>
        
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 bg-primary-foreground/20 flex items-center justify-center shrink-0 animate-pulse">
            <Tag className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="h-4 w-4 animate-spin" />
              <h3 className="font-bold">Limited Offer!</h3>
            </div>
            <p className="text-sm mb-3">Get 15% OFF on orders over $50!</p>
            <Link
              to="/shop"
              onClick={() => setIsVisible(false)}
              className="inline-block bg-background text-foreground px-4 py-2 text-sm font-medium hover:scale-105 transition-transform"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
