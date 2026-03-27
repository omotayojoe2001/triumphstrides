import { Link } from 'react-router-dom';
import { 
  Tractor, Baby, ChefHat, Camera, CalendarDays, Sparkles, Music,
  LucideIcon, ArrowRight
} from 'lucide-react';
import { Service } from '@/lib/types';
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
    if (service.ctaAction === 'sophia-music') return;
    onRequestService?.(service.id);
  };

  const content = (
    <div className={cn(
      "group relative rounded-xl overflow-hidden h-72 flex flex-col justify-end cursor-pointer",
      className
    )}>
      <img 
        src={service.image} 
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent" />
      
      <div className="relative z-10 p-5 text-background">
        <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-5 w-5 text-primary-foreground" />
        </div>
        <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
        <p className="text-sm text-background/70 line-clamp-2 mb-3">{service.description}</p>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
          {service.cta} <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </div>
  );

  if (service.ctaAction === 'sophia-music') {
    return (
      <Link to="/sophia-music" className="block h-full">
        {content}
      </Link>
    );
  }

  return <div onClick={handleClick}>{content}</div>;
}
