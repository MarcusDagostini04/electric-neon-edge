import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "O curso é para iniciantes?",
      answer: "Sim! O curso foi desenvolvido para quem quer começar do zero. Começamos com o básico e evoluímos gradualmente. Mesmo que você nunca tenha trabalhado com neon antes, vai conseguir acompanhar e aplicar o conteúdo."
    },
    {
      question: "Preciso de ferramentas caras?",
      answer: "Não. Uma das grandes vantagens do neon é que você não precisa de equipamentos caros para começar. No módulo 3, mostramos exatamente quais materiais são necessários e onde comprar com o melhor custo-benefício. O investimento inicial é bem acessível."
    },
    {
      question: "Em quanto tempo vejo resultados?",
      answer: "A maioria dos nossos alunos consegue fazer sua primeira instalação em 30-45 dias após começar o curso. Para ter uma renda consistente, a média é de 2-3 meses aplicando o que é ensinado."
    },
    {
      question: "Tem certificado?",
      answer: "Este curso não inclui certificado formal. O foco é 100% prático: te ensinar a instalar, manter e vender serviços de neon para gerar renda real."
    },
    {
      question: "Como funciona a garantia?",
      answer: "Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito com o curso, devolvemos 100% do seu dinheiro, sem perguntas."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-dark">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-6">
            Perguntas <span className="text-gradient-neon">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas sobre o curso
          </p>
        </div>

        <div className="card-neon p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-primary/20 rounded-lg px-6 bg-background/5"
              >
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="btn-neon text-lg px-8 py-6"
            onClick={() => window.open('https://pay.hotmart.com/G98352360L', '_blank', 'noopener')}
          >
            Quero entrar agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;