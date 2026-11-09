import React from 'react';
import {
  Code2,
  Globe,
  LayoutGrid,
  ShieldCheck,
  Server,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export const SoftwareProdutos: React.FC = () => {
  const whatsappSoftware = buildWhatsAppLink(WHATSAPP_MESSAGES.software);

  const capabilities = [
    {
      icon: <Globe className="w-5 h-5 text-[#0B5ED7]" />,
      title: 'Aplicações Web Modernas',
      description:
        'Sistemas web responsivos e de alto desempenho, construídos com arquiteturas modernas para acesso seguro de qualquer dispositivo.',
    },
    {
      icon: <LayoutGrid className="w-5 h-5 text-[#0B5ED7]" />,
      title: 'Sistemas Personalizados',
      description:
        'Desenvolvimento direcionado para regras de negócio específicas, fluxos internos e particularidades operacionais da sua empresa.',
    },
    {
      icon: <Server className="w-5 h-5 text-[#0B5ED7]" />,
      title: 'Plataformas Digitais',
      description:
        'Soluções estruturadas para conectar equipes, clientes ou fornecedores com governança de dados e estabilidade.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#0B5ED7]" />,
      title: 'Produtos Digitais e Ferramentas',
      description:
        'Criação e comercialização de ferramentas focadas em resolver desafios pontuais de mercado com agilidade e simplicidade.',
    },
  ];

  return (
    <section
      id="software-produtos"
      className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-[#E2E8F0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F0FF] text-[#0B5ED7] text-xs font-bold uppercase tracking-wider mb-3 border border-[#0B5ED7]/20">
            <Code2 className="w-3.5 h-3.5" />
            <span>Frente 02 • Software e Produtos Digitais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2937] tracking-tight">
            Software e Produtos Digitais
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6B7280] leading-relaxed">
            Desenvolvimento, comercialização e disponibilização de plataformas, aplicações web e ferramentas sob medida para transformar ideias e necessidades em soluções tecnológicas funcionais.
          </p>
        </div>

        {/* Grid com Capacidades em Cards Ghost */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="ghost-card p-6 sm:p-7 flex flex-col justify-between hover:-translate-y-1 transition-all"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#E6F0FF] border border-[#0B5ED7]/20 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1F2937] tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#6B7280] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center gap-2 text-xs font-medium text-[#1F2937]/80">
                <CheckCircle2 className="w-4 h-4 text-[#0B5ED7]" />
                <span>Solução digital EWS Gestor</span>
              </div>
            </div>
          ))}
        </div>

        {/* Painel Institucional de Atuação Digital */}
        <div className="ghost-panel rounded-3xl p-6 sm:p-10 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B5ED7]">
                Demanda sob medida
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mt-1">
                Precisa de uma aplicação ou ferramenta específica?
              </h3>
              <p className="text-xs sm:text-sm text-[#6B7280] mt-1.5 max-w-xl">
                Apresente seu projeto ou necessidade operacional. A EWS Gestor avalia a viabilidade e estrutura a melhor abordagem de desenvolvimento.
              </p>
            </div>

            <a
              href={whatsappSoftware}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0B5ED7] hover:bg-[#2E7DFF] transition-all duration-200 shadow-xs hover:shadow-md shrink-0"
            >
              <span>Conversar sobre projeto</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
