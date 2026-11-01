import React from 'react';
import { Utensils, Wrench, Store, Truck, Briefcase, MessageSquare, ArrowRight, ImageIcon } from 'lucide-react';
import { SITE_CONFIG, SegmentItem } from '../config/siteConfig';
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from '../utils/whatsapp';

interface SegmentVisualProps {
  segment: SegmentItem;
}

const SegmentVisual: React.FC<SegmentVisualProps> = ({ segment }) => {
  const getIcon = () => {
    switch (segment.id) {
      case 'alimentacao':
        return <Utensils className="w-8 h-8 text-[#0B5ED7]" />;
      case 'automotivo':
        return <Wrench className="w-8 h-8 text-[#0B5ED7]" />;
      case 'comercio':
        return <Store className="w-8 h-8 text-[#0B5ED7]" />;
      case 'distribuicao':
        return <Truck className="w-8 h-8 text-[#0B5ED7]" />;
      case 'servicos':
      default:
        return <Briefcase className="w-8 h-8 text-[#0B5ED7]" />;
    }
  };

  return (
    <div className="relative w-full h-44 rounded-xl bg-white/70 border border-[#E2E8F0] flex flex-col items-center justify-center p-4 overflow-hidden group-hover:border-[#0B5ED7]/30 transition-colors">
      <div
        className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#1F2937_1px,transparent_1px)] [background-size:16px_16px]"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-14 h-14 rounded-2xl bg-white shadow-2xs border border-[#E2E8F0] flex items-center justify-center mb-2.5 transition-transform duration-200 group-hover:scale-105">
          {getIcon()}
        </div>
        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] flex items-center gap-1">
          <ImageIcon className="w-3 h-3 text-[#6B7280]" />
          <span>Foto do segmento: {segment.name}</span>
        </span>
      </div>
    </div>
  );
};

export const ParaQuem: React.FC = () => {
  return (
    <section id="para-quem" className="pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0B5ED7]">
            Segmentos atendidos
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-[#1F2937] tracking-tight">
            Negócios que precisam de mais organização para crescer.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6B7280] leading-relaxed">
            Soluções estruturadas para atender à rotina prática de quem está no dia a dia da operação.
          </p>
        </div>

        {/* Grid de Segmentos com acabamento Ghost */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SITE_CONFIG.segments.map((segment) => {
            const whatsappLink = buildWhatsAppLink(
              WHATSAPP_MESSAGES.segmento(segment.whatsappSegmentLabel)
            );

            return (
              <div
                key={segment.id}
                className="group flex flex-col justify-between ghost-card p-5 sm:p-6 hover:-translate-y-1"
              >
                <div>
                  <SegmentVisual segment={segment} />

                  <div className="mt-5">
                    <h3 className="text-xl font-bold text-[#1F2937] tracking-tight">
                      {segment.name}
                    </h3>
                    <p className="mt-2 text-sm text-[#6B7280] leading-relaxed">
                      {segment.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2E8F0]">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B5ED7] hover:text-[#2E7DFF] transition-colors group-hover:translate-x-0.5 duration-150"
                  >
                    <MessageSquare className="w-4 h-4 text-[#0B5ED7]" aria-hidden="true" />
                    <span>Falar sobre meu negócio</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
