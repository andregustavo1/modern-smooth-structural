import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Projects2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      title: "Academia - Feijó Acre",
      type: "Execução de Obra",
      description: "Construção de academia pública em Feijó, Acre, com estruturas modernas e adequadas para atividades físicas comunitárias.",
      image: "/Obras/Academia - Feijó Acre/07a656ff-3d3c-488c-b1af-f760a0a44ccc.jpg"
    },
    {
      title: "Academia - Feijó Acre (Fase Estrutural)",
      type: "Construção",
      description: "Fase estrutural da academia de Feijó, demonstrando a qualidade e precisão técnica em cada etapa de execução.",
      image: "/Obras/Academia - Feijó Acre/23dcb94a-858f-4261-b150-7aeb5423c3c0.jpg"
    },
    {
      title: "Academia - Feijó Acre (Vista Aérea)",
      type: "Projeto Concluído",
      description: "Vista panorâmica da academia de Feijó mostrando a integração da estrutura com o ambiente urbano local.",
      image: "/Obras/Academia - Feijó Acre/3a1d19df-5665-4169-afaf-11eea28e6bfc.jpg"
    },
    {
      title: "Residência EcoVille - Foto 01",
      type: "Execução de Obra",
      description: "Residência de alto padrão no EcoVille, Rio Branco, com design moderno e sustentável.",
      image: "/Obras/Residência EcoVille - Rio Branco Acre/Foto 01.JPG"
    },
    {
      title: "Residência EcoVille - Foto 02",
      type: "Execução de Obra",
      description: "Detalhes da construção da residência no EcoVille, destacando acabamentos de alta qualidade.",
      image: "/Obras/Residência EcoVille - Rio Branco Acre/Foto 02.JPG"
    },
    {
      title: "Residência EcoVille - Foto 03",
      type: "Execução de Obra",
      description: "Vista interna da residência no EcoVille, com foco em espaços amplos e bem iluminados.",
      image: "/Obras/Residência EcoVille - Rio Branco Acre/Foto 03.JPG"
    },
    {
      title: "Residência EcoVille - Foto 04",
      type: "Execução de Obra",
      description: "Detalhes arquitetônicos da residência no EcoVille, com integração ao ambiente externo.",
      image: "/Obras/Residência EcoVille - Rio Branco Acre/Foto 04.JPG"
    },
    {
      title: "Residência EcoVille - Foto 05",
      type: "Execução de Obra",
      description: "Perspectiva da fachada da residência no EcoVille, destacando o design contemporâneo.",
      image: "/Obras/Residência EcoVille - Rio Branco Acre/Foto 05.JPG"
    },
    {
      title: "Residência EcoVille - Foto 06",
      type: "Execução de Obra",
      description: "Detalhes do paisagismo e área externa da residência no EcoVille.",
      image: "/Obras/Residência EcoVille - Rio Branco Acre/Foto 06.JPG"
    },
    {
      title: "Residência EcoVille - Foto 07",
      type: "Execução de Obra",
      description: "Vista aérea da residência no EcoVille, mostrando a integração com o entorno.",
      image: "/Obras/Residência EcoVille - Rio Branco Acre/Foto 07.JPG"
    },
    {
      title: "Residência EcoVille - Foto 08",
      type: "Execução de Obra",
      description: "Detalhes da área de lazer da residência no EcoVille.",
      image: "/Obras/Residência EcoVille - Rio Branco Acre/Foto 08.JPG"
    },
    {
      title: "Residência EcoVille - Foto 09",
      type: "Execução de Obra",
      description: "Detalhes do interior da residência no EcoVille, com acabamentos de alto padrão.",
      image: "/Obras/Residência EcoVille - Rio Branco Acre/Foto 09.JPG"
    },
    {
      title: "Residência EcoVille - Foto 10",
      type: "Execução de Obra",
      description: "Vista noturna da residência no EcoVille, destacando a iluminação arquitetônica.",
      image: "/Obras/Residência EcoVille - Rio Branco Acre/Foto 10.JPG"
    },
    {
      title: "Residência EcoVille - Foto 11",
      type: "Execução de Obra",
      description: "Detalhes finais da residência no EcoVille, com foco em conforto e funcionalidade.",
      image: "/Obras/Residência EcoVille - Rio Branco Acre/Foto 11.JPG"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section id="projects" className="section-container section-padding">
      <div className="section-bg-element">
        <div className="absolute top-0 left-0 w-full h-full blueprint-bg"></div>
      </div>
      
      <div className="section-content">
        <div className="text-center mb-16">
          <h2 className="section-title">Projetos Destacados</h2>
          <div className="w-20 h-1 bg-avs-gold mx-auto mb-6"></div>
          <p className="section-subtitle">Conheça alguns dos nossos principais projetos e realizações</p>
        </div>

        <div className="relative max-w-5xl mx-auto overflow-hidden">
          <div 
            className="flex transition-all duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="h-64 sm:h-80 w-full relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-avs-gold text-white text-xs py-1 px-3 rounded-full">
                        {project.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-avs-blue mb-2 font-montserrat">{project.title}</h3>
                    <p className="text-avs-gray mb-4">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button 
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md text-avs-blue hover:text-avs-gold transition-colors z-10"
            onClick={prevSlide}
            aria-label="Projeto anterior"
          >
            <ArrowLeft size={20} />
          </button>
          <button 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md text-avs-blue hover:text-avs-gold transition-colors z-10"
            onClick={nextSlide}
            aria-label="Próximo projeto"
          >
            <ArrowRight size={20} />
          </button>

          {/* Indicator dots */}
          <div className="flex justify-center mt-6 pb-8 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                aria-label={`Ver projeto ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-avs-gold scale-125" : "bg-avs-gray opacity-50"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <a href="#contact" className="secondary-button">
            Solicitar um projeto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects2;
