import { useState } from 'react';
import { ServiceCard } from '@/components/ServiceCard';
import { ServiceRequestModal } from '@/components/ServiceRequestModal';
import { services } from '@/lib/data';

export function ServicesPage() {
  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const handleRequestService = (serviceId: string) => {
    setSelectedService(serviceId);
    setServiceModalOpen(true);
  };

  // Detailed service info for expanded sections
  const serviceDetails = services.filter(s => s.id !== 'sophia-music');

  return (
    <div>
      {/* Header */}
      <section className="bg-muted py-12 md:py-16">
        <div className="container-tight">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Beyond quality African foods, Triumph Strides Store offers a range of trusted 
            services to support your family, events, and daily life.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onRequestService={handleRequestService}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="py-16 bg-muted">
        <div className="container-tight space-y-16">
          {serviceDetails.map((service, index) => (
            <div 
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="aspect-video bg-background border border-border">
                  <img 
                    src="/placeholder.svg" 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Who it's for:</h4>
                  <p className="text-sm text-muted-foreground">{service.whoFor}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">What's included:</h4>
                  <ul className="space-y-1">
                    {service.includes.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="h-1.5 w-1.5 bg-primary mt-2 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => handleRequestService(service.id)}
                  className="bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90 transition-colors"
                >
                  {service.cta}
                </button>
              </div>
            </div>
          ))}
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

export default ServicesPage;
