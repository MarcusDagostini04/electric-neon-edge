import { Button } from "@/components/ui/button";

const TopStrip = () => {
  return (
    <div className="w-full bg-primary/10 border-b border-primary/20 py-2 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-medium text-primary">
          <span className="animate-pulse">⚡</span>
          <span>Vagas limitadas • Bônus por tempo limitado</span>
        </div>
        <Button
          size="sm"
          className="btn-neon text-xs px-4 py-2 h-8"
          onClick={() => window.open('https://pay.hotmart.com/G98352360L', '_blank', 'noopener')}
        >
          Garantir vaga
        </Button>
      </div>
    </div>
  );
};

export default TopStrip;