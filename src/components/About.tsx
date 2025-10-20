import aboutImage from "@/assets/about-interior.jpg";

const About = () => {
  return (
    <section id="about" className="py-10 sm:py-16 md:py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-primary">
              Our Story
            </h2>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-4 sm:mb-6">
              Revolutionizing the culinary experience since <span className="font-semibold text-gold">1976</span>, 
              Nayomi's Waterfront delights customers with authentic Sri Lankan dishes, fresh ingredients, 
              and scenic dining by the water.
            </p>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
              Whether it's a family meal, celebration, or casual visit, we serve moments worth remembering. 
              Our commitment to quality and tradition has made us a beloved destination for food lovers 
              seeking an unforgettable dining experience.
            </p>
          </div>
          <div className="animate-fade-in rounded-2xl overflow-hidden shadow-elegant" style={{ animationDelay: '0.3s' }}>
            <img 
              src={aboutImage} 
              alt="Nayomi's Waterfront interior dining area"
              className="w-full h-full object-cover hover:scale-105 transition-smooth"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;