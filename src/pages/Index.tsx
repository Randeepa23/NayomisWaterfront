import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuNew from "@/components/MenuNew";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <MenuNew />
      <Gallery />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;