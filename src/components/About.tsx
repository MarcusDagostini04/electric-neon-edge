import { MessageCircle } from "lucide-react";
import marcusAlexandreImage from "@/assets/marcus-alexandre.png";

const About = () => {
  const handleWhatsAppClick = () => {
    const url = "https://wa.me/5511964396533";
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#0B0B0F' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-primary mb-6 shadow-neon">
            Nosso Suporte Especializado
          </h2>
          
          {/* Decorative line */}
          <div className="w-24 h-0.5 bg-gradient-neon mx-auto mb-12 shadow-neon"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Photo */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              {/* Diffused neon glow background */}
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl scale-110 -z-10"></div>
              
              {/* Photo container */}
              <div className="relative w-80 h-80 rounded-3xl overflow-hidden border-2 border-primary/40 shadow-neon-strong">
                <img 
                  src={marcusAlexandreImage} 
                  alt="Marcus e Alexandre - Suporte Especializado"
                  className="w-full h-full object-cover object-center grayscale"
                />
                
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
              </div>
              
              {/* Additional glow effect */}
              <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-xl -z-5"></div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 animate-fade-in">
            {/* About Alexandre */}
            <div className="space-y-4">
              <h3 className="text-xl font-montserrat font-bold text-primary">
                Alexandre
              </h3>
              <div className="w-12 h-0.5 bg-gradient-neon"></div>
              <p className="text-muted-foreground leading-relaxed">
                Alexandre tem mais de 30 anos de experiência no mercado de luminosos de neon, 
                participando da criação e manutenção de centenas de projetos em fachadas, 
                lojas e empresas. Ele será o mentor técnico, compartilhando segredos e 
                técnicas que só quem vive o neon há décadas conhece.
              </p>
            </div>

            {/* About Marcus */}
            <div className="space-y-4">
              <h3 className="text-xl font-montserrat font-bold text-primary">
                Marcus
              </h3>
              <div className="w-12 h-0.5 bg-gradient-neon"></div>
              <p className="text-muted-foreground leading-relaxed">
                Marcus é especialista em materiais, ferramentas e acessórios. 
                Ele tira dúvidas sobre instalação e garante que você tenha suporte 
                prático em cada etapa do curso.
              </p>
            </div>

            {/* WhatsApp CTA */}
            <div className="pt-6">
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-background font-montserrat font-semibold rounded-lg shadow-neon hover:shadow-neon-strong transition-all duration-300 hover:scale-105"
                aria-label="Tirar dúvidas no WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
                Tirar dúvidas no WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-0 top-1/2 w-px h-32 bg-gradient-to-b from-transparent via-primary/40 to-transparent"></div>
        <div className="absolute right-0 top-1/2 w-px h-32 bg-gradient-to-b from-transparent via-primary/40 to-transparent"></div>
      </div>
    </section>
  );
};

export default About;