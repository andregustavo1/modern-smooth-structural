
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Projects2 from "@/components/Projects2"; // Assuming this is the correct path
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  // Scroll reveal animation
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    
    const reveal = () => {
      const windowHeight = window.innerHeight;
      
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };
    
    window.addEventListener("scroll", reveal);
    reveal(); // Call once on load
    
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Services />
        <Projects />
        <Projects2 />
        <Process />
        <Contact />
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
