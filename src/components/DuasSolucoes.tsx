import React from 'react';
import { Database, TrendingUp, Plus, CheckCircle, Info } from 'lucide-react';

export const DuasSolucoes: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0B5ED7]">
            Modelo de atuação
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-[#1F2937] tracking-tight">
            Duas soluções, uma gestão mais forte.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6B7280]">
            A união entre ferramenta tecnológica estruturada e orientação consultiva prática para o crescimento do seu negócio.
          </p>
        </div>

        {/* Esquema Visual de Dois Blocos Conectados com acabamento Ghost */}
        <div className="max-w-5xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch relative">
            {/* Bloco 1: Sistema de Gestão */}
            <div className="ghost-card p-7 sm:p-8 flex flex-col justify-between relative hover:-translate-y-1">
              <div className="absolute top-4 right-4 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#E6F0FF] text-[#0B5ED7] border border-[#0B5ED7]/20">
                Tecnologia
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#E6F0FF] border border-[#0B5ED7]/20 flex items-center justify-center mb-5">
                  <Database className="w-6 h-6 text-[#0B5ED7]" />
                </div>
                <h3 className="text-xl font-bold text-[#1F2937] tracking-tight">
                  Sistema de Gestão (ERP)
                </h3>
                <p className="mt-3 text-sm text-[#6B7280] leading-relaxed">
                  Fornece organização, padronização de registros e histórico confiável do dia a dia da empresa.
                </p>

                <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-[#1F2937]/85">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0B5ED7] shrink-0" />
                    <span>Controle de fluxo de caixa, pagamentos e recebimentos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0B5ED7] shrink-0" />
                    <span>Centralização de estoque, vendas e orçamentos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0B5ED7] shrink-0" />
                    <span>Emissão de notas fiscais e relatórios gerenciais</span>
                  </li>
                </ul>
              </div>

              <div className="mt-7 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#6B7280]">
                <span>Base de dados consistente</span>
                <a href="#sistema" className="font-semibold text-[#0B5ED7] hover:text-[#2E7DFF] transition-colors">
                  Ver detalhes do sistema &rarr;
                </a>
              </div>
            </div>

            {/* Ícone conector central no Desktop */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-[#1F2937] text-white items-center justify-center shadow-lg border-4 border-white">
              <Plus className="w-5 h-5 text-white" />
            </div>

            {/* Bloco 2: Núcleo de Aceleração */}
            <div className="ghost-card p-7 sm:p-8 flex flex-col justify-between relative hover:-translate-y-1">
              <div className="absolute top-4 right-4 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#1F2937]/[0.08] text-[#1F2937] border border-[#1F2937]/15">
                Acompanhamento
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#1F2937]/[0.08] border border-[#1F2937]/15 flex items-center justify-center mb-5">
                  <TrendingUp className="w-6 h-6 text-[#1F2937]" />
                </div>
                <h3 className="text-xl font-bold text-[#1F2937] tracking-tight">
                  Núcleo de Aceleração
                </h3>
                <p className="mt-3 text-sm text-[#6B7280] leading-relaxed">
                  Ajuda a interpretar os dados, traduzir indicadores e orientar você na tomada de decisões estratégicas.
                </p>

                <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-[#1F2937]/85">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#1F2937] shrink-0" />
                    <span>Entendimento aprofundado dos demonstrativos financeiros</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#1F2937] shrink-0" />
                    <span>Identificação de pontos de desperdício e gargalos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#1F2937] shrink-0" />
                    <span>Clareza para compras conscientes e planos de expansão</span>
                  </li>
                </ul>
              </div>

              <div className="mt-7 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#6B7280]">
                <span>Visão analítica consultiva</span>
                <a href="#nucleo" className="font-semibold text-[#1F2937] hover:text-[#0B5ED7] transition-colors">
                  Ver detalhes do Núcleo &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Aviso Explícito de Contratação Independente */}
          <div className="mt-8 ghost-panel rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-9 h-9 rounded-xl bg-[#E6F0FF] text-[#0B5ED7] flex items-center justify-center shrink-0 border border-[#0B5ED7]/20">
                <Info className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm text-[#1F2937]/85 font-medium leading-relaxed">
                <strong className="text-[#1F2937] font-semibold">Liberdade de escolha:</strong> Cada solução pode ser contratada separadamente, sem qualquer obrigatoriedade de contratar ambas. Você escolhe o que o seu negócio precisa agora.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
