
const CallToAction = () => {
  return (
    <section className="section-container py-20 bg-avs-blue relative overflow-hidden">
      <div className="section-bg-element">
        <div className="absolute inset-0 blueprint-bg"></div>
        <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-avs-orange opacity-10 rounded-full"></div>
        <div className="absolute -top-48 -left-48 w-96 h-96 bg-avs-orange opacity-10 rounded-full"></div>
      </div>
      
      <div className="section-content text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-montserrat leading-tight reveal">
          Pronto para Construir com Excelência?
        </h2>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 reveal animate-delay-100">
          Solicite um orçamento e transforme sua ideia em realidade
        </p>
        <a 
          href="https://wa.me/5568999917865" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="cta-button text-lg px-8 py-4 reveal animate-delay-200"
        >
          Fale com um Especialista
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
