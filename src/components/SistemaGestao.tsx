import React, { useState } from 'react';
import {
  Tag,
  Package,
  ShoppingCart,
  TrendingUp,
  CreditCard,
  FileText,
  BarChart,
  Store,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Maximize2,
  Layers,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export const SistemaGestao: React.FC = () => {
  const [activeScreenTab, setActiveScreenTab] = useState<'dashboard' | 'caixa' | 'ordens'>('dashboard');
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const whatsappSistema = buildWhatsAppLink(WHATSAPP_MESSAGES.sistema);

  const moduleIcons: Record<string, React.ReactNode> = {
    produtos: <Tag className="w-5 h-5 text-[#0B5ED7]" />,
    estoque: <Package className="w-5 h-5 text-[#0B5ED7]" />,
    compras: <ShoppingCart className="w-5 h-5 text-[#0B5ED7]" />,
    vendas: <TrendingUp className="w-5 h-5 text-[#0B5ED7]" />,
    financeiro: <CreditCard className="w-5 h-5 text-[#0B5ED7]" />,
    fiscal: <FileText className="w-5 h-5 text-[#0B5ED7]" />,
    relatorios: <BarChart className="w-5 h-5 text-[#0B5ED7]" />,
    pdv: <Store className="w-5 h-5 text-[#0B5ED7]" />,
    operacional: <Wrench className="w-5 h-5 text-[#0B5ED7]" />,
  };

  const screensInfo = {
    dashboard: {
      title: 'Visão Geral e Indicadores Financeiros',
      description: 'Acompanhe recebimentos, pagamentos do dia, faturamento e atalhos rápidos das rotinas fiscais e comerciais.',
      src: SITE_CONFIG.assets.screens.dashboard,
      alt: 'Tela real do Dashboard de Gestão Financeira EWS Gestor com resumo financeiro e atalhos rápidos',
    },
    caixa: {
      title: 'Movimento do Caixa e Controle Diário',
      description: 'Lançamentos de receitas, despesas, conciliação e saldo atualizado em tempo real.',
      src: SITE_CONFIG.assets.screens.caixa,
      alt: 'Tela real de Movimento do Caixa na plataforma EWS Gestor',
    },
    ordens: {
      title: 'Ordens de Serviço e Gestão Operacional',
      description: 'Controle de OS faturadas, pendentes, técnicos responsáveis e acompanhamento de chamados.',
      src: SITE_CONFIG.assets.screens.ordens,
      alt: 'Tela real de Gestão Operacional e Ordens de Serviço da EWS Gestor',
    },
  };

  return (
    <section id="sistema" className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F0FF] text-[#0B5ED7] text-xs font-bold uppercase tracking-wider mb-3 border border-[#0B5ED7]/20">
            <Layers className="w-3.5 h-3.5" />
            <span>Solução 01 • ERP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2937] tracking-tight">
            Sua gestão em um só lugar.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6B7280] leading-relaxed">
            Sistema de gestão financeira e operacional para MEIs, pequenos e médios negócios, com implantação, treinamento e orientação inicial feitos pela EWS Gestor.
          </p>
        </div>

        {/* Showcase de Telas Reais do Sistema com Acabamento Ghost */}
        <div className="mb-18 ghost-panel rounded-2xl p-4 sm:p-7">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#E2E8F0]">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B5ED7]">
                Telas reais da plataforma
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#1F2937]">
                {screensInfo[activeScreenTab].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#6B7280] mt-0.5">
                {screensInfo[activeScreenTab].description}
              </p>
            </div>

            {/* Abas seletoras com acabamento Ghost */}
            <div className="flex items-center gap-1.5 bg-[#E2E8F0]/70 p-1 rounded-xl self-start sm:self-center border border-[#E2E8F0]">
              <button
                type="button"
                onClick={() => setActiveScreenTab('dashboard')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeScreenTab === 'dashboard'
                    ? 'bg-white text-[#1F2937] shadow-xs'
                    : 'text-[#6B7280] hover:text-[#1F2937] hover:bg-white/50'
                }`}
              >
                Dashboard
              </button>
              <button
                type="button"
                onClick={() => setActiveScreenTab('caixa')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeScreenTab === 'caixa'
                    ? 'bg-white text-[#1F2937] shadow-xs'
                    : 'text-[#6B7280] hover:text-[#1F2937] hover:bg-white/50'
                }`}
              >
                Movimento de Caixa
              </button>
              <button
                type="button"
                onClick={() => setActiveScreenTab('ordens')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeScreenTab === 'ordens'
                    ? 'bg-white text-[#1F2937] shadow-xs'
                    : 'text-[#6B7280] hover:text-[#1F2937] hover:bg-white/50'
                }`}
              >
                Ordens de Serviço
              </button>
            </div>
          </div>

          {/* Moldura da tela com botão de zoom */}
          <div className="relative rounded-xl overflow-hidden border border-[#E2E8F0] shadow-sm bg-white">
            <button
              type="button"
              onClick={() => setIsZoomOpen(true)}
              className="absolute top-3 right-3 z-10 p-2 rounded-lg bg-[#1F2937]/70 hover:bg-[#1F2937] text-white backdrop-blur-xs transition-colors"
              aria-label="Ampliar visualização da tela"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
            <img
              src={screensInfo[activeScreenTab].src}
              alt={screensInfo[activeScreenTab].alt}
              className="w-full h-auto object-contain cursor-pointer hover:opacity-98 transition-opacity"
              onClick={() => setIsZoomOpen(true)}
              loading="lazy"
            />
          </div>
        </div>

        {/* Modal de Zoom */}
        {isZoomOpen && (
          <div
            className="fixed inset-0 z-50 bg-[#111827]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={() => setIsZoomOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Visualização ampliada da tela"
          >
            <div
              className="relative max-w-6xl w-full bg-white rounded-2xl overflow-hidden p-2 shadow-2xl border border-[#E2E8F0]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-3 border-b border-[#E2E8F0]">
                <p className="font-semibold text-sm text-[#1F2937]">
                  {screensInfo[activeScreenTab].title} (EWS Gestor)
                </p>
                <button
                  type="button"
                  onClick={() => setIsZoomOpen(false)}
                  className="px-3 py-1 text-xs font-bold uppercase rounded-md bg-[#F8FAFC] hover:bg-[#E2E8F0] text-[#1F2937]"
                >
                  Fechar
                </button>
              </div>
              <div className="overflow-auto max-h-[80vh] p-2">
                <img
                  src={screensInfo[activeScreenTab].src}
                  alt={screensInfo[activeScreenTab].alt}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        )}

        {/* Subtítulo Módulos */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] tracking-tight">
              Módulos do Sistema de Gestão
            </h3>
            <p className="mt-1 text-sm text-[#6B7280]">
              Todas as ferramentas essenciais integradas para simplificar o seu cotidiano empresarial.
            </p>
          </div>

          {/* Preço Discreto: Planos entre R$ 100 e R$ 120 por mês */}
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/90 border border-[#E2E8F0] text-xs sm:text-sm font-semibold text-[#1F2937] self-start sm:self-auto shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-[#0B5ED7]" />
            <span>{SITE_CONFIG.systemPricingNote}</span>
          </div>
        </div>

        {/* Grid dos 9 Módulos com acabamento Ghost */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SITE_CONFIG.systemModules.map((mod) => (
            <div
              key={mod.id}
              className="ghost-card p-5 sm:p-6 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#E6F0FF] border border-[#0B5ED7]/20 flex items-center justify-center mb-3.5">
                  {moduleIcons[mod.id] || <Tag className="w-5 h-5 text-[#0B5ED7]" />}
                </div>
                <h4 className="text-base font-bold text-[#1F2937] tracking-tight">
                  {mod.name}
                </h4>
                <p className="mt-1.5 text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                  {mod.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA do Sistema */}
        <div className="mt-12 text-center">
          <a
            href={whatsappSistema}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0B5ED7] hover:bg-[#2E7DFF] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <span>Conhecer o sistema</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="mt-2.5 text-xs text-[#6B7280]">
            Implantação, treinamento da equipe e orientação inicial com a EWS Gestor.
          </p>
        </div>
      </div>
    </section>
  );
};
