import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Pause, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Globe, Truck, ShieldCheck, MessageCircle, Sparkles, Flame, Handshake, Heart, HelpCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { ServiceCard } from '@/components/ServiceCard';
import { ServiceRequestModal } from '@/components/ServiceRequestModal';
import { products, services, faqs, sophiaTracks } from '@/lib/data';

const testimonials = [
  { name: 'Amara O.', text: 'The quality of the palm oil and gari is exceptional. Feels like I\'m back home!', stars: 5 },
  { name: 'Michael T.', text: 'Sophia performed at our wedding and it was absolutely magical. Highly recommend!', stars: 5 },
  { name: 'Jennifer K.', text: 'The catering service was outstanding. Authentic flavors and professional service.', stars: 5 },
  { name: 'David A.', text: 'Their daycare service is a lifesaver. My kids love it there and I trust them completely.', stars: 5 },
  { name: 'Grace N.', text: 'Best African food store in Calgary. The fufu and zobo are always fresh and authentic.', stars: 5 },
];

export function HomePage() {
  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const featuredProducts = products.filter(p => p.featured).slice(0, 6);
  const displayedServices = services.slice(0, 6);

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = () => {
    setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 4000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  const handleRequestService = (serviceId: string) => {
    setSelectedService(serviceId);
    setServiceModalOpen(true);
  };

  const categories = [
    { title: 'African Foods', href: '/shop', image: '/products/palmoil(small).jpg' },
    { title: 'Event Catering', href: '/services', image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=600&fit=crop' },
    { title: 'Daycare (0-4)', href: '/services', image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=600&fit=crop' },
    { title: 'Ranch Services', href: '/services', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=600&fit=crop' },
    { title: 'Cleaning', href: '/services', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=600&fit=crop' },
    { title: 'Event Planning', href: '/services', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=600&fit=crop' },
    { title: 'Sophia Music', href: '/sophia-music', image: '/sophiaimagemain.jpeg' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-muted overflow-hidden">
        <div className="absolute inset-0">
          <div className="grid grid-cols-4 h-full">
            <img src="/products/palmoil(small).jpg" alt="" className="w-full h-full object-cover" />
            <img src="/products/fufu.jpg" alt="" className="w-full h-full object-cover" />
            <img src="/products/ijebugarri.jpg" alt="" className="w-full h-full object-cover" />
            <img src="/products/plantainflour.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75" />
        </div>
        
        <div className="container-tight py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Globe className="h-4 w-4" /> Proudly serving Calgary, Alberta
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              African Foods &{' '}
              <span className="text-primary">Trusted Services</span>{' '}
              in Calgary
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Shop quality African ingredients, book event catering, childcare, ranch services, 
              cleaning, and live music. Serving Calgary with excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-base shadow-md hover:shadow-lg transition-all">
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

            <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-border/50">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Truck className="h-4 w-4 text-primary" /> Local Delivery
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-primary" /> Quality Guaranteed
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Cards — Bento Grid */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" /> Everything you need
            </span>
            <h2 className="text-2xl md:text-3xl font-bold">What We Offer</h2>
          </div>
          {/* Bento layout: 2 tall + 2 small on left, 1 wide + 2 small on right */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[140px] md:auto-rows-[180px]">
            {categories.map((category, index) => {
              const spanClass = 
                index === 0 ? 'md:col-span-2 md:row-span-2' :
                index === 6 ? 'col-span-2' :
                '';
              return (
                <Link 
                  key={index}
                  to={category.href}
                  className={`group relative bg-muted overflow-hidden rounded-xl ${spanClass}`}
                >
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent group-hover:from-primary/80 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-end p-4">
                    <span className="text-background font-semibold text-sm md:text-base drop-shadow-lg">
                      {category.title}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products — Horizontal Scroll */}
      <section className="section-padding bg-gradient-to-b from-muted to-background">
        <div className="container-tight">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-2">
                <Flame className="h-3 w-3" /> Popular picks
              </span>
              <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
            </div>
            <Link 
              to="/shop" 
              className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
            >
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3 lg:grid-cols-4 md:overflow-visible">
            {featuredProducts.map(product => (
              <div key={product.id} className="min-w-[260px] snap-start md:min-w-0">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services — Alternating large/small layout */}
      <section className="section-padding bg-background overflow-hidden">
        <div className="container-tight">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <Handshake className="h-4 w-4" /> More than a store
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Beyond quality African foods, we offer a range of trusted services to support 
              your family and events.
            </p>
          </div>
          {/* First row: 1 large + 2 stacked */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <ServiceCard 
              service={displayedServices[0]} 
              onRequestService={handleRequestService}
              className="h-80"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {displayedServices.slice(1, 3).map(service => (
                <ServiceCard 
                  key={service.id} 
                  service={service} 
                  onRequestService={handleRequestService}
                  className="h-[calc(10rem-0.5rem)] md:h-full"
                />
              ))}
            </div>
          </div>
          {/* Second row: 3 equal */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {displayedServices.slice(3, 6).map(service => (
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
      <section className="section-padding bg-gradient-to-br from-foreground via-foreground to-primary/30 text-background">
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
              
              <div className="bg-background/10 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="h-12 w-12 rounded-full flex items-center justify-center bg-primary text-primary-foreground"
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
            <div className="aspect-square bg-background/10 rounded-xl relative overflow-hidden">
              <img 
                src="/sophiaimagemain.jpeg" 
                alt="Sophia Music"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials — Sliding Carousel */}
      <section className="section-padding bg-gradient-to-b from-muted to-background overflow-hidden">
        <div className="container-tight">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <Heart className="h-4 w-4" /> Loved by our community
            </span>
            <h2 className="text-2xl md:text-3xl font-bold">What Our Customers Say</h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Carousel */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-md text-center max-w-2xl mx-auto">
                      <div className="flex justify-center gap-1 mb-4">
                        {Array.from({ length: testimonial.stars }).map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-lg md:text-xl text-foreground mb-6 italic leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center justify-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </div>
                        <p className="font-semibold text-lg">{testimonial.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 h-10 w-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 h-10 w-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'w-8 bg-primary' : 'w-2 bg-border hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-tight max-w-3xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <HelpCircle className="h-4 w-4" /> Got questions?
            </span>
            <h2 className="text-2xl md:text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-border rounded-xl">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-4 flex items-center justify-between text-left hover:bg-muted transition-colors rounded-xl"
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
