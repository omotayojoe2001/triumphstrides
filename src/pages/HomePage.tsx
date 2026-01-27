import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Pause, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { ServiceCard } from '@/components/ServiceCard';
import { ServiceRequestModal } from '@/components/ServiceRequestModal';
import { products, services, faqs, sophiaTracks } from '@/lib/data';

export function HomePage() {
  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const featuredProducts = products.filter(p => p.featured).slice(0, 4);
  const displayedServices = services.slice(0, 6);

  const handleRequestService = (serviceId: string) => {
    setSelectedService(serviceId);
    setServiceModalOpen(true);
  };

  const categories = [
    { title: 'African Foods', href: '/shop', image: '/placeholder.svg' },
    { title: 'Event Catering', href: '/services', image: '/placeholder.svg' },
    { title: 'Daycare (0-4)', href: '/services', image: '/placeholder.svg' },
    { title: 'Ranch Services', href: '/services', image: '/placeholder.svg' },
    { title: 'Cleaning', href: '/services', image: '/placeholder.svg' },
    { title: 'Event Planning', href: '/services', image: '/placeholder.svg' },
    { title: 'Sophia Music', href: '/sophia-music', image: '/placeholder.svg' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-muted">
        <div className="container-tight py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              African Foods & Trusted Services in Calgary
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Shop quality African ingredients, book event catering, childcare, ranch services, 
              cleaning, and live music. Serving Calgary with excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-base">
                <Link to="/shop">
                  Shop Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-2 border-foreground h-12 px-8 text-base hover:bg-foreground hover:text-background">
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <Link 
                key={index}
                to={category.href}
                className="group relative aspect-square bg-muted overflow-hidden"
              >
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/50 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-background font-semibold text-center px-4">
                    {category.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-muted">
        <div className="container-tight">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
            <Link 
              to="/shop" 
              className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
            >
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Beyond quality African foods, we offer a range of trusted services to support 
              your family and events.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedServices.map(service => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onRequestService={handleRequestService}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-2 border-foreground hover:bg-foreground hover:text-background">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sophia Music Spotlight */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm uppercase tracking-wider text-background/60 mb-4 block">
                Live Entertainment
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Sophia Music</h2>
              <p className="text-background/80 mb-6 text-lg">
                Bring the soul and energy of African music to your event. Sophia delivers 
                unforgettable live performances for weddings, corporate events, parties, and more.
              </p>
              
              {/* Mini Player */}
              <div className="bg-background/10 p-4 mb-6">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="h-12 w-12 flex items-center justify-center bg-primary text-primary-foreground"
                  >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-1" />}
                  </button>
                  <div className="flex-1">
                    <p className="font-medium">{sophiaTracks[0]?.title || 'Sample Track'}</p>
                    <p className="text-sm text-background/60">{sophiaTracks[0]?.duration || '0:00'}</p>
                  </div>
                </div>
              </div>

              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/sophia-music">
                  Invite Sophia
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="aspect-square bg-background/10">
              <img 
                src="/placeholder.svg" 
                alt="Sophia Music"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted">
        <div className="container-tight">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Amara O.', text: 'The quality of the palm oil and gari is exceptional. Feels like I\'m back home!' },
              { name: 'Michael T.', text: 'Sophia performed at our wedding and it was absolutely magical. Highly recommend!' },
              { name: 'Jennifer K.', text: 'The catering service was outstanding. Authentic flavors and professional service.' },
            ].map((testimonial, index) => (
              <div key={index} className="bg-background p-6 border border-border">
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-tight max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-border">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-4 flex items-center justify-between text-left hover:bg-muted transition-colors"
                >
                  <span className="font-medium">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-4 pb-4 text-muted-foreground">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceRequestModal 
        isOpen={serviceModalOpen}
        onClose={() => setServiceModalOpen(false)}
        preselectedService={selectedService}
      />
    </div>
  );
}

export default HomePage;
