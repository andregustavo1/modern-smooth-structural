
import { Lightbulb, Shield, Target, Headphones } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Lightbulb className="w-10 h-10 text-avs-gold" />,
      title: "Expertise Técnica",
      description: "Equipe especializada em estruturas complexas, com formação sólida e experiência comprovada.",
    },
    {
      icon: <Shield className="w-10 h-10 text-avs-gold" />,
      title: "Fiscalização Rigorosa",
      description: "Garantimos a conformidade com todas as normas técnicas e especificações do projeto.",
    },
    {
      icon: <Target className="w-10 h-10 text-avs-gold" />,
      title: "Execução Precisa",
      description: "Obras entregues dentro do prazo e orçamento, com qualidade e acabamento superior.",
    },
    {
      icon: <Headphones className="w-10 h-10 text-avs-gold" />,
      title: "Atendimento Personalizado",
      description: "Soluções adaptadas às necessidades específicas de cada cliente e projeto.",
    },
  ];

  return (
    <section className="section-container section-padding">
      <div className="section-bg-element">
        <div className="absolute top-0 -left-10 w-72 h-72 bg-avs-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-10 w-72 h-72 bg-avs-gold/5 rounded-full blur-3xl"></div>
      </div>
      <div className="section-content">
        <div className="text-center mb-16">
          <h2 className="section-title">Por Que Nos Escolher?</h2>
          <div className="w-20 h-1 bg-avs-gold mx-auto mb-6"></div>
          <p className="section-subtitle">Qualidade técnica e compromisso em cada projeto</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="neo-card text-center hover:shadow-lg hover:-translate-y-2 reveal"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center mb-5 rounded-full bg-avs-blue/5 p-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-avs-blue mb-3 font-montserrat">{reason.title}</h3>
              <p className="text-avs-gray">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
