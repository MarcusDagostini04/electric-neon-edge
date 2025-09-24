import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  Shield, 
  CreditCard,
  Zap,
  Users,
  FileText,
  HeadphonesIcon,
  BookOpen,
  Calendar
} from "lucide-react";

const Pricing = () => {
  const valueItems = [
    {
      icon: BookOpen,
      title: "Curso completo em vídeo (teórico e prático)",
      value: "R$ 497,00"
    },
    {
      icon: Zap,
      title: "Mercado & oportunidades para eletricistas", 
      value: "R$ 167,00"
    },
    {
      icon: FileText,
      title: "Guia de materiais, ferramentas e maleta",
      value: "R$ 147,00"
    },
    {
      icon: CheckCircle2,
      title: "Instalação & manutenção (trafos, diagnóstico, transporte)",
      value: "R$ 297,00"
    },
    {
      icon: CreditCard,
      title: "Método de precificação, proposta e vendas",
      value: "R$ 247,00"
    },
    {
      icon: FileText,
      title: "Modelos prontos (orçamento, checklists, contrato simples)",
      value: "R$ 197,00"
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte individual via WhatsApp",
      value: "R$ 197,00"
    },
    {
      icon: Users,
      title: "Grupo exclusivo de alunos / networking",
      value: "R$ 147,00"
    },
    {
      icon: Zap,
      title: "Atualizações do curso",
      value: "R$ 337,00"
    },
    {
      icon: Calendar,
      title: "Acesso por 12 meses",
      value: "R$ 137,00"
    }
  ];

  return (
    <section id="preco" className="py-20 px-4 bg-gradient-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 bg-primary/10 text-primary border border-primary/20 animate-pulse">
            🔥 Oferta de Lançamento
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-6">
            Transforme sua carreira por <span className="text-gradient-neon">menos que você imagina</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Offer card with neon ring effect */}
          <div className="relative">
            {/* Neon ring background */}
            <div className="absolute inset-0 bg-gradient-neon rounded-2xl opacity-20 blur-xl"></div>
            <div className="absolute inset-2 bg-gradient-neon rounded-2xl opacity-10 blur-lg"></div>
            
            <div className="relative card-neon-glow p-8 md:p-12 space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-gradient-neon mb-4">
                  OFERTA DE LANÇAMENTO
                </h3>
                <p className="text-lg text-muted-foreground">
                  Tudo que você precisa para dominar o mercado de neon
                </p>
              </div>

              {/* Value breakdown */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {valueItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-background/5 rounded-lg border border-primary/10"
                    >
                      <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground flex-grow">{item.title}</span>
                      <span className="text-primary font-semibold text-sm">{item.value}</span>
                    </div>
                  );
                })}
              </div>

              {/* Total value */}
              <div className="text-center border-t border-primary/20 pt-6">
                <p className="text-lg text-muted-foreground mb-2">TOTAL:</p>
                <p className="text-3xl font-bold text-accent line-through mb-4">R$ 1.872,00</p>
              </div>

              {/* Main price */}
              <div className="text-center space-y-6 bg-background/10 rounded-xl p-8 border border-primary/30">
                <div className="space-y-2">
                  <p className="text-lg text-muted-foreground">
                    De <span className="line-through">R$ 1.872,00</span> por apenas
                  </p>
                  <div className="text-5xl md:text-6xl font-black font-montserrat text-gradient-neon">
                    R$ 297
                  </div>
                  <p className="text-xl text-foreground">
                    à vista ou <strong className="text-primary">12x de R$ 29,70</strong> no cartão
                  </p>
                </div>

                {/* Guarantee badge */}
                <div className="flex items-center justify-center gap-2 text-accent">
                  <Shield className="w-6 h-6" />
                  <span className="font-semibold">Garantia incondicional de 7 dias</span>
                </div>

                {/* CTA Button */}
                <Button
                  size="lg"
                  className="btn-neon text-xl px-12 py-8 w-full md:w-auto floating-btn font-black"
                  onClick={() => window.open('https://pay.hotmart.com/G98352360L', '_blank', 'noopener')}
                >
                  🚀 GARANTIR MINHA VAGA AGORA
                </Button>

                <p className="text-sm text-muted-foreground">
                  ✅ Acesso imediato após confirmação do pagamento<br/>
                  ✅ Suporte direto com o instrutor<br/>
                  ✅ Garantia de 7 dias ou seu dinheiro de volta
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            💡 <strong>Atenção:</strong> Esta é uma oferta por tempo limitado. 
            O preço pode voltar ao valor normal a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;