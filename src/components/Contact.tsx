import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const hoursData = [
  { day: "Sunday", hours: "6 AM – 11 PM" },
  { day: "Monday", hours: "7 AM – 11 PM" },
  { day: "Tuesday - Saturday", hours: "6 AM – 11 PM" },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const isOpenNow = () => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentDay = now.getDay();
    
    if (currentDay === 1) { // Monday
      return currentHour >= 7 && currentHour < 23;
    }
    return currentHour >= 6 && currentHour < 23;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-10 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-primary">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            We'd love to hear from you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in-left">
            <Card className="shadow-card border-0 hover:shadow-elegant transition-smooth">
              <CardContent className="pt-4 sm:pt-6 flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg mb-1 text-primary">Address</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">Nayomi's Waterfront, Katunayake 11500</p>
                  <a 
                    href="https://www.google.com/maps/place/Nayomi's+Waterfront/@7.1739644,79.8611947,17z/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gold-dark hover:underline text-xs sm:text-sm inline-flex items-center mt-1"
                  >
                    <MapPin className="w-3 h-3 mr-1" />
                    Get directions
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0 hover:shadow-elegant transition-smooth">
              <CardContent className="pt-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-primary">Phone</h3>
                  <p className="text-muted-foreground">0317 934 447</p>
                  <p className="text-muted-foreground">+94 76 799 3874</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0 hover:shadow-elegant transition-smooth">
              <CardContent className="pt-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-primary">Email</h3>
                  <p className="text-muted-foreground">waterfront@nayomis.com</p>
                </div>
              </CardContent>
            </Card>

            {/* Opening Hours Card */}
            <Card className="shadow-card border-0 hover:shadow-elegant transition-smooth">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1 text-primary">Opening Hours</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-2 h-2 rounded-full ${isOpenNow() ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
                      <span className={`text-sm font-semibold ${isOpenNow() ? 'text-green-600' : 'text-red-600'}`}>
                        {isOpenNow() ? 'Open Now' : 'Closed'}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {hoursData.map((item, idx) => (
                        <div key={idx} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{item.day}</span>
                          <span className="font-medium text-gold-dark">{item.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="shadow-elegant border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="rounded-lg overflow-hidden h-72">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.683169644829!2d79.86119467419862!3d7.173964392869388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fa9c828614ed%3A0x77ef99c4ce35cf09!2sNayomi's%20Waterfront!5e0!3m2!1sen!2slk!4v1698082369989!5m2!1sen!2slk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Nayomi's Waterfront Location"
                  />
                </div>
                <div className="py-3 px-4 bg-secondary/30">
                  <p className="text-sm text-muted-foreground flex items-center">
                    <MapPin className="w-4 h-4 mr-1 text-gold-dark" />
                    <a 
                      href="https://www.google.com/maps/place/Nayomi's+Waterfront/@7.1739644,79.8611947,17z/"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-gold-dark transition-colors"
                    >
                      View larger map
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-card border-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="pt-4 sm:pt-6">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 sm:mb-2 text-primary">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="border-border focus:border-gold text-sm sm:text-base h-10 sm:h-12"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1 sm:mb-2 text-primary">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Your phone number"
                    className="border-border focus:border-gold text-sm sm:text-base h-10 sm:h-12"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-primary">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message"
                    rows={5}
                    className="border-border focus:border-gold resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full gradient-gold text-primary font-semibold hover:shadow-gold transition-smooth"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;