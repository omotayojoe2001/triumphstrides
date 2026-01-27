import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AboutPage() {
  const values = [
    { title: 'Quality First', description: 'We source only the finest African ingredients and deliver exceptional service.' },
    { title: 'Community Focused', description: 'We serve everyone in Calgary, building bridges through food and culture.' },
    { title: 'Trusted & Reliable', description: 'Count on us for consistent quality, on-time delivery, and professional service.' },
    { title: 'Family Values', description: 'From childcare to catering, we treat every client like family.' },
  ];

  const whyChooseUs = [
    'Premium quality African foods, authentic and fresh',
    'Multiple services under one trusted brand',
    'Calgary-based with local delivery and pickup',
    'Professional, reliable, and customer-focused',
    'Inclusive—we serve everyone in our community',
    'Fair pricing with no hidden fees',
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container-tight">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About Triumph Strides Store
            </h1>
            <p className="text-lg text-muted-foreground">
              Bringing the best of African foods and trusted services to Calgary, Alberta. 
              We're more than a store—we're your community partner.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Triumph Strides Store was born from a simple mission: to bring the authentic 
                  flavors and warmth of African culture to Calgary. What started as a passion 
                  for sharing quality African foods has grown into a multi-service brand that 
                  supports families and events across the city.
                </p>
                <p>
                  Based in Calgary, Alberta, we understand the needs of our diverse community. 
                  Whether you're looking for the perfect palm oil for your jollof rice, 
                  reliable childcare, professional event catering, or live music for your 
                  celebration—we've got you covered.
                </p>
                <p>
                  We believe in quality, trust, and community. Every product we sell, 
                  every service we provide, reflects our commitment to excellence and 
                  our love for the people we serve.
                </p>
              </div>
            </div>
            <div className="aspect-square bg-muted">
              <img 
                src="/placeholder.svg" 
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-muted">
        <div className="container-tight">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-background p-6 border border-border">
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 aspect-square bg-muted">
              <img 
                src="/placeholder.svg" 
                alt="Why Choose Us"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Choose Us</h2>
              <ul className="space-y-3">
                {whyChooseUs.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-5 w-5 bg-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-primary-foreground" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Sophia Spotlight */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm uppercase tracking-wider text-background/60 mb-4 block">
                Meet Our Artist
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Sophia Music</h2>
              <p className="text-background/80 mb-6">
                Sophia is our in-house musical talent, bringing the soulful sounds of 
                Africa to events across Calgary and beyond. With a passion for Afrobeat, 
                Gospel, and contemporary African music, she creates unforgettable moments 
                at weddings, parties, corporate events, and cultural celebrations.
              </p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/sophia-music">
                  Learn More About Sophia
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

      {/* CTA */}
      <section className="section-padding">
        <div className="container-tight text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Experience the Best?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Explore our products or get in touch to learn more about our services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/shop">Shop Products</Link>
            </Button>
            <Button asChild variant="outline" className="border-2 border-foreground hover:bg-foreground hover:text-background">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
