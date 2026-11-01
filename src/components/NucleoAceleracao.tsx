import React from 'react';
import { Compass, Sparkles, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export const NucleoAceleracao: React.FC = () => {
  const whatsappNucleo = buildWhatsAppLink(WHATSAPP_MESSAGES.nucleo);

  return (
    <section id="nucleo" className="relative py-20 sm:py-28 bg-[#111827] text-white overflow-hidden">
      {/* Grade sutil nos cantos em SVG */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-72 h-72 opacity-[0.06] overflow-hidden"
        aria-hidden="true"
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="nucleo-grid" width="28" height="28" patternUnits="userSpaceOnUse">
              <path d="M 28 0 L 0 0 0 28" fill="none" stroke="currentColor" strokeWidth="1" className="text-white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#nucleo-grid)" />
        </svg>
      </div>

      {/* Brilho radial azul gestor institucional */}
      <div
        className="pointer-events-none absolute top-10 right-10 w-[600px] h-[450px] bg-[#0B5ED7]/20 blur-[140px] rounded-full -z-0"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 left-10 w-[500px] h-[350px] bg-[#2E7DFF]/15 blur-[130px] rounded-full -z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-bold uppercase tracking-wider mb-4 border border-white/15 backdrop-blur-xs">
            <Compass className="w-3.5 h-3.5 text-[#2E7DFF]" />
            <span>Solução 02 • Acompanhamento Empresarial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
            Não basta ter informações.{' '}
            <span className="text-[#2E7DFF]">É preciso saber o que fazer com elas.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            Acompanhamento e orientação empresarial para entender os números, interpretar indicadores, identificar problemas de gestão, melhorar a organização financeira, encontrar oportunidades e tomar decisões mais conscientes.
          </p>
        </div>

        {/* Os 5 Pilares em Cards Ghost Escuros (ghost-dark) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mb-14">
          {SITE_CONFIG.nucleoPillars.map((pillar) => (
            <div
              key={pillar.number}
              className="ghost-dark p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-mono text-[#2E7DFF]">
                    {pillar.number}
                  </span>
                  <Sparkles className="w-4 h-4 text-white/40" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-medium text-neutral-400">
                <Check className="w-3.5 h-3.5 text-[#2E7DFF]" />
                <span>Pilar de orientação</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bloco de Destaque / Investimento / Esclarecimento */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8 text-center backdrop-blur-xs">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-white mb-3">
            <ShieldCheck className="w-4 h-4 text-[#2E7DFF]" />
            <span>Orientação estratégica personalizada</span>
          </div>

          <h4 className="text-xl font-bold text-white tracking-tight">
            Investimento no Núcleo de Aceleração
          </h4>
          <p className="mt-2 text-sm sm:text-base text-neutral-300 max-w-xl mx-auto">
            {SITE_CONFIG.nucleoInvestmentNote}
          </p>
          <p className="mt-1 text-xs text-neutral-400">
            A EWS orienta e acompanha a gestão com atendimento direto e próximo, respeitando a autonomia e o ritmo da sua empresa.
          </p>

          <div className="mt-6">
            <a
              href={whatsappNucleo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0B5ED7] hover:bg-[#2E7DFF] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Conhecer o Núcleo de Aceleração</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
