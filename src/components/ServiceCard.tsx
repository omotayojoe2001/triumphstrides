import { Link } from 'react-router-dom';
import { 
  Tractor, Baby, ChefHat, Camera, CalendarDays, Sparkles, Music,
  LucideIcon
} from 'lucide-react';
import { Service } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const iconMap: Record<string, LucideIcon> = {
  Tractor,
  Baby,
  ChefHat,
  Camera,
  CalendarDays,
  Sparkles,
  Music,
};

interface ServiceCardProps {
  service: Service;
  className?: string;
  onRequestService?: (serviceId: string) => void;
}

export function ServiceCard({ service, className, onRequestService }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Sparkles;

  const handleClick = () => {
    if (service.ctaAction === 'sophia-music') {
      return; // Link handles navigation
    }
    onRequestService?.(service.id);
  };

  const content = (
    <div className={cn(
      "bg-card border border-border p-6 h-full flex flex-col hover:shadow-md transition-shadow",
      className
    )}>
      <div className="h-12 w-12 bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      
      <h3 className="text-lg font-semibold text-foreground mb-2">
        {service.title}
      </h3>
      
      <p className="text-sm text-muted-foreground mb-4 flex-1">
        {service.description}
      </p>
      
      <Button 
        variant="outline" 
        className="w-full border-foreground hover:bg-foreground hover:text-background"
        onClick={service.ctaAction !== 'sophia-music' ? handleClick : undefined}
      >
        {service.cta}
      </Button>
    </div>
  );

  if (service.ctaAction === 'sophia-music') {
    return (
      <Link to="/sophia-music" className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
}
