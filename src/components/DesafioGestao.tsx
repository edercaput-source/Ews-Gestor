import React from 'react';
import {
  FileSpreadsheet,
  TrendingDown,
  Layers,
  FileQuestion,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const DesafioGestao: React.FC = () => {
  const icons = [
    <FileSpreadsheet className="w-5 h-5 text-[#0B5ED7]" key="1" />,
    <TrendingDown className="w-5 h-5 text-[#0B5ED7]" key="2" />,
    <Layers className="w-5 h-5 text-[#0B5ED7]" key="3" />,
    <FileQuestion className="w-5 h-5 text-[#0B5ED7]" key="4" />,
    <HelpCircle className="w-5 h-5 text-[#0B5ED7]" key="5" />,
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0B5ED7]">
            Diagnóstico de rotina
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-[#1F2937] tracking-tight">
            Sua empresa está crescendo. Sua gestão está acompanhando?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6B7280]">
            Conforme as vendas e o movimento aumentam, controles improvisados começam a gerar insegurança e gargalos no dia a dia.
          </p>
        </div>

        {/* Grid com os 5 Desafios em acabamento Ghost */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE_CONFIG.managementChallenges.map((challenge, index) => (
            <div
              key={index}
              className="ghost-card p-6 sm:p-7 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#E6F0FF] border border-[#0B5ED7]/15 flex items-center justify-center mb-4">
                  {icons[index]}
                </div>
                <h3 className="text-lg font-bold text-[#1F2937] tracking-tight">
                  {challenge.title}
                </h3>
                <p className="mt-2.5 text-sm text-[#6B7280] leading-relaxed">
                  {challenge.description}
                </p>
              </div>
              <div className="mt-5 text-[11px] font-mono uppercase tracking-wider text-[#6B7280]/80">
                Ponto de atenção 0{index + 1}
              </div>
            </div>
          ))}

          {/* Card de Fechamento em Grafite #1F2937 */}
          <div className="bg-[#1F2937] text-white rounded-2xl p-6 sm:p-7 shadow-md flex flex-col justify-between border border-white/10 hover:-translate-y-1 transition-all duration-200">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#0B5ED7] text-xs font-semibold uppercase tracking-wider mb-4 text-white">
                Próximo passo
              </span>
              <h3 className="text-xl font-bold tracking-tight text-white leading-snug">
                Organizar a empresa é o primeiro passo para decidir melhor.
              </h3>
              <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                Ter clareza dos números elimina suposições e dá segurança para planejar compras, investimentos e crescimento.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10">
              <a
                href="#sistema"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#2E7DFF] transition-colors"
              >
                <span>Ver como o sistema organiza sua rotina</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
