import { Wrench, Settings, DollarSign, Lightbulb } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Wrench,
      title: "Técnica",
      description: "instalação e segurança"
    },
    {
      icon: Settings,
      title: "Manutenção", 
      description: "diagnóstico e reparo"
    },
    {
      icon: DollarSign,
      title: "Comercial",
      description: "vendas, orçamento, fornecedores"
    },
    {
      icon: Lightbulb,
      title: "Projeto",
      description: "design, materiais, LED x neon"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-6 text-gradient-neon">
            Por dentro do Backstage
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Domine os 4 pilares essenciais para transformar neon em uma fonte de renda consistente
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64">
            <div className="w-full h-full rounded-full bg-gradient-neon flex items-center justify-center shadow-neon-strong">
              <div className="text-center text-background">
                <div className="text-2xl md:text-3xl font-montserrat font-bold mb-2">NEON</div>
                <div className="text-sm md:text-base font-medium">BACKSTAGE</div>
              </div>
            </div>
          </div>

          {/* Benefit cards in circle formation */}
          <div className="grid grid-cols-2 gap-8 md:gap-12 pt-32 md:pt-40">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const positions = [
                "md:absolute md:top-0 md:left-1/2 md:transform md:-translate-x-1/2",
                "md:absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2",
                "md:absolute md:bottom-0 md:left-1/2 md:transform md:-translate-x-1/2",
                "md:absolute md:left-0 md:top-1/2 md:transform md:-translate-y-1/2"
              ];
              
              return (
                <div
                  key={index}
                  className={`card-neon p-6 text-center space-y-4 animate-fade-in-up ${positions[index]}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-primary">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;