import React from "react";
import TopStrip from "@/components/TopStrip";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import TargetAudience from "@/components/TargetAudience";
import Testimonials from "@/components/Testimonials";
import CourseModules from "@/components/CourseModules";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileFloatingButton from "@/components/MobileFloatingButton";

const Index = () => {
  React.useEffect(() => {
    // SEO Meta Tags
    document.title = "Neon para Eletricistas - Do Zero ao Avançado | Curso Completo";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Aprenda a instalar, reparar e vender luminosos de neon. Transforme isso em renda real. Curso completo com suporte. Garantia 7 dias.');
    }

    // OG Tags for social sharing
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Neon para Eletricistas - Lucre com Luminosos de Neon');
    }
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Domine instalação, manutenção e vendas de neon. Do zero ao profissional. Acesso imediato, suporte dedicado, garantia 7 dias.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopStrip />
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <TargetAudience />
        <Testimonials />
        <CourseModules />
        <HowItWorks />
        <Pricing />
        <About />
        <FAQ />
      </main>
      <Footer />
      
      {/* Fixed elements */}
      <WhatsAppButton />
      <MobileFloatingButton />
    </div>
  );
};

export default Index;
