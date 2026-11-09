import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SolucoesVisaoGeral } from './components/SolucoesVisaoGeral';
import { ParaQuem } from './components/ParaQuem';
import { DesafioGestao } from './components/DesafioGestao';
import { SistemaGestao } from './components/SistemaGestao';
import { SoftwareProdutos } from './components/SoftwareProdutos';
import { InteligenciaArtificial } from './components/InteligenciaArtificial';
import { SobreEWS } from './components/SobreEWS';
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

      {/* Conteúdo Principal com Seções Âncora Estruturadas */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero Institucional */}
        <Hero />

        {/* 2. Visão Geral das Três Frentes Tecnológicas */}
        <SolucoesVisaoGeral />

        {/* 3. Segmentos Atendidos */}
        <ParaQuem />

        {/* 4. Diagnóstico e Desafio de Gestão */}
        <DesafioGestao />

        {/* 5. Frente 01: Sistemas e Gestão (ERP com telas reais e módulos) */}
        <SistemaGestao />

        {/* 6. Frente 02: Software e Produtos Digitais */}
        <SoftwareProdutos />

        {/* 7. Frente 03: Inteligência Artificial (fundo escuro premium) */}
        <InteligenciaArtificial />

        {/* 8. Sobre a EWS: Propósito, História e Visão Tecnológica */}
        <SobreEWS />

        {/* 9. Por que a EWS & Jornada de Atendimento */}
        <PorQueEWS />

        {/* 10. FAQ Institucional */}
        <Faq />

        {/* 11. CTA Final com Mini-Formulário e WhatsApp */}
        <CtaFinal />
      </main>

      {/* 12. Rodapé Institucional EWS Soluções Tecnológicas */}
      <Footer />

      {/* Botão Flutuante de WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
