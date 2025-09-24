import { Button } from "@/components/ui/button";
import { Zap, GraduationCap, TrendingUp } from "lucide-react";

const TargetAudience = () => {
  const audiences = [
    {
      icon: Zap,
      title: "Eletricistas que querem ampliar serviços",
      description: "Já trabalha com elétrica e quer expandir para um mercado mais lucrativo e especializado",
      highlight: "Amplie seus serviços"
    },
    {
      icon: GraduationCap,
      title: "Quem quer começar do zero",
      description: "Nunca trabalhou com neon mas quer aprender uma profissão rentável e em alta demanda",
      highlight: "Comece do zero"
    },
    {
      icon: TrendingUp,
      title: "Empreendedores buscando renda extra",
      description: "Busca uma fonte de renda adicional com baixo investimento inicial e alto retorno",
      highlight: "Renda extra garantida"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-6">
            Para quem é este <span className="text-gradient-neon">curso?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforme seu conhecimento em uma fonte de renda sólida e crescente
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div
                key={index}
                className="card-neon-glow p-8 text-center space-y-6 animate-fade-in-up hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 mx-auto bg-gradient-neon rounded-full flex items-center justify-center shadow-neon">
                  <Icon className="w-10 h-10 text-background" />
                </div>
                
                <div className="space-y-4">
                  <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
                    {audience.highlight}
                  </div>
                  
                  <h3 className="text-xl font-montserrat font-bold text-foreground">
                    {audience.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="btn-neon text-lg px-8 py-6"
            onClick={() => window.open('https://pay.hotmart.com/G98352360L', '_blank', 'noopener')}
          >
            Começar hoje
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;