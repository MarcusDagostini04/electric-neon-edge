import { Shield, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-primary/20 py-12 px-4">
      <div className="container mx-auto">
        {/* Aviso legal */}
        <div className="card-neon p-6 mb-8">
          <div className="flex items-start gap-4">
            <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div className="space-y-2 text-sm text-muted-foreground">
              <h3 className="font-semibold text-foreground">⚠️ Aviso de Segurança</h3>
              <p>
                <strong>Trabalho com alta tensão:</strong> O neon trabalha com voltagens elevadas. 
                É obrigatório o uso de EPIs (Equipamentos de Proteção Individual) e conhecimento 
                básico em elétrica. Sempre consulte um eletricista qualificado para instalações.
              </p>
              <p>
                <strong>Responsabilidade:</strong> O aluno é responsável por seguir todas as 
                normas de segurança apresentadas no curso e pela aplicação correta do conhecimento.
              </p>
              <p>
                <strong>Neon vs LED:</strong> O curso aborda as diferenças técnicas e comerciais 
                entre neon tradicional e LED neon, sempre priorizando a transparência com o cliente final.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo e informações */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-neon flex items-center justify-center">
                <span className="text-background font-bold text-sm">N</span>
              </div>
              <span className="font-montserrat font-bold text-lg text-neon">NeonPro</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Curso completo de neon para eletricistas. 
              Do zero ao profissional em instalação, manutenção e vendas.
            </p>
            <p className="text-xs text-muted-foreground">
              © 2024 NeonPro. Todos os direitos reservados.
            </p>
          </div>

          {/* Suporte */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Suporte</h3>
            <div className="space-y-3">
              <a 
                href={`https://wa.me/5511964396533?text=${encodeURIComponent("Olá! Preciso de suporte com o curso de Neon.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp: (11) 96439-6533
              </a>
              <a 
                href="mailto:suporte@neonpro.com.br"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                suporte@neonpro.com.br
              </a>
            </div>
          </div>

          {/* Links legais */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Informações Legais</h3>
            <div className="space-y-2">
              <a 
                href="#" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Política de Privacidade
              </a>
              <a 
                href="#" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Termos de Uso
              </a>
              <a 
                href="#" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Política de Reembolso
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            Este site não faz parte do Facebook ou Facebook Inc. Além disso, 
            este site NÃO é endossado pelo Facebook de forma alguma.
          </p>
          <div className="mt-4 text-xs text-muted-foreground">
            {/* Área para pixels de tracking */}
            <span>Pixels Meta/Google • Scripts Hotmart integrados</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;