import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 navbar-glass">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-neon flex items-center justify-center">
            <span className="text-background font-bold text-sm">N</span>
          </div>
          <span className="font-montserrat font-bold text-lg text-neon">NeonPro</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="#modulos" className="text-foreground hover:text-primary transition-colors">
            Conteúdo
          </a>
          <a href="#depoimentos" className="text-foreground hover:text-primary transition-colors">
            Depoimentos
          </a>
          <a href="#preco" className="text-foreground hover:text-primary transition-colors">
            Preço
          </a>
        </div>

        <Button
          className="btn-neon"
          onClick={() => window.open('https://pay.hotmart.com/G98352360L', '_blank', 'noopener')}
        >
          Quero entrar agora
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;