
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const handleScrollForActiveSection = () => {
      const scrollY = window.pageYOffset;
      
      sections.forEach(section => {
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionId = section.getAttribute('id') || '';
        
        const navLink = document.querySelector(`a[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink?.classList.add('text-avs-orange');
          navLink?.classList.remove('text-avs-blue');
        } else {
          navLink?.classList.remove('text-avs-orange');
          navLink?.classList.add('text-avs-blue');
        }
      });
    };
    
    window.addEventListener('scroll', handleScrollForActiveSection);
    
    return () => {
      window.removeEventListener('scroll', handleScrollForActiveSection);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 animate-header-reveal px-6 lg:px-12",
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-md py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="relative z-10">
          <h1 className="font-bold text-xl md:text-2xl font-montserrat">
            <span className="text-avs-blue">AVS</span>
            <span className="text-avs-orange"> Engenharia</span>
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="font-montserrat text-avs-blue hover:text-avs-orange transition-colors duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="cta-button">
            Solicitar Orçamento
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-avs-blue z-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-0 bg-white/95 backdrop-blur-lg transition-transform duration-300 transform z-10 flex flex-col items-center justify-center md:hidden",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <ul className="flex flex-col items-center gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="font-montserrat text-xl text-avs-blue hover:text-avs-orange transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="mt-4">
              <a
                href="#contact"
                className="cta-button"
                onClick={() => setIsMenuOpen(false)}
              >
                Solicitar Orçamento
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
