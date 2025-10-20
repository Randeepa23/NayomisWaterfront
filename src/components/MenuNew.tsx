import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Utensils } from "lucide-react";

// Import the rice images
import vegetableRice from "../assets/vegetablerice.jpg";
import eggRice from "../assets/eggrice.jpg";
import chickenRice from "../assets/chickenrice.jpg";
import seafoodRice from "../assets/seafoodrice.jpg";
import mixedRice from "../assets/mixedrice.jpg";

// Import the koththu images
import vegeKottu from "../assets/vegekottu.jpg";
import eggKottu from "../assets/eggkottu.jpg";
import chickenKottu from "../assets/chickenkottu.jpg";
import seafoodKottu from "../assets/seafoodkottu.jpg";
import mixedKottu from "../assets/mixedkottu.jpg";

// Import the cheese koththu images

// Import the side dishes images
import fishDevilled from "../assets/fishdevilled.jpg";
import chickenDevilled from "../assets/chickendevilled.jpg";
import friedFish from "../assets/friedfish.jpg";
import friedChicken from "../assets/friedchicken.jpg";
import vegeCheeseKottu from "../assets/vegecheesekottu.jpg";
import eggCheeseKottu from "../assets/eggcheesekottu.jpg";
import chickenCheeseKottu from "../assets/chickencheesekottu.jpg";
import seafoodCheeseKottu from "../assets/seafoodcheesekottu.jpg";
import mixedCheeseKottu from "../assets/mixedcheesekottu.jpg";

// Import the string hoppers koththu images
import vegeStringHoppersKottu from "../assets/vegestringhopperskottu.jpg";
import eggStringHoppersKottu from "../assets/eggstringhopperskottu.jpg";
import chickenStringHoppersKottu from "../assets/chickenstringhopperskottu.jpg";
import seafoodStringHoppersKottu from "../assets/seafoodstringhopperskottu.jpg";
import mixedStringHoppersKottu from "../assets/mixedstringhopperskottu.jpg";

// Import the noodles images
import vegeNoodles from "../assets/vegenoodles.jpg";
import eggNoodles from "../assets/eggnoodles.jpg";
import chickenNoodles from "../assets/chickennoodles.jpg";
import seafoodNoodles from "../assets/seafoodnoodles.jpg";
import mixedNoodles from "../assets/mixednoodles.jpg";

interface MenuItem {
  name: string;
  smallPrice: string;
  largePrice: string;
  image?: string;
}

interface MenuCategory {
  title: string;
  icon: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    title: "Fried Rice",
    icon: "🍚",
    items: [
      { name: "Vegetable", smallPrice: "400", largePrice: "600", image: vegetableRice },
      { name: "Egg", smallPrice: "400", largePrice: "600", image: eggRice },
      { name: "Chicken", smallPrice: "450", largePrice: "700", image: chickenRice },
      { name: "Seafood", smallPrice: "600", largePrice: "800", image: seafoodRice },
      { name: "Mixed", smallPrice: "650", largePrice: "900", image: mixedRice },
    ],
  },
  {
    title: "Sri Lankan Spice Koththu",
    icon: "🌶️",
    items: [
      { name: "Vegetable", smallPrice: "350", largePrice: "450", image: vegeKottu },
      { name: "Egg", smallPrice: "350", largePrice: "450", image: eggKottu },
      { name: "Chicken", smallPrice: "400", largePrice: "600", image: chickenKottu },
      { name: "Seafood", smallPrice: "450", largePrice: "750", image: seafoodKottu },
      { name: "Mixed (Egg / Chicken / Seafood)", smallPrice: "500", largePrice: "900", image: mixedKottu },
    ],
  },
  {
    title: "Cheese Koththu",
    icon: "🧀",
    items: [
      { name: "Vegetable", smallPrice: "400", largePrice: "600", image: vegeCheeseKottu },
      { name: "Egg", smallPrice: "400", largePrice: "600", image: eggCheeseKottu },
      { name: "Chicken", smallPrice: "500", largePrice: "750", image: chickenCheeseKottu },
      { name: "Seafood", smallPrice: "550", largePrice: "850", image: seafoodCheeseKottu },
      { name: "Mixed (Egg / Chicken / Seafood)", smallPrice: "600", largePrice: "1000", image: mixedCheeseKottu },
    ],
  },
  {
    title: "String Hoppers Koththu",
    icon: "🍜",
    items: [
      { name: "Vegetable", smallPrice: "350", largePrice: "450", image: vegeStringHoppersKottu },
      { name: "Egg", smallPrice: "350", largePrice: "450", image: eggStringHoppersKottu },
      { name: "Chicken", smallPrice: "400", largePrice: "600", image: chickenStringHoppersKottu },
      { name: "Seafood", smallPrice: "450", largePrice: "750", image: seafoodStringHoppersKottu },
      { name: "Mixed (Egg / Chicken / Seafood)", smallPrice: "500", largePrice: "900", image: mixedStringHoppersKottu },
    ],
  },
  {
    title: "Noodles",
    icon: "🍝",
    items: [
      { name: "Vegetable", smallPrice: "400", largePrice: "600", image: vegeNoodles },
      { name: "Egg", smallPrice: "400", largePrice: "600", image: eggNoodles },
      { name: "Chicken", smallPrice: "450", largePrice: "700", image: chickenNoodles },
      { name: "Seafood", smallPrice: "600", largePrice: "800", image: seafoodNoodles },
      { name: "Mixed", smallPrice: "650", largePrice: "900", image: mixedNoodles },
    ],
  },
  {
    title: "Side Dishes",
    icon: "🍗",
    items: [
      { name: "Fish Devilled", smallPrice: "900", largePrice: "-", image: fishDevilled },
      { name: "Chicken Devilled", smallPrice: "850", largePrice: "-", image: chickenDevilled },
      { name: "Fried Fish", smallPrice: "900", largePrice: "-", image: friedFish },
      { name: "Fried Chicken", smallPrice: "850", largePrice: "-", image: friedChicken },
    ],
  },
];

