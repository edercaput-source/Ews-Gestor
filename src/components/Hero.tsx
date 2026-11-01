import React, { useState } from 'react';
import {
  ArrowRight,
  MessageCircle,
  BarChart3,
  Package,
  CreditCard,
  ShoppingCart,
  FileCheck2,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export const Hero: React.FC = () => {
  const whatsappGeneral = buildWhatsAppLink(WHATSAPP_MESSAGES.geral);
  const [activeMobileCard, setActiveMobileCard] = useState(0);

  const highlightCards = [
    {
      icon: <CreditCard className="w-5 h-5 text-[#0B5ED7]" />,
      title: 'Gestão financeira',
      description: 'Controle de receitas, despesas, fluxo de caixa diário e previsibilidade para o seu negócio.',
    },
    {
      icon: <ShoppingCart className="w-5 h-5 text-[#0B5ED7]" />,
      title: 'Estoque e vendas',
      description: 'Cadastro de produtos, controle de movimentações, emissão de orçamentos, vendas e PDV ágil.',
    },
    {
      icon: <FileCheck2 className="w-5 h-5 text-[#0B5ED7]" />,
      title: 'Documentos fiscais',
      description: 'Emissão descomplicada e segura de NF-e, NFC-e e NFS-e em conformidade com a legislação.',
    },
  ];

  return (
    <div className="relative bg-[#111827] text-white">
      {/* Grade sutil nos cantos em SVG (5% a 8% opacidade) */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-80 h-80 opacity-[0.06] overflow-hidden"
        aria-hidden="true"
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="1" className="text-white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>
      <div
        className="pointer-events-none absolute top-0 right-0 w-80 h-80 opacity-[0.06] overflow-hidden"
        aria-hidden="true"
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-hex" width="28" height="48.497" patternUnits="userSpaceOnUse">
              <path
                d="M 14 0 L 28 8.08 L 28 24.25 L 14 32.33 L 0 24.25 L 0 8.08 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-white"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-hex)" />
        </svg>
      </div>

      <section
        id="inicio"
        className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-44 lg:pb-36 overflow-hidden"
      >
        {/* Brilho radial azul gestor atrás do mockup (opacidade suave 22%) */}
        <div
          className="pointer-events-none absolute top-1/2 right-[5%] -translate-y-1/2 w-[550px] lg:w-[700px] h-[550px] lg:h-[700px] bg-[#0B5ED7]/20 blur-[140px] rounded-full -z-0"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Duas colunas no desktop, texto primeiro no mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Coluna da Esquerda: Textos e Chamadas */}
            <div className="lg:col-span-6 text-left">
              {/* Badge institucional Ghost */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-white/90 mb-6 backdrop-blur-xs">
                <span className="w-2 h-2 rounded-full bg-[#2E7DFF] animate-pulse" />
                <span>{SITE_CONFIG.hero.badge}</span>
              </div>

              {/* H1 Principal com palavra destacada em Azul Claro #2E7DFF */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Gestão empresarial que acompanha o{' '}
                <span className="text-[#2E7DFF]">crescimento</span> da sua empresa.
              </h1>

              {/* Subtítulo */}
              <p className="mt-6 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal max-w-xl">
                {SITE_CONFIG.hero.subtitle}
              </p>

              {/* Botões de Ação na Nova Paleta */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href="#sistema"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0B5ED7] hover:bg-[#2E7DFF] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <span>{SITE_CONFIG.hero.ctaSystem}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>

                <a
                  href="#nucleo"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-white/10 border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-xs"
                >
                  <span>{SITE_CONFIG.hero.ctaNucleo}</span>
                </a>
              </div>

              {/* Link secundário discreto para WhatsApp */}
              <div className="mt-4">
                <a
                  href={whatsappGeneral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-300 hover:text-white transition-colors underline-offset-4 hover:underline"
                >
                  <MessageCircle className="w-4 h-4 text-[#2E7DFF]" aria-hidden="true" />
                  <span>{SITE_CONFIG.hero.ctaSecondary}</span>
                </a>
              </div>
            </div>

            {/* Coluna da Direita: Mockup Notebook + Tablet com Prints Reais e Chips de Vidro */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Notebook Mockup */}
                <div className="relative rounded-2xl bg-[#0B0F19] p-3 sm:p-4 shadow-2xl border border-white/15">
                  {/* Barra da Janela */}
                  <div className="flex items-center justify-between pb-2.5 px-2 border-b border-white/10 text-xs text-neutral-400">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#0B5ED7] inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
                    </div>
                    <span className="text-[11px] font-mono tracking-wide text-neutral-300">
                      EWS Gestor • Sistema de Gestão Empresarial
                    </span>
                    <div className="w-10" />
                  </div>

                  {/* Print Real: Dashboard de Gestão Financeira */}
                  <div className="mt-2.5 rounded-lg overflow-hidden bg-white shadow-inner aspect-[16/9.3]">
                    <img
                      src={SITE_CONFIG.assets.screens.dashboard}
                      alt="Dashboard de Gestão Financeira da plataforma EWS Gestor"
                      className="w-full h-full object-cover object-top"
                      width="800"
                      height="465"
                      loading="eager"
                    />
                  </div>

                  {/* Base do notebook */}
                  <div className="h-2 sm:h-3 w-full bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 rounded-b-xl mt-2 mx-auto" />
                </div>

                {/* Tablet Secundário Sobreposto à Direita com Print Real do Caixa */}
                <div className="hidden sm:block absolute -bottom-8 -right-4 lg:-right-6 w-64 lg:w-72 rounded-2xl bg-[#0B0F19] p-2.5 shadow-2xl border border-white/20 rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="text-[10px] font-semibold text-neutral-300 px-2 pb-1.5 flex items-center justify-between border-b border-white/10">
                    <span>Movimento do Caixa</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="rounded-lg overflow-hidden mt-1.5 bg-white aspect-[4/3]">
                    <img
                      src={SITE_CONFIG.assets.screens.caixa}
                      alt="Painel de Movimento de Caixa da plataforma EWS Gestor"
                      className="w-full h-full object-cover object-top"
                      width="400"
                      height="300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Chips Ghost Flutuantes */}
                <div className="absolute -top-4 -left-3 sm:-left-6 ghost-chip px-3.5 py-2 flex items-center gap-2.5 transition-transform duration-200 hover:-translate-y-1">
                  <div className="w-7 h-7 rounded-lg bg-[#0B5ED7]/35 text-[#2E7DFF] flex items-center justify-center">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Módulo</p>
                    <p className="text-xs font-semibold text-white">Financeiro</p>
                  </div>
                </div>

                <div className="absolute top-1/2 -left-4 sm:-left-8 ghost-chip px-3.5 py-2 hidden sm:flex items-center gap-2.5 transition-transform duration-200 hover:-translate-y-1">
                  <div className="w-7 h-7 rounded-lg bg-[#0B5ED7]/35 text-[#2E7DFF] flex items-center justify-center">
                    <Package className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Módulo</p>
                    <p className="text-xs font-semibold text-white">Estoque & Vendas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Três cards de destaque com acabamento Ghost sobrepostos à borda inferior */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mb-16 sm:-mb-20">
        {/* Desktop & Tablet: Grid de 3 colunas */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-5 lg:gap-6">
          {highlightCards.map((card, index) => (
            <div
              key={index}
              className="ghost-card p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="w-11 h-11 rounded-xl border border-[#0B5ED7]/20 bg-[#E6F0FF] flex items-center justify-center mb-4 transition-colors group-hover:border-[#0B5ED7]/40">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-[#1F2937] tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Linha azul gestor na base */}
              <div className="mt-5 pt-3 border-t border-[#E2E8F0] flex items-center">
                <div className="h-1 w-12 bg-[#0B5ED7] rounded-full group-hover:w-20 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Carrossel com indicadores */}
        <div className="sm:hidden">
          <div
            className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 pb-2"
            onScroll={(e) => {
              const el = e.currentTarget;
              const cardWidth = el.offsetWidth * 0.85;
              const index = Math.round(el.scrollLeft / cardWidth);
              setActiveMobileCard(Math.min(Math.max(index, 0), highlightCards.length - 1));
            }}
          >
            {highlightCards.map((card, index) => (
              <div
                key={index}
                className="min-w-[85%] snap-center ghost-card p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl border border-[#0B5ED7]/20 bg-[#E6F0FF] flex items-center justify-center mb-3">
                    {card.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#1F2937]">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-[#6B7280] leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-[#E2E8F0]">
                  <div className="h-1 w-12 bg-[#0B5ED7] rounded-full" />
                </div>
              </div>
            ))}
          </div>

          {/* Indicadores do carrossel mobile */}
          <div className="flex justify-center items-center gap-1.5 mt-3">
            {highlightCards.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  activeMobileCard === i ? 'w-5 bg-white' : 'w-1.5 bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
