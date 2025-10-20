import { useState, useEffect } from "react";
import { Menu, X, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TripAdvisorIcon from "@/components/icons/TripAdvisorIcon";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Menu", id: "menu" },
    { label: "Gallery", id: "gallery" },
    { label: "Services", id: "services" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant"
          : "bg-black/30 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className={`transition-smooth logo-container ${isScrolled ? "bg-white/10 backdrop-blur-sm" : ""}`}
          >
                        <Link
              to="/"
              className="flex flex-col items-center logo-container"
            >
              <span className="logo-nayomis text-2xl xs:text-3xl sm:text-3xl md:text-3xl lg:text-4xl">
                Nayomi&apos;s
              </span>
              <div className="horizontal-line mt-1 mb-1"></div>
              <div className="flex items-center justify-center">
                <svg className="hidden xs:block w-4 h-3 xs:w-5 xs:h-4 sm:w-6 sm:h-4 text-[#7d2424]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 12H4C6 12 8 10 10 10C12 10 14 12 16 12C18 12 20 10 22 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M2 16H4C6 16 8 14 10 14C12 14 14 16 16 16C18 16 20 14 22 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span className="logo-waterfront text-xl xs:text-2xl sm:text-2xl md:text-2xl lg:text-3xl px-2 xs:px-3 py-1 mx-1 rounded bg-white/10 backdrop-blur-sm">
                  Waterfront
                </span>
                <svg className="hidden xs:block w-4 h-3 xs:w-5 xs:h-4 sm:w-6 sm:h-4 text-[#7d2424]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 12H4C6 12 8 10 10 10C12 10 14 12 16 12C18 12 20 10 22 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M2 16H4C6 16 8 14 10 14C12 14 14 16 16 16C18 16 20 14 22 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </Link>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-medium text-lg md:text-xl transition-smooth hover:text-gold ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="flex items-center gap-4">
              <a 
                href="https://www.facebook.com/share/1GVzhNCEZ6/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`transition-smooth hover:text-gold ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/nayomiswaterfront/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`transition-smooth hover:text-gold ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.tripadvisor.com/Restaurant_Review-g1500185-d14769780-Reviews-Nayomi_s_Waterfront-Katunayake_Negombo_Western_Province.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`transition-smooth hover:text-gold ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
                aria-label="TripAdvisor"
              >
                <TripAdvisorIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-smooth ${
              isScrolled ? "text-primary" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in shadow-elegant">
          <div className="container mx-auto px-4 py-4 space-y-2 sm:space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left py-2 sm:py-3 font-medium text-base sm:text-lg text-foreground hover:text-gold transition-smooth"
              >
                {link.label}
              </button>
            ))}
            <div className="flex items-center justify-center gap-6 sm:gap-8 py-3 mt-2 border-t border-border">
              <a 
                href="https://www.facebook.com/share/1GVzhNCEZ6/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-gold transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/nayomiswaterfront/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-gold transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.tripadvisor.com/Restaurant_Review-g1500185-d14769780-Reviews-Nayomi_s_Waterfront-Katunayake_Negombo_Western_Province.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-gold transition-smooth"
                aria-label="TripAdvisor"
              >
                <TripAdvisorIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
