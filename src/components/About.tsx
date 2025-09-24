import { TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-neon">
                <div className="w-full h-full bg-gradient-to-br from-background to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-neon rounded-full flex items-center justify-center text-background font-bold text-2xl">
                      A
                    </div>
                    <p className="text-sm text-muted-foreground">Alexandre</p>
                    <p className="text-xs text-muted-foreground mt-2">Especialista em Neon</p>
                  </div>
                </div>
              </div>
              {/* Neon glow effect */}
              <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl -z-10"></div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-6">
                Quem é <span className="text-gradient-neon">Alexandre</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Mais de 15 anos trabalhando com luminosos e neon, Alexandre já executou 
                centenas de projetos para empresas, fachadas comerciais e residências.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Formado em elétrica e especializado em alta tensão, ele decidiu compartilhar 
                todo seu conhecimento prático para formar novos profissionais no mercado.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong className="text-primary">Suporte direto:</strong> Além das aulas, 
                Alexandre oferece suporte individual via WhatsApp para tirar todas as suas 
                dúvidas durante o aprendizado.
              </p>
            </div>

            {/* Progress graphic */}
            <div className="space-y-4">
              <h3 className="text-xl font-montserrat font-bold text-foreground flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                Da primeira instalação ao primeiro faturamento
              </h3>
              
              <div className="relative">
                {/* Progress line */}
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-neon rounded-full shadow-neon"
                    style={{ width: '85%' }}
                  ></div>
                </div>
                
                {/* Progress points */}
                <div className="flex justify-between mt-4 text-sm">
                  <div className="text-center">
                    <div className="w-3 h-3 bg-primary rounded-full mx-auto mb-2"></div>
                    <span className="text-muted-foreground">Início</span>
                  </div>
                  <div className="text-center">
                    <div className="w-3 h-3 bg-primary rounded-full mx-auto mb-2"></div>
                    <span className="text-muted-foreground">Primeira instalação</span>
                  </div>
                  <div className="text-center">
                    <div className="w-3 h-3 bg-primary rounded-full mx-auto mb-2"></div>
                    <span className="text-muted-foreground">Primeiros clientes</span>
                  </div>
                  <div className="text-center">
                    <div className="w-3 h-3 bg-gradient-neon rounded-full mx-auto mb-2 shadow-neon"></div>
                    <span className="text-primary font-semibold">Renda consistente</span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground text-center mt-4">
                Média de 2-3 meses para começar a faturar com neon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;