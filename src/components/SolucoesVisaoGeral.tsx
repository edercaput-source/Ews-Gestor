import React from 'react';
import { Layers, Code2, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export const SolucoesVisaoGeral: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'gestao':
        return <Layers className="w-6 h-6 text-[#0B5ED7]" />;
      case 'software':
        return <Code2 className="w-6 h-6 text-[#0B5ED7]" />;
      case 'ia':
      default:
        return <Sparkles className="w-6 h-6 text-[#0B5ED7]" />;
    }
  };

  const getAnchor = (id: string) => {
    switch (id) {
      case 'gestao':
        return '#sistema';
      case 'software':
        return '#software-produtos';
      case 'ia':
      default:
        return '#inteligencia-artificial';
    }
  };

  const getWhatsAppMessage = (id: string) => {
    switch (id) {
      case 'gestao':
        return WHATSAPP_MESSAGES.gestao;
      case 'software':
        return WHATSAPP_MESSAGES.software;
      case 'ia':
      default:
        return WHATSAPP_MESSAGES.ia;
    }
  };

  return (
    <section id="solucoes" className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0B5ED7]">
            Áreas de Atuação
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-[#1F2937] tracking-tight">
            Três frentes de tecnologia para a sua empresa.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6B7280] leading-relaxed">
            A EWS Gestor reúne competências complementares para atender às demandas de organização, desenvolvimento e inovação de negócios em diferentes segmentos.
          </p>
        </div>

        {/* Grid com as 3 Grandes Frentes com acabamento Ghost */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {SITE_CONFIG.areas.map((area) => (
            <div
              key={area.id}
              className="ghost-card p-6 sm:p-8 flex flex-col justify-between relative hover:-translate-y-1 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#E6F0FF] border border-[#0B5ED7]/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(area.id)}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#E6F0FF] text-[#0B5ED7] border border-[#0B5ED7]/20">
                    {area.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#1F2937] tracking-tight">
                  {area.title}
                </h3>
                <p className="text-xs font-semibold text-[#0B5ED7] mt-1 mb-3">
                  {area.tagline}
                </p>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {area.description}
                </p>

                <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-[#1F2937]/90">
                  {area.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0B5ED7] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                <a
                  href={getAnchor(area.id)}
                  className="text-xs font-bold text-[#0B5ED7] hover:text-[#2E7DFF] transition-colors inline-flex items-center gap-1"
                >
                  <span>{area.ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={buildWhatsAppLink(getWhatsAppMessage(area.id))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#6B7280] hover:text-[#1F2937] transition-colors underline-offset-4 hover:underline"
                >
                  Consultar WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Nota Institucional de Liberdade de Contratação */}
        <div className="mt-10 ghost-panel rounded-2xl p-5 sm:p-6 text-center max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm text-[#1F2937]/85 font-medium leading-relaxed">
            <strong className="text-[#1F2937] font-semibold">Autonomia e flexibilidade:</strong> Cada solução da EWS Gestor é contratada de forma independente. Sua empresa tem total liberdade para escolher apenas a frente que faz sentido para o seu momento.
          </p>
        </div>
      </div>
    </section>
  );
};
