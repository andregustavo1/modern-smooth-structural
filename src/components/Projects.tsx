
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      title: "Edifício Residencial Arpoador",
      type: "Projeto Estrutural",
      description: "Desenvolvimento completo de projeto estrutural para edifício de 12 pavimentos, com soluções para otimização de custos e segurança.",
      image: "/images/Leonardo_Kino_XL_Consultoria_tcnica_e_execuo_de_retrofit_em_ed_0.jpg"
    },
    {
      title: "Centro Empresarial Rio Verde",
      type: "Fiscalização",
      description: "Fiscalização integral de obra comercial de alto padrão, garantindo conformidade com o projeto e normas técnicas aplicáveis.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Residência Contemporânea",
      type: "Execução de Obra",
      description: "Gerenciamento e execução de residência de alto padrão com soluções arquitetônicas personalizadas e tecnologias sustentáveis.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Retrofit Edifício Comercial",
      type: "Consultoria e Execução",
      description: "Consultoria técnica e execução de retrofit em edifício comercial, com foco em segurança estrutural e modernização de sistemas.",
      image: "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
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

export default Projects;
