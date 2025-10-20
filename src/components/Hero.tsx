import { ChevronDown } from "lucide-react";
// Direct import without alias to test
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.jpg";

// Removed unused carousel imports
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image3, image4, image5];
  
  // Simple manual slideshow implementation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);
  
  // For debugging - log the image paths
  useEffect(() => {
    console.log("Image 3 path:", image3);
    console.log("Image 4 path:", image4);
    console.log("Image 5 path:", image5);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Hero banner"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated floating circles */}
      <div className="floating-circle circle1"></div>
      <div className="floating-circle circle2"></div>
      <div className="floating-circle circle3"></div>
      <div className="floating-circle circle4"></div>
      <div className="floating-circle circle5"></div>
      <div className="floating-circle circle6"></div>
      <div className="floating-circle circle7"></div>
      
      {/* Small fast-moving circles */}
      <div className="small-circle small-circle1"></div>
      <div className="small-circle small-circle2"></div>
      <div className="small-circle small-circle3"></div>
      <div className="small-circle small-circle4"></div>
      <div className="small-circle small-circle5"></div>
      <div className="small-circle small-circle6"></div>
      <div className="small-circle small-circle7"></div>
      <div className="small-circle small-circle8"></div>
      <div className="small-circle small-circle9"></div>
      <div className="small-circle small-circle10"></div>
      
      {/* Tiny particles with very fast movement */}
      <div className="tiny-particle tiny-particle1"></div>
      <div className="tiny-particle tiny-particle2"></div>
      <div className="tiny-particle tiny-particle3"></div>
      <div className="tiny-particle tiny-particle4"></div>
      <div className="tiny-particle tiny-particle5"></div>
      <div className="tiny-particle tiny-particle6"></div>
      <div className="tiny-particle tiny-particle7"></div>
      <div className="tiny-particle tiny-particle8"></div>
      <div className="tiny-particle tiny-particle9"></div>
      <div className="tiny-particle tiny-particle10"></div>
      <div className="tiny-particle tiny-particle11"></div>
      <div className="tiny-particle tiny-particle12"></div>
      <div className="tiny-particle tiny-particle13"></div>
      <div className="tiny-particle tiny-particle14"></div>
      <div className="tiny-particle tiny-particle15"></div>
      {/* Simple background image with manual switching */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <div 
              className="absolute inset-0 bg-image-full"
              style={{ 
                backgroundImage: `url(${image})`,
                animation: 'heroZoomEffect 10s forwards'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
          </div>
        ))}
      </div>
      
      {/* Custom indicators - dot indicators only, no arrows */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {images.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-white scale-110' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      

      
      {/* Screen-reader only label to retain accessibility without visible words */}
      <div className="sr-only">Welcome to Nayomi's Waterfront</div>

      {/* Remove the scroll indicator arrow as well */}
    </section>
  );
};

export default Hero;