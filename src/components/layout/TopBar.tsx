import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function TopBar() {
  return (
    <div className="bg-foreground text-background text-sm py-2">
      <div className="container-tight flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          <span>Calgary, Alberta • Delivery & Pickup Available</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/services" className="hover:underline">Services</Link>
          <Link to="/shop" className="hover:underline">Shop</Link>
        </div>
      </div>
    </div>
  );
}
