import { Link } from 'react-router-dom';
import { ArrowRight, Check, Target } from 'lucide-react';
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
      <section className="relative bg-foreground text-background py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="grid grid-cols-2 h-full">
            <img src="/products/palmoil(small).jpg" alt="" className="w-full h-full object-cover" />
            <img src="/sophiaimagemain.jpeg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/75 to-foreground/65" />
        </div>
        <div className="container-tight relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Triumph Strides Store
            </h1>
            <p className="text-lg text-background/90">
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
            <div className="aspect-square bg-muted rounded-xl relative overflow-hidden">
              <div className="grid grid-cols-2 grid-rows-2 h-full gap-2 p-4">
                <img src="/sophiaimagemain.jpeg" alt="" className="w-full h-full object-cover rounded-lg" />
                <img src="/products/palmoil(small).jpg" alt="" className="w-full h-full object-cover rounded-lg" />
                <img src="/products/driedzobo.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
                <img src="/sophiaimagesecondary.jpeg" alt="" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-muted">
        <div className="container-tight">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <Target className="h-4 w-4" /> What drives us
            </span>
            <h2 className="text-2xl md:text-3xl font-bold">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-background rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
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
            <div className="order-2 lg:order-1 aspect-square bg-muted rounded-xl relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=800&fit=crop" 
                alt="Why Choose Us"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Choose Us</h2>
              <ul className="space-y-3">
                {whyChooseUs.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-5 w-5 bg-primary rounded-md flex items-center justify-center shrink-0 mt-0.5">
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
            <div className="aspect-square bg-background/10 rounded-xl relative overflow-hidden">
              <img 
                src="/sophiaimagesecondary.jpeg" 
                alt="Sophia Music"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
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
