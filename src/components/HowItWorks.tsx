import { Button } from "@/components/ui/button";
import { CreditCard, Play, Zap } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: CreditCard,
      title: "Matricule-se e receba acesso imediato",
      description: "Pagamento seguro e acesso liberado na hora. Comece a estudar em poucos minutos."
    },
    {
      number: "02", 
      icon: Play,
      title: "Assista no seu ritmo (PC ou celular)",
      description: "Aulas práticas e teóricas disponíveis 24h. Estude quando e onde quiser."
    },
    {
      number: "03",
      icon: Zap,
      title: "Aplique e comece a vender serviços de neon",
      description: "Use o conhecimento para conseguir seus primeiros clientes e faturar."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-6">
            Como <span className="text-gradient-neon">funciona</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            3 passos simples para transformar sua carreira
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-20 left-1/4 right-1/4 h-0.5 bg-gradient-neon opacity-30"></div>
            
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="text-center space-y-6 animate-fade-in-up relative"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Step number */}
                  <div className="relative">
                    <div className="w-20 h-20 mx-auto bg-gradient-neon rounded-full flex items-center justify-center shadow-neon-strong relative z-10">
                      <Icon className="w-10 h-10 text-background" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center text-primary font-bold text-sm">
                      {step.number}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-montserrat font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            className="btn-neon text-lg px-8 py-6"
            onClick={() => window.open('https://pay.hotmart.com/G98352360L', '_blank', 'noopener')}
          >
            Comprar com desconto
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;