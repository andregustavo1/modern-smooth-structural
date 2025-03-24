
import { MessageSquare, SearchCheck, FileCheck2, Construction, CheckCircle } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: <MessageSquare className="w-8 h-8 text-white" />,
      title: "Consulta Inicial",
      description: "Entendimento das necessidades do cliente"
    },
    {
      icon: <SearchCheck className="w-8 h-8 text-white" />,
      title: "Análise Técnica",
      description: "Estudo de viabilidade e planejamento"
    },
    {
      icon: <FileCheck2 className="w-8 h-8 text-white" />,
      title: "Proposta Detalhada",
      description: "Escopo, prazos e investimento"
    },
    {
      icon: <Construction className="w-8 h-8 text-white" />,
      title: "Execução",
      description: "Implementação com acompanhamento constante"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      title: "Entrega",
      description: "Finalização com garantia de qualidade"
    }
  ];

  return (
    <section className="section-container section-padding bg-avs-blue text-white">
      <div className="section-bg-element">
        <div className="absolute inset-0 blueprint-bg"></div>
      </div>
      
      <div className="section-content">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">Como Trabalhamos</h2>
          <div className="w-20 h-1 bg-avs-orange mx-auto mb-6"></div>
          <p className="text-white/80 max-w-3xl mx-auto text-xl">
            Nosso processo é estruturado para garantir eficiência e qualidade em cada etapa
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-avs-orange/30 transform -translate-x-1/2"></div>

          {/* Steps */}
          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row md:items-center gap-8 reveal ${
                  index % 2 === 0 ? "md:text-right" : ""
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline icon (only visible on desktop) */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-avs-orange flex items-center justify-center z-10">
                  {step.icon}
                </div>

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:mr-8" : "md:order-last md:ml-8"}`}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/20 transition-all duration-300">
                    {/* Icon (only visible on mobile) */}
                    <div className="md:hidden w-12 h-12 rounded-full bg-avs-orange flex items-center justify-center mb-4">
                      {step.icon}
                    </div>
                    
                    <span className="inline-block text-xs font-medium bg-avs-orange/20 py-1 px-3 rounded-full mb-3">
                      Etapa {index + 1}
                    </span>
                    <h3 className="text-xl font-semibold mb-2 font-montserrat">{step.title}</h3>
                    <p className="text-white/80">{step.description}</p>
                  </div>
                </div>

                {/* Empty div for layout (only on desktop) */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
