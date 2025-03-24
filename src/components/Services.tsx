
import { Building2, ClipboardList, Construction, FileSearch, FileCheck, HelpCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Building2 className="w-10 h-10 text-avs-blue" />,
      title: "Projetos Estruturais",
      description: "Cálculo e dimensionamento de estruturas em concreto armado, metálicas e madeira."
    },
    {
      icon: <ClipboardList className="w-10 h-10 text-avs-blue" />,
      title: "Fiscalização de Obras",
      description: "Acompanhamento técnico garantindo conformidade com projetos e normas."
    },
    {
      icon: <Construction className="w-10 h-10 text-avs-blue" />,
      title: "Execução de Obras",
      description: "Gerenciamento completo de construções residenciais e comerciais."
    },
    {
      icon: <FileSearch className="w-10 h-10 text-avs-blue" />,
      title: "Laudos e Vistorias",
      description: "Análises técnicas para avaliação de edificações e estruturas."
    },
    {
      icon: <FileCheck className="w-10 h-10 text-avs-blue" />,
      title: "Regularização",
      description: "Processos de aprovação e regularização junto aos órgãos competentes."
    },
    {
      icon: <HelpCircle className="w-10 h-10 text-avs-blue" />,
      title: "Consultoria",
      description: "Assessoria especializada para otimização de projetos e processos construtivos."
    }
  ];

  return (
    <section id="services" className="section-container section-padding bg-gradient-to-b from-white to-avs-light-gray">
      <div className="section-bg-element">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 opacity-5">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#2c3e50" d="M0,0 L200,0 L200,200 L0,200 Z M20,20 L20,180 L180,180 L180,20 Z"></path>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 opacity-5">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#2c3e50" d="M0,0 L200,0 L200,200 L0,200 Z M20,20 L20,180 L180,180 L180,20 Z"></path>
          </svg>
        </div>
      </div>
      
      <div className="section-content">
        <div className="text-center mb-16">
          <h2 className="section-title">Serviços Especializados</h2>
          <div className="w-20 h-1 bg-avs-orange mx-auto mb-6"></div>
          <p className="section-subtitle">Soluções completas para diferentes necessidades em engenharia civil</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card p-8 border border-avs-blue/10 hover:border-avs-blue/30 reveal"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-5 bg-avs-blue/5 p-4 inline-block rounded-lg">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-avs-blue mb-3 font-montserrat">{service.title}</h3>
              <p className="text-avs-gray">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
