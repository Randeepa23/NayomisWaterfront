import { Utensils, TreePine, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Utensils,
    title: "All You Can Eat",
    description: "Indulge in our extensive buffet with unlimited servings of your favorite dishes"
  },
  {
    icon: TreePine,
    title: "Outdoor Seating",
    description: "Dine al fresco with stunning waterfront views and gentle ocean breezes"
  },
  {
    icon: Leaf,
    title: "Vegan Options",
    description: "Enjoy our carefully crafted plant-based menu with authentic flavors"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Exceptional dining experiences tailored for you
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <Card 
              key={idx}
              className="group hover:shadow-elegant transition-smooth border-0 bg-background animate-fade-in cursor-pointer"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-gold flex items-center justify-center group-hover:shadow-gold transition-smooth group-hover:scale-110">
                  <service.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;