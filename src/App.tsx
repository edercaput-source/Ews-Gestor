import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ParaQuem } from './components/ParaQuem';
import { DesafioGestao } from './components/DesafioGestao';
import { SistemaGestao } from './components/SistemaGestao';
import { NucleoAceleracao } from './components/NucleoAceleracao';
import { DuasSolucoes } from './components/DuasSolucoes';
import { PorQueEWS } from './components/PorQueEWS';
import { Faq } from './components/Faq';
import { CtaFinal } from './components/CtaFinal';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  useEffect(() => {
    const purgeNetlify = () => {
      const selectors = [
        '#netlify-badge-container',
        '.netlify-badge',
        '[class*="netlify-badge" i]',
        '[id*="netlify-badge" i]',
        '[class*="netlify-drawer" i]',
        '[id*="netlify-drawer" i]',
        '#netlify-collaborative-deploy-preview',
        'netlify-drawer',
        'netlify-badge',
        '[data-netlify-drawer]',
        'iframe[src*="netlify" i]',
        'iframe[id*="netlify" i]',
        'a[href*="netlify.com" i]',
        'a[href*="netlify.app" i]',
      ];
      selectors.forEach((sel) => {
        document.querySelectorAll(sel).forEach((el) => {
          try {
            (el as HTMLElement).style.setProperty('display', 'none', 'important');
            el.remove();
          } catch {}
        });
      });
    };

    purgeNetlify();
    const interval = setInterval(purgeNetlify, 250);
    const timeout = setTimeout(() => clearInterval(interval), 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#1F2937]">
      {/* Menu Fixo com Efeito Vidro Claro */}
      <Navbar />

      {/* Conteúdo Principal com Seções Âncora na Ordem Exata */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Para quem é */}
        <ParaQuem />

        {/* 3. O Desafio da Gestão */}
        <DesafioGestao />

        {/* 4. Sistema de Gestão */}
        <SistemaGestao />

        {/* 5. Núcleo de Aceleração */}
        <NucleoAceleracao />

        {/* 6. Duas Soluções, Uma Gestão Mais Forte */}
        <DuasSolucoes />

        {/* 7. Por que a EWS Gestor */}
        <PorQueEWS />

        {/* 8. FAQ Curto */}
        <Faq />

        {/* 9. CTA Final com Mini-Formulário */}
        <CtaFinal />
      </main>

      {/* 10. Rodapé Sólido Grafite */}
      <Footer />

      {/* Botão Flutuante de WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
