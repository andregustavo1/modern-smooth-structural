
import { ArrowDownCircle } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-avs-blue/80 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-avs-blue/90 to-black/70 mix-blend-multiply"></div>
        {/* Grid lines - blueprint style background */}
        <div className="absolute inset-0 blueprint-bg"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 text-center">
        <div className="inline-block mb-4 animate-fade-in opacity-0">
          <span className="inline-block py-1 px-4 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20 text-sm font-montserrat">
            Estruturas • Fiscalização • Execução de Obras
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-montserrat leading-tight animate-fade-in opacity-0 animate-delay-100">
          Engenharia Civil com <br />
          <span className="text-gradient">Excelência e Precisão</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 animate-fade-in opacity-0 animate-delay-200">
          Soluções completas em engenharia civil com excelência técnica. 
          Projetamos, fiscalizamos e executamos obras com compromisso, qualidade e prazos impecáveis.
        </p>
        <div className="flex justify-center gap-4 animate-fade-in opacity-0 animate-delay-300">
          <a href="#services" className="cta-button">
            Conheça Nossos Serviços
          </a>
          <a href="#about" className="secondary-button bg-transparent border-white text-white hover:bg-white hover:text-avs-blue">
            Sobre Nós
          </a>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white/80 hover:text-white transition-colors">
            <ArrowDownCircle size={36} />
          </a>
        </div>

        {/* Blueprint lines overlay */}
        <div className="absolute top-0 left-0 w-40 h-40 border-t-2 border-l-2 border-white/10 rounded-tl-lg"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 border-b-2 border-r-2 border-white/10 rounded-br-lg"></div>
      </div>
    </section>
  );
};

export default Hero;
