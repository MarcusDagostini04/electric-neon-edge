import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Star, Users } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos M.",
      role: "Eletricista",
      image: "C.M.",
      text: "Em 2 meses já estava faturando R$ 3.500 extras só com neon. Curso mudou minha vida!"
    },
    {
      name: "Marina S.", 
      role: "Empreendedora",
      image: "M.S.",
      text: "Comecei do zero e hoje tenho minha própria empresa de luminosos. Recomendo!"
    },
    {
      name: "Roberto L.",
      role: "Técnico",
      image: "R.L.", 
      text: "O Alexandre ensina de verdade. Suporte incrível, tirou todas minhas dúvidas."
    },
    {
      name: "Ana P.",
      role: "Iniciante",
      image: "A.P.",
      text: "Nunca imaginei que seria tão fácil. Já consegui meus primeiros clientes!"
    },
    {
      name: "João F.",
      role: "Eletricista",
      image: "J.F.",
      text: "Ampliei meus serviços e dobrei minha renda. Investimento que vale muito a pena."
    },
    {
      name: "Luciana R.",
      role: "Designer",
      image: "L.R.",
      text: "Agora ofereço o serviço completo para meus clientes. Curso muito bem estruturado!"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 px-4 bg-gradient-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 bg-primary/10 text-primary border border-primary/20">
            <Users className="w-4 h-4 mr-2" />
            + de 1.200 alunos impactados
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-6">
            Depoimentos de quem já <span className="text-gradient-neon">faturou</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Veja como nossos alunos transformaram conhecimento em renda real
          </p>
        </div>

        {/* Vídeo do instrutor */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="card-neon-glow p-8 text-center">
            <div className="relative max-w-2xl mx-auto">
              <div className="aspect-video bg-gradient-to-br from-background to-secondary/20 rounded-lg flex items-center justify-center mb-6 border border-primary/20">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-primary" fill="currentColor" />
                  </div>
                  <p className="text-sm text-muted-foreground">Depoimento do Alexandre</p>
                  <p className="text-xs text-muted-foreground mt-2">Vídeo em breve</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6">
                "Veja como o neon virou renda para nossos alunos."
              </p>
              
              <Button
                size="lg"
                className="btn-neon text-lg px-8 py-6"
                onClick={() => window.open('https://pay.hotmart.com/G98352360L', '_blank', 'noopener')}
              >
                Garantir minha vaga
              </Button>
            </div>
          </div>
        </div>

        {/* Carrossel de depoimentos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-neon p-6 space-y-4 animate-fade-in-up hover:shadow-neon transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-neon rounded-full flex items-center justify-center text-background font-bold text-sm">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-sm text-muted-foreground leading-relaxed">
                "{testimonial.text}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;