import { Button } from "@/components/ui/button";
import { 
  PlayCircle, 
  Lightbulb, 
  Package, 
  Settings, 
  DollarSign, 
  ShoppingCart,
  CheckCircle2 
} from "lucide-react";

const CourseModules = () => {
  const modules = [
    {
      number: "M1",
      title: "Boas-vindas",
      icon: PlayCircle,
      topics: [
        "Tudo que você vai aprender",
        "Quem é o Alexandre",
        "Como aproveitar melhor o curso"
      ]
    },
    {
      number: "M2", 
      title: "O Neon e o mercado",
      icon: Lightbulb,
      topics: [
        "O que é neon e como funciona",
        "Como é feito o neon",
        "Diferença entre Neon x LED", 
        "Neon como fonte de renda"
      ]
    },
    {
      number: "M3",
      title: "Materiais",
      icon: Package, 
      topics: [
        "Materiais necessários para trabalhar",
        "Transformadores e suas especificações",
        "Montando sua maleta de atendimento",
        "Onde comprar com melhor preço"
      ]
    },
    {
      number: "M4",
      title: "Instalação & manutenção", 
      icon: Settings,
      topics: [
        "Passo a passo da instalação completa",
        "Cálculo correto do transformador",
        "Trabalhando com alta voltagem com segurança",
        "Manuseio e transporte adequados",
        "Não acendeu totalmente: diagnóstico e solução",
        "Bônus: Guia completo do usuário"
      ]
    },
    {
      number: "M5",
      title: "Atendimento, orçamento e vendas",
      icon: DollarSign,
      topics: [
        "Como fazer uma visita técnica eficiente", 
        "Modelo profissional de orçamento",
        "Parcerias com laboratório especializado",
        "Formas de pagamento e prazo",
        "Garantia: como oferecer e cumprir"
      ]
    },
    {
      number: "M6", 
      title: "Compras estratégicas",
      icon: ShoppingCart,
      topics: [
        "Fornecedores confiáveis de acessórios",
        "Como comprar insumos com desconto", 
        "Estoque mínimo necessário",
        "Controle de custos e margem de lucro"
      ]
    }
  ];

  return (
    <section id="modulos" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-6">
            O que você vai <span className="text-gradient-neon">aprender</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            6 módulos completos com todo conhecimento necessário para dominar o mercado de neon
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <div
                key={index}
                className="card-neon p-6 space-y-6 animate-fade-in-up hover:shadow-neon transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-neon rounded-lg flex items-center justify-center shadow-neon">
                    <Icon className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <div className="text-primary font-bold text-sm">{module.number}</div>
                    <h3 className="text-lg font-montserrat font-bold text-foreground">
                      {module.title}
                    </h3>
                  </div>
                </div>

                <ul className="space-y-3">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
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

export default CourseModules;