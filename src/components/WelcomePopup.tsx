import { useState, useEffect } from 'react';
import { X, ShoppingBag, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenWelcomePopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenWelcomePopup', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative bg-background border-2 border-primary max-w-md w-full p-8 shadow-2xl animate-in zoom-in duration-300">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center h-16 w-16 bg-primary/10 mb-2">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          
          <h2 className="text-2xl font-bold">Welcome to Triumph Strides!</h2>
          
          <p className="text-muted-foreground">
            Discover authentic African foods and trusted services in Calgary. 
            Get <span className="font-bold text-primary">10% OFF</span> your first order!
          </p>

          <div className="pt-4 space-y-3">
            <Button 
              asChild 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link to="/shop" onClick={handleClose}>
                <ShoppingBag className="mr-2 h-4 w-4" />
                Shop Now
              </Link>
            </Button>
            
            <button
              onClick={handleClose}
              className="w-full text-sm text-muted-foreground hover:text-foreground"
            >
              Continue browsing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
