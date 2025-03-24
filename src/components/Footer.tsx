
import { ChevronUp, Phone, Mail, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <Phone className="w-5 h-5" />,
      href: "https://wa.me/5568999917865",
      label: "WhatsApp",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:engenharia.avs@gmail.com",
      label: "Email",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://instagram.com/avs_engenharia",
      label: "Instagram",
    },
  ];

  return (
    <footer className="bg-avs-blue text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and description */}
          <div>
            <h2 className="font-bold text-2xl font-montserrat mb-4">
              <span className="text-white">AVS</span>
              <span className="text-avs-orange"> Engenharia</span>
            </h2>
            <p className="text-white/70 mb-6">
              Soluções completas em engenharia civil com excelência técnica. Projetamos, fiscalizamos e executamos obras com compromisso, qualidade e prazos impecáveis.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:mx-auto">
            <h3 className="text-lg font-semibold mb-4 font-montserrat">Links Rápidos</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white/70 hover:text-avs-orange transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-montserrat">Contato</h3>
            <ul className="space-y-3">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white/70 hover:text-avs-orange transition-colors"
                  >
                    <span className="mr-2">{link.icon}</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © 2025 AVS Engenharia. Todos os direitos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="bg-avs-orange/20 hover:bg-avs-orange/30 p-3 rounded-full transition-colors"
            aria-label="Voltar ao topo"
          >
            <ChevronUp className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