const MenuNew = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const closeExpandedImage = () => setExpandedImage(null);
  
  // Function to determine if an item should display a special badge
  const hasSpecialBadge = (category: string, itemName: string) => {
    if (itemName.includes("Mixed")) return "Popular";
    if (category === "Cheese Koththu") return "Cheesy";
    return null;
  };
  
  // Function to get the appropriate image overlay style based on category
  const getImageOverlayStyle = (category: string) => {
    switch(category) {
      case "Cheese Koththu": return "bg-gradient-to-t from-yellow-900/70 via-yellow-900/30 to-transparent";
      case "String Hoppers Koththu": return "bg-gradient-to-t from-red-900/70 via-red-900/30 to-transparent";
      case "Noodles": return "bg-gradient-to-t from-amber-900/70 via-amber-900/30 to-transparent";
      case "Side Dishes": return "bg-gradient-to-t from-emerald-900/70 via-emerald-900/30 to-transparent";
      case "Fried Rice": return "bg-gradient-to-t from-blue-900/70 via-blue-900/30 to-transparent";
      default: return "bg-gradient-to-t from-black/60 via-black/30 to-transparent";
    }
  };

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-gold mb-6 shadow-gold">
            <Utensils className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary tracking-tight">
            Our <span className="text-gold-dark">Signature</span> Menu
          </h2>
          <div className="w-24 h-1 bg-gold-light mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Explore our authentic Sri Lankan flavors, meticulously prepared with premium ingredients and traditional techniques
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Category Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {menuData.map((category, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (selectedCategory !== idx) {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setSelectedCategory(idx);
                      setIsAnimating(false);
                    }, 300);
                  }
                }}
                className={`px-8 py-4 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === idx
                    ? "gradient-gold text-primary shadow-gold scale-105 border-b-2 border-gold-dark"
                    : "bg-secondary/60 text-foreground hover:bg-secondary border border-secondary/20"
                }`}
              >
                <span className="mr-3 text-xl">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>

          {/* Menu Items Display */}
          <Card className={`shadow-elegant border-0 overflow-hidden ${isAnimating ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 bg-white/95 backdrop-blur-sm`}>
            <div className="bg-gradient-to-r from-primary to-ocean-blue p-8 relative">
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gold-light to-gold-dark"></div>
              <h3 className="text-3xl font-bold text-white text-center flex items-center justify-center gap-3">
                <span className="text-4xl shadow-text">{menuData[selectedCategory].icon}</span>
                <span className="tracking-wide shadow-text">{menuData[selectedCategory].title}</span>
              </h3>
            </div>
            <CardContent className="p-10">
              <div className="grid md:grid-cols-2 gap-8">
                {menuData[selectedCategory].items.map((item, idx) => (
                    <div
                    key={idx}
                    className={`group bg-cream hover:bg-secondary/70 transition-all duration-300 rounded-xl p-7 hover:shadow-xl cursor-pointer border ${hoveredItem === idx ? 'border-gold/60 transform scale-[1.02] shadow-lg' : 'border-secondary/20'} overflow-hidden`}
                    onMouseEnter={() => setHoveredItem(idx)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-semibold text-primary group-hover:text-gold-dark transition-smooth tracking-tight">
                        {item.name}
                      </h4>
                      <div className="flex gap-2">
                        {menuData[selectedCategory].title === "Cheese Koththu" && (
                          <Badge className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-primary border-0">
                            Extra Cheesy
                          </Badge>
                        )}
                        {menuData[selectedCategory].title === "String Hoppers Koththu" && (
                          <Badge className="bg-gradient-to-r from-red-300 to-red-500 text-white border-0">
                            Traditional
                          </Badge>
                        )}
                        {menuData[selectedCategory].title === "Noodles" && (
                          <Badge className="bg-gradient-to-r from-amber-300 to-amber-500 text-primary border-0">
                            Wok Tossed
                          </Badge>
                        )}
                        {item.name.includes("Mixed") && (
                          <Badge className="gradient-gold text-primary border-0">
                            Popular
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-6">
                      {item.image && (
                        <div className="md:w-2/5 overflow-hidden rounded-lg shadow-lg relative group">
                          <div className={`absolute inset-0 ${getImageOverlayStyle(menuData[selectedCategory].title)} opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-2`}>
                            <p className="text-white text-xs font-medium bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">Click to enlarge</p>
                          </div>
                          {menuData[selectedCategory].title === "Cheese Koththu" ? (
                            <div className="relative">
                              <div className="absolute -top-1 -right-1 z-10 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center transform rotate-12 shadow-md text-xs font-bold">
                                🧀
                              </div>
                              <img 
                                src={item.image} 
                                alt={`${item.name} Cheese Koththu with melted cheese`}
                                className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                                onClick={() => setExpandedImage(item.image)}
                                loading="lazy"
                              />
                            </div>
                          ) : menuData[selectedCategory].title === "String Hoppers Koththu" ? (
                            <div className="relative">
                              <div className="absolute -top-1 -right-1 z-10 w-8 h-8 bg-red-400 rounded-full flex items-center justify-center transform rotate-12 shadow-md text-xs font-bold">
                                🍚
                              </div>
                              <img 
                                src={item.image} 
                                alt={`${item.name} String Hoppers Koththu made with idiyappam`}
                                className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                                onClick={() => setExpandedImage(item.image)}
                                loading="lazy"
                              />
                            </div>
                          ) : menuData[selectedCategory].title === "Noodles" ? (
                            <div className="relative">
                              <div className="absolute -top-1 -right-1 z-10 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center transform rotate-12 shadow-md text-xs font-bold">
                                🍜
                              </div>
                              <img 
                                src={item.image} 
                                alt={`${item.name} Noodles stir-fried to perfection`}
                                className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                                onClick={() => setExpandedImage(item.image)}
                                loading="lazy"
                              />
                            </div>
                          ) : (
                            <img 
                              src={item.image} 
                              alt={`${item.name} ${menuData[selectedCategory].title}`}
                              className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                              onClick={() => setExpandedImage(item.image)}
                              loading="lazy"
                            />
                          )}
                        </div>
                      )}
                      <div className={`${item.image ? 'md:w-3/5' : 'w-full'}`}>
                        <div className="flex gap-6 mb-2">
                          <div className="flex-1">
                            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1 font-medium">Small Portion</p>
                            <p className="text-2xl font-bold text-gold-dark flex items-center">
                              <span className="text-sm font-normal text-muted-foreground mr-1">LKR</span> {item.smallPrice}
                            </p>
                          </div>
                          {item.largePrice !== "-" && (
                            <div className="flex-1">
                              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1 font-medium">Large Portion</p>
                              <p className="text-2xl font-bold text-gold-dark flex items-center">
                                <span className="text-sm font-normal text-muted-foreground mr-1">LKR</span> {item.largePrice}
                              </p>
                            </div>
                          )}
                        </div>
                        {/* No description paragraphs - just prices and images */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* All prices note */}
          <div className="mt-12 border-t border-secondary/30 pt-6">
            <p className="text-center text-muted-foreground text-sm italic">
              All prices are in Sri Lankan Rupees (LKR). Prices may vary on special occasions and holidays.
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced image modal/lightbox */}
      {expandedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={closeExpandedImage}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] w-full animate-fade-in-down"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={closeExpandedImage}
              className="absolute -top-12 right-0 text-white hover:text-gold-light text-3xl transition-colors duration-300 bg-black/30 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/50"
              aria-label="Close image view"
            >
              ×
            </button>
            <div className={`${
              expandedImage.includes('cheese') 
                ? 'bg-yellow-500/20' 
                : expandedImage.includes('stringhoppers') 
                  ? 'bg-red-500/20' 
                  : expandedImage.includes('noodles') 
                    ? 'bg-amber-500/20'
                    : 'bg-white/10'
            } p-1 rounded-lg shadow-2xl`}>
              <img 
                src={expandedImage} 
                alt="Expanded dish view" 
                className="w-full h-full object-contain rounded-md"
              />
              {expandedImage.includes('cheese') && (
                <div className="absolute top-4 right-4 bg-yellow-400 text-primary px-3 py-1 rounded-full font-bold text-sm shadow-lg transform rotate-12">
                  Cheese Lovers' Choice
                </div>
              )}
              {expandedImage.includes('stringhoppers') && (
                <div className="absolute top-4 right-4 bg-red-400 text-white px-3 py-1 rounded-full font-bold text-sm shadow-lg transform rotate-12">
                  Authentic Sri Lankan
                </div>
              )}
              {expandedImage.includes('noodles') && (
                <div className="absolute top-4 right-4 bg-amber-400 text-primary px-3 py-1 rounded-full font-bold text-sm shadow-lg transform rotate-12">
                  Chef's Special
                </div>
              )}
            </div>
            <div className="text-center mt-4 text-white/70 text-sm">
              <p>Click anywhere to close</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MenuNew;
