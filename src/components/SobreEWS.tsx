import React from 'react';
import { Target, Lightbulb, Shield, Cpu, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export const SobreEWS: React.FC = () => {
  const whatsappGeneral = buildWhatsAppLink(WHATSAPP_MESSAGES.geral);

  const pillarsIcons = [
    <Cpu className="w-5 h-5 text-[#0B5ED7]" key="1" />,
    <Target className="w-5 h-5 text-[#0B5ED7]" key="2" />,
    <Shield className="w-5 h-5 text-[#0B5ED7]" key="3" />,
    <Lightbulb className="w-5 h-5 text-[#0B5ED7]" key="4" />,
  ];

  return (
    <section id="sobre" className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0B5ED7]">
            Sobre a EWS
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-[#1F2937] tracking-tight">
            {SITE_CONFIG.about.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6B7280] leading-relaxed">
            {SITE_CONFIG.about.subtitle}
          </p>
        </div>

        {/* 4 Pilares Institucionais em Cards Ghost */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12 sm:mb-16">
          {SITE_CONFIG.about.pillars.map((pillar, index) => (
            <div
              key={index}
              className="ghost-card p-6 sm:p-7 flex flex-col justify-between hover:-translate-y-1 transition-all"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#E6F0FF] border border-[#0B5ED7]/20 flex items-center justify-center mb-4">
                  {pillarsIcons[index]}
                </div>
                <h3 className="text-lg font-bold text-[#1F2937] tracking-tight">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E2E8F0] text-[11px] font-mono uppercase tracking-wider text-[#0B5ED7]">
                Compromisso 0{index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Banner Institucional de Posicionamento */}
        <div className="bg-[#1F2937] text-white rounded-3xl p-6 sm:p-10 border border-white/10 shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-[#0B5ED7] text-xs font-semibold uppercase tracking-wider mb-4 text-white">
              Identidade Institucional
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
              Soluções tecnológicas pensadas para a realidade de quem empreende.
            </h3>
            <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
              Atuamos com ética, transparência e seriedade em todas as entregas. Sejam sistemas de gestão empresarial, desenvolvimento de software ou ferramentas de inteligência artificial, nosso compromisso é construir tecnologias funcionais que gerem organização, controle e crescimento sustentável.
            </p>
            <div className="mt-6 sm:mt-8">
              <a
                href={whatsappGeneral}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0B5ED7] hover:bg-[#2E7DFF] transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <span>Conhecer a EWS Gestor de perto</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
