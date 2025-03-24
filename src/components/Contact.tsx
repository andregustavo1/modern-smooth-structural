
import { Phone, Mail, Instagram, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "WhatsApp",
      value: "+55 68 99991-7865",
      link: "https://wa.me/5568999917865",
      isExternal: true
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "E-mail",
      value: "engenharia.avs@gmail.com",
      link: "mailto:engenharia.avs@gmail.com",
      isExternal: true
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      title: "Instagram",
      value: "@avs_engenharia",
      link: "https://instagram.com/avs_engenharia",
      isExternal: true
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Localização",
      value: "Rio Branco/AC",
      link: "#",
      isExternal: false
    }
  ];

  return (
    <section id="contact" className="section-container section-padding">
      <div className="section-bg-element">
        <div className="absolute top-0 right-0 w-72 h-72 bg-avs-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-avs-orange/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-content">
        <div className="text-center mb-16">
          <h2 className="section-title">Entre em Contato</h2>
          <div className="w-20 h-1 bg-avs-orange mx-auto mb-6"></div>
          <p className="section-subtitle">Vamos transformar seu projeto em realidade</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target={item.isExternal ? "_blank" : "_self"}
                rel={item.isExternal ? "noopener noreferrer" : ""}
                className="neo-card flex items-center p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 reveal"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mr-4 bg-avs-blue text-white p-3 rounded-full">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-avs-gray mb-1">{item.title}</h3>
                  <p className="text-avs-blue font-semibold">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-16 p-8 neo-card reveal">
            <h3 className="text-2xl font-semibold text-avs-blue mb-6 font-montserrat text-center">Localização</h3>
            <div className="aspect-video w-full bg-avs-light-gray rounded-lg overflow-hidden">
              <iframe
                title="Mapa de Rio Branco"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249677.25803487847!2d-67.98261041796874!3d-9.963945999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x917f8daa4e33b2b3%3A0x4b05a5a5e0616e3!2sRio%20Branco%2C%20AC!5e0!3m2!1spt-BR!2sbr!4v1682455547985!5m2!1spt-BR!2sbr"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
