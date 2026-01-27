import { useState } from 'react';
import { Play, Pause, Instagram, Youtube, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { sophiaTracks, sophiaShows } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';

export function SophiaMusicPage() {
  const { toast } = useToast();
  const [playingTrack, setPlayingTrack] = useState<string | null>(null);
  const [bookingForm, setBookingForm] = useState({
    eventType: '',
    date: '',
    time: '',
    location: '',
    audienceSize: '',
    budget: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const togglePlay = (trackId: string) => {
    setPlayingTrack(playingTrack === trackId ? null : trackId);
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!bookingForm.eventType || !bookingForm.date || !bookingForm.location || 
        !bookingForm.name || !bookingForm.email || !bookingForm.phone) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Booking Request Submitted!",
      description: "We'll get back to you within 48 hours.",
    });

    setBookingForm({
      eventType: '',
      date: '',
      time: '',
      location: '',
      audienceSize: '',
      budget: '',
      name: '',
      email: '',
      phone: '',
      notes: '',
    });
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-foreground text-background py-20 md:py-32">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm uppercase tracking-wider text-background/60 mb-4 block">
                Live Entertainment
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Sophia Music</h1>
              <p className="text-lg text-background/80 mb-6">
                Bringing the soul, rhythm, and energy of African music to your events. 
                Sophia delivers unforgettable live performances that captivate audiences 
                and create lasting memories.
              </p>
              <p className="text-background/60 mb-8">
                Specializing in Afrobeat, Gospel, and Contemporary African music for 
                weddings, corporate events, parties, and cultural celebrations.
              </p>
              <div className="flex gap-4">
                <a href="#booking" className="bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90 transition-colors">
                  Invite Sophia
                </a>
                <a href="#music" className="border-2 border-background text-background px-6 py-3 font-medium hover:bg-background hover:text-foreground transition-colors">
                  Listen Now
                </a>
              </div>
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

      {/* Music Library */}
      <section id="music" className="section-padding">
        <div className="container-tight">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Music Library</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sophiaTracks.map(track => (
              <div key={track.id} className="group">
                <div className="aspect-square bg-muted relative mb-3">
                  <img 
                    src={track.coverImage} 
                    alt={track.title}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => togglePlay(track.id)}
                    className="absolute inset-0 flex items-center justify-center bg-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <div className="h-14 w-14 flex items-center justify-center bg-primary text-primary-foreground">
                      {playingTrack === track.id ? (
                        <Pause className="h-6 w-6" />
                      ) : (
                        <Play className="h-6 w-6 ml-1" />
                      )}
                    </div>
                  </button>
                </div>
                <h3 className="font-medium">{track.title}</h3>
                <p className="text-sm text-muted-foreground">{track.duration}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            Audio previews available upon request. Contact us for demo tracks.
          </p>
        </div>
      </section>

      {/* Past Shows */}
      <section className="section-padding bg-muted">
        <div className="container-tight">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Past Shows & Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sophiaShows.map(show => (
              <div key={show.id} className="bg-background border border-border">
                <div className="aspect-video bg-muted">
                  <img 
                    src={show.photos[0]} 
                    alt={show.eventName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{show.eventName}</h3>
                  <p className="text-sm text-muted-foreground">{show.city}</p>
                  <p className="text-sm text-muted-foreground">{show.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="section-padding">
        <div className="container-tight max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Invite Sophia to Your Event</h2>
            <p className="text-muted-foreground">
              Fill out the form below and we'll get back to you within 48 hours 
              with availability and pricing.
            </p>
          </div>

          <form onSubmit={handleSubmitBooking} className="space-y-6 border border-border p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="eventType">Event Type *</Label>
                <Select 
                  value={bookingForm.eventType}
                  onValueChange={(value) => setBookingForm(prev => ({ ...prev, eventType: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wedding">Wedding</SelectItem>
                    <SelectItem value="birthday">Birthday Party</SelectItem>
                    <SelectItem value="corporate">Corporate Event</SelectItem>
                    <SelectItem value="cultural">Cultural Celebration</SelectItem>
                    <SelectItem value="concert">Concert</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="audienceSize">Audience Size</Label>
                <Select 
                  value={bookingForm.audienceSize}
                  onValueChange={(value) => setBookingForm(prev => ({ ...prev, audienceSize: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select audience size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under50">Under 50 people</SelectItem>
                    <SelectItem value="50-100">50-100 people</SelectItem>
                    <SelectItem value="100-200">100-200 people</SelectItem>
                    <SelectItem value="200-500">200-500 people</SelectItem>
                    <SelectItem value="500+">500+ people</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Event Date *</Label>
                <Input
                  id="date"
                  type="date"
                  value={bookingForm.date}
                  onChange={(e) => setBookingForm(prev => ({ ...prev, date: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Event Time</Label>
                <Input
                  id="time"
                  type="time"
                  value={bookingForm.time}
                  onChange={(e) => setBookingForm(prev => ({ ...prev, time: e.target.value }))}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Event Location *</Label>
              <Input
                id="location"
                value={bookingForm.location}
                onChange={(e) => setBookingForm(prev => ({ ...prev, location: e.target.value }))}
                placeholder="Venue name and city"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget">Budget Range (optional)</Label>
              <Select 
                value={bookingForm.budget}
                onValueChange={(value) => setBookingForm(prev => ({ ...prev, budget: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under500">Under $500 CAD</SelectItem>
                  <SelectItem value="500-1000">$500 - $1,000 CAD</SelectItem>
                  <SelectItem value="1000-2000">$1,000 - $2,000 CAD</SelectItem>
                  <SelectItem value="2000-5000">$2,000 - $5,000 CAD</SelectItem>
                  <SelectItem value="5000+">$5,000+ CAD</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="border-t border-border pt-6 space-y-4">
              <h3 className="font-semibold">Your Contact Information</h3>
              
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={bookingForm.name}
                  onChange={(e) => setBookingForm(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Your name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={bookingForm.email}
                    onChange={(e) => setBookingForm(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="your@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="+1 (234) 567-8900"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                value={bookingForm.notes}
                onChange={(e) => setBookingForm(prev => ({ ...prev, notes: e.target.value }))}
                placeholder="Tell us more about your event, special requests, or any questions..."
                rows={4}
              />
            </div>

            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Submit Booking Request
            </Button>
          </form>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-12 bg-muted">
        <div className="container-tight text-center">
          <h3 className="font-semibold mb-4">Follow Sophia</h3>
          <div className="flex justify-center gap-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-foreground text-background hover:bg-foreground/80 transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-foreground text-background hover:bg-foreground/80 transition-colors"
            >
              <Youtube className="h-6 w-6" />
            </a>
            <a 
              href="https://spotify.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-foreground text-background hover:bg-foreground/80 transition-colors"
            >
              <Music className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SophiaMusicPage;
