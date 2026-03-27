import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi Triumph Strides Store, I have a question.");
    window.open(`https://wa.me/14033895009?text=${message}`, '_blank');
  };

  const contactCards = [
    { icon: MapPin, label: 'Visit Us', value: 'Calgary, Alberta, Canada', color: 'bg-primary/10 text-primary' },
    { icon: Phone, label: 'Call Us', value: '+1 (403) 389-5009', href: 'tel:+14033895009', color: 'bg-accent/10 text-accent' },
    { icon: Mail, label: 'Email Us', value: 'info@triumphstridesstore.com', href: 'mailto:info@triumphstridesstore.com', color: 'bg-primary/10 text-primary' },
    { icon: Clock, label: 'Business Hours', value: 'Mon-Fri: 9am-6pm · Sat: 10am-4pm', color: 'bg-accent/10 text-accent' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-foreground text-background py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&h=800&fit=crop" 
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/80 to-foreground/70" />
        </div>
        <div className="container-tight relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-background/90 max-w-2xl text-lg">
            Have a question, want to place an order, or need help with a service? 
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="container-tight -mt-8 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactCards.map((card, i) => (
            <div key={i} className="bg-card rounded-xl border border-border p-5 shadow-md hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'both' }}>
              <div className={`h-10 w-10 rounded-lg flex items-center justify-center mb-3 ${card.color}`}>
                <card.icon className="h-5 w-5" />
              </div>
              <p className="text-xs text-muted-foreground mb-1">{card.label}</p>
              {card.href ? (
                <a href={card.href} className="text-sm font-medium hover:text-primary transition-colors break-all">
                  {card.value}
                </a>
              ) : (
                <p className="text-sm font-medium">{card.value}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="text-xl font-bold mb-2">Send Us a Message</h2>
              <p className="text-muted-foreground text-sm mb-6">Fill out the form and we'll get back to you within 24 hours.</p>
              <form onSubmit={handleSubmit} className="space-y-4 bg-card border border-border rounded-xl p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="+1 (403) 123-4567"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    placeholder="What is this about?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="How can we help you?"
                    rows={5}
                  />
                </div>

                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Right Side */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-6 text-primary-foreground">
                <h3 className="font-semibold text-lg mb-4">Quick Contact</h3>
                <p className="text-primary-foreground/80 text-sm mb-5">
                  Need a faster response? Reach us directly.
                </p>
                <div className="space-y-3">
                  <Button 
                    onClick={openWhatsApp}
                    className="w-full bg-background text-foreground hover:bg-background/90 shadow-md"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chat on WhatsApp
                  </Button>
                  <Button 
                    asChild
                    className="w-full bg-background/20 text-primary-foreground hover:bg-background/30 border border-primary-foreground/20"
                  >
                    <a href="tel:+14033895009">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                  <Button 
                    asChild
                    className="w-full bg-background/20 text-primary-foreground hover:bg-background/30 border border-primary-foreground/20"
                  >
                    <a href="mailto:info@triumphstridesstore.com">
                      <Mail className="h-4 w-4 mr-2" />
                      Send Email
                    </a>
                  </Button>
                </div>
              </div>

              {/* Map */}
              <div>
                <h3 className="font-medium mb-3">Find Us</h3>
                <div className="aspect-video rounded-xl overflow-hidden border border-border shadow-sm">
                  <iframe
                    title="Triumph Strides Store Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d320936.3985498902!2d-114.31573752!3d51.02729585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170039f843fd5%3A0x266d3bb1b652b63a!2sCalgary%2C%20AB!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
