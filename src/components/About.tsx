
import { Clock, Award, Users, Zap } from "lucide-react";

const About = () => {
  const differentials = [
    {
      icon: <Clock className="w-6 h-6 text-avs-orange" />,
      title: "Compromisso com prazos",
      description: "Entregamos projetos no tempo acordado, respeitando cronogramas e planejamentos."
    },
    {
      icon: <Award className="w-6 h-6 text-avs-orange" />,
      title: "Excelência técnica",
      description: "Aplicamos conhecimento técnico avançado e as melhores práticas de engenharia."
    },
    {
      icon: <Users className="w-6 h-6 text-avs-orange" />,
      title: "Atendimento personalizado",
      description: "Desenvolvemos soluções sob medida para as necessidades específicas de cada cliente."
    },
    {
      icon: <Zap className="w-6 h-6 text-avs-orange" />,
      title: "Soluções inovadoras",
      description: "Utilizamos métodos e tecnologias modernas para otimizar resultados."
    }
  ];

  return (
    <section id="about" className="section-container section-padding bg-avs-light-gray">
      <div className="section-bg-element blueprint-bg"></div>
      <div className="section-content">
        <div className="text-center mb-12">
          <h2 className="section-title">Sobre a AVS Engenharia</h2>
          <div className="w-20 h-1 bg-avs-orange mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <p className="text-avs-dark-gray mb-6 leading-relaxed">
              Fundada por profissionais com vasta experiência no mercado, a AVS Engenharia se destaca pela excelência técnica e compromisso com a qualidade. Atendemos projetos de diversos portes em Rio Branco e região, garantindo soluções sob medida para cada cliente.
            </p>
            <p className="text-avs-dark-gray mb-8 leading-relaxed">
              Nossa equipe multidisciplinar está preparada para enfrentar os mais complexos desafios da engenharia civil, sempre com foco em resultados sustentáveis e inovadores.
            </p>
            <a href="#contact" className="cta-button inline-block">Fale Conosco</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentials.map((item, index) => (
              <div 
                key={index} 
                className="glass-card p-6 reveal"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 bg-avs-blue/5 p-3 inline-block rounded-full">
                  {item.icon}
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-avs-blue mb-2">{item.title}</h3>
                <p className="text-avs-gray">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
