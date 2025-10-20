import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ExternalLink, ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import TripAdvisorIcon from "@/components/icons/TripAdvisorIcon";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1a56a3] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand and History */}
          <div>
            <h3 className="text-3xl font-bold mb-5 font-serif">
              <span className="text-orange-400">Nayomi's</span>{" "}
              <span className="text-amber-950">Waterfront</span>
            </h3>
            <p className="text-white/90 mb-4 text-base">
              Established in 1976, with a distinguished heritage in the bakery industry.
            </p>
            <p className="text-white/80 leading-relaxed mb-6">
              Nestled along the scenic waterfront of Katunayake, Negombo, our restaurant offers an exquisite dining experience with panoramic views of the serene lagoon and authentic Sri Lankan cuisine.
            </p>
            
            <div className="flex items-center mt-2">
              <MapPin className="w-5 h-5 text-orange-300 mr-2" />
              <span className="text-white/80">Katunayake, Negombo</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 relative pl-3 border-l-4 border-orange-400">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-white/90 hover:text-orange-300 transition-smooth flex items-center group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-white/90 hover:text-orange-300 transition-smooth flex items-center group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('menu')}
                  className="text-white/90 hover:text-orange-300 transition-smooth flex items-center group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-white/90 hover:text-orange-300 transition-smooth flex items-center group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="text-white/90 hover:text-orange-300 transition-smooth flex items-center group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  Gallery
                </button>
              </li>
              <li>
                <a 
                  href="#contact"
                  className="text-white/90 hover:text-orange-300 transition-smooth flex items-center group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-bold mb-6 relative pl-3 border-l-4 border-orange-400">Follow Us</h4>
            <div className="flex gap-5 mb-8">
              <a 
                href="https://www.facebook.com/share/1GVzhNCEZ6/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#1a478f] hover:bg-orange-500 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/nayomiswaterfront/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#1a478f] hover:bg-orange-500 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.tripadvisor.com/Restaurant_Review-g1500185-d14769780-Reviews-Nayomi_s_Waterfront-Katunayake_Negombo_Western_Province.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#1a478f] hover:bg-orange-500 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
                aria-label="TripAdvisor"
              >
                <TripAdvisorIcon className="w-5 h-5" />
              </a>
            </div>
            
            <div className="space-y-4">
              <p className="text-white/80 flex items-center">
                <Phone className="w-5 h-5 text-orange-300 mr-3" />
                <span>+94 76 799 3874</span>
              </p>
              <p className="text-white/80 flex items-center">
                <Mail className="w-5 h-5 text-orange-300 mr-3" />
                <span>waterfront@nayomis.com</span>
              </p>
            </div>
          </div>
        </div>

        <Separator className="bg-[#1a478f] my-8" />
        
        <div className="pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/80 flex items-center">
              © {new Date().getFullYear()}{" "}
              <span className="text-orange-400 font-semibold mx-1">Nayomi's</span>{" "}
              <span className="text-amber-950 font-semibold">Waterfront</span>. All rights reserved.
            </p>
            <p className="text-white/70 text-sm italic tracking-wide">A tradition of excellence since 1976</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;