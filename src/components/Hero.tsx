import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Shield, Users, Clock } from "lucide-react";

const Hero = () => {
  const scrollToModules = () => {
    const modulesSection = document.getElementById('modulos');
    if (modulesSection) {
      modulesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-dark overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-black leading-tight">
              <span className="text-neon-glow">LUCRE COM</span>
              <br />
              <span className="text-gradient-neon">LUMINOSOS DE NEON</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              Domine instalação, manutenção e vendas mesmo começando do zero.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="btn-neon text-lg px-8 py-6"
                onClick={() => window.open('https://pay.hotmart.com/G98352360L', '_blank', 'noopener')}
              >
                Quero entrar agora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="btn-neon-outline text-lg px-8 py-6"
                onClick={scrollToModules}
              >
                Ver conteúdo do curso
              </Button>
            </div>

            {/* Selos */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2 bg-card text-foreground border border-primary/20">
                <Clock className="w-4 h-4 text-primary" />
                Acesso imediato
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2 bg-card text-foreground border border-primary/20">
                <Users className="w-4 h-4 text-primary" />
                Suporte dedicado
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2 bg-card text-foreground border border-primary/20">
                <Shield className="w-4 h-4 text-primary" />
                Garantia 7 dias
              </Badge>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="flex justify-center lg:justify-end animate-fade-in-left">
            <div className="relative">
              {/* Neon ring effect */}
              <div className="ring-neon absolute inset-0 rounded-full"></div>
              
              {/* Video container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-gradient-card border-2 border-primary/20 shadow-neon-strong">
                {/* Placeholder video */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-background to-secondary/20">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                      <Play className="w-10 h-10 text-primary" fill="currentColor" />
                    </div>
                    <p className="text-sm text-muted-foreground">Preview do curso</p>
                    <p className="text-xs text-muted-foreground mt-2">Vídeo em breve</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;