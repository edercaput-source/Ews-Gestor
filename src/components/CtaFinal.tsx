import React, { useState } from 'react';
import { Send, ArrowUpRight, CheckCircle2, MessageSquare, Mail } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { buildWhatsAppLink, WHATSAPP_MESSAGES, validateContactForm, ContactFormData, ContactFormErrors } from '../utils/whatsapp';

export const CtaFinal: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    nome: '',
    negocio: '',
    interesse: '',
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const whatsappGeneral = buildWhatsAppLink(WHATSAPP_MESSAGES.geral);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Limpa erro ao digitar/selecionar
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);

    // Monta a mensagem pré-formatada do formulário
    const customMessage = WHATSAPP_MESSAGES.formulario(
      formData.nome,
      formData.negocio,
      formData.interesse
    );

    const whatsappUrl = buildWhatsAppLink(customMessage);

    // Abre o WhatsApp com a mensagem pré-preenchida
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 sm:py-28 bg-gradient-to-br from-[#0B5ED7] via-[#0B5ED7] to-[#2E7DFF] text-white relative overflow-hidden">
      {/* Grid sutil decorativo em marca d'água */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Coluna da Esquerda: Textos de Conversão */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-xs font-bold uppercase tracking-widest text-white border border-white/20 backdrop-blur-xs">
              Fale com a EWS Gestor
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Sua empresa está pronta para{' '}
              <span className="text-white underline decoration-white/40 underline-offset-8">evoluir na gestão?</span>
            </h2>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
              Conheça as soluções da EWS Gestor e descubra como podemos ajudar sua empresa a ter mais organização, controle e clareza nas decisões.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={whatsappGeneral}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-[#0B5ED7] bg-white hover:bg-[#F8FAFC] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Agendar apresentação direta</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/30 transition-colors backdrop-blur-xs"
                title="Enviar e-mail para contato@ewsgestor.com.br"
              >
                <Mail className="w-4 h-4 text-white shrink-0" aria-hidden="true" />
                <span>{SITE_CONFIG.email}</span>
              </a>
            </div>

            <div className="pt-6 border-t border-white/20 flex flex-col sm:flex-row gap-4 text-xs text-white/85">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>Atendimento direto e personalizado</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>Sem compromisso ou burocracia</span>
              </div>
            </div>
          </div>

          {/* Coluna da Direita: Mini-Formulário em Card com Acabamento Ghost */}
          <div className="lg:col-span-6">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-9 border border-white/30 shadow-[0_16px_36px_rgba(15,23,42,0.14)] text-[#1F2937]">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#E6F0FF] text-[#0B5ED7] flex items-center justify-center border border-[#0B5ED7]/20">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1F2937]">
                    Agende sua apresentação
                  </h3>
                  <p className="text-xs text-[#6B7280]">
                    Preencha e converse com a gente no WhatsApp em 1 clique
                  </p>
                </div>
              </div>

              {isSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    WhatsApp aberto com seus dados preenchidos! Se não abriu automaticamente, clique no botão novamente.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4.5">
                {/* Campo Nome */}
                <div>
                  <label
                    htmlFor="contato-nome"
                    className="block text-xs font-bold uppercase tracking-wider text-[#1F2937] mb-1.5"
                  >
                    Seu nome ou da empresa *
                  </label>
                  <input
                    type="text"
                    id="contato-nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    placeholder="Ex.: Carlos Eduardo"
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#1F2937] placeholder:text-[#6B7280]/60 focus:outline-none focus:border-[#0B5ED7] focus:ring-2 focus:ring-[#0B5ED7]/20 transition-colors ${
                      errors.nome ? 'border-red-500 bg-red-50/20' : 'border-[#E2E8F0]'
                    }`}
                    aria-required="true"
                    aria-invalid={!!errors.nome}
                    aria-describedby={errors.nome ? 'nome-error' : undefined}
                  />
                  {errors.nome && (
                    <p id="nome-error" className="mt-1 text-xs text-red-600 font-medium">
                      {errors.nome}
                    </p>
                  )}
                </div>

                {/* Campo Tipo de Negócio */}
                <div>
                  <label
                    htmlFor="contato-negocio"
                    className="block text-xs font-bold uppercase tracking-wider text-[#1F2937] mb-1.5"
                  >
                    Tipo de negócio (segmento) *
                  </label>
                  <select
                    id="contato-negocio"
                    name="negocio"
                    value={formData.negocio}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#1F2937] focus:outline-none focus:border-[#0B5ED7] focus:ring-2 focus:ring-[#0B5ED7]/20 transition-colors ${
                      errors.negocio ? 'border-red-500 bg-red-50/20' : 'border-[#E2E8F0]'
                    }`}
                    aria-required="true"
                    aria-invalid={!!errors.negocio}
                    aria-describedby={errors.negocio ? 'negocio-error' : undefined}
                  >
                    <option value="">Selecione o segmento do seu negócio</option>
                    <option value="Alimentação (Restaurante / Bar / Pizzaria / Lanchonete)">
                      Alimentação (Restaurante, Bar, Pizzaria, Lanchonete)
                    </option>
                    <option value="Automotivo (Oficina Mecânica / Autopeças)">
                      Automotivo (Oficina Mecânica, Autopeças)
                    </option>
                    <option value="Comércio (Loja / Varejo / Mercado)">
                      Comércio (Loja, Varejo, Mercado)
                    </option>
                    <option value="Distribuição (Distribuidora)">
                      Distribuição (Distribuidora)
                    </option>
                    <option value="Prestação de Serviços / MEI">
                      Prestação de Serviços / MEI
                    </option>
                    <option value="Outro segmento">Outro segmento</option>
                  </select>
                  {errors.negocio && (
                    <p id="negocio-error" className="mt-1 text-xs text-red-600 font-medium">
                      {errors.negocio}
                    </p>
                  )}
                </div>

                {/* Campo Solução de Interesse */}
                <div>
                  <label
                    htmlFor="contato-interesse"
                    className="block text-xs font-bold uppercase tracking-wider text-[#1F2937] mb-1.5"
                  >
                    Interesse principal *
                  </label>
                  <select
                    id="contato-interesse"
                    name="interesse"
                    value={formData.interesse}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#1F2937] focus:outline-none focus:border-[#0B5ED7] focus:ring-2 focus:ring-[#0B5ED7]/20 transition-colors ${
                      errors.interesse ? 'border-red-500 bg-red-50/20' : 'border-[#E2E8F0]'
                    }`}
                    aria-required="true"
                    aria-invalid={!!errors.interesse}
                    aria-describedby={errors.interesse ? 'interesse-error' : undefined}
                  >
                    <option value="">Selecione a solução que procura</option>
                    <option value="Sistema de Gestão (ERP)">Sistema de Gestão (ERP)</option>
                    <option value="Núcleo de Aceleração">Núcleo de Aceleração</option>
                    <option value="Os dois (Sistema e Acompanhamento)">
                      Os dois (Sistema e Acompanhamento)
                    </option>
                  </select>
                  {errors.interesse && (
                    <p id="interesse-error" className="mt-1 text-xs text-red-600 font-medium">
                      {errors.interesse}
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#0B5ED7] hover:bg-[#2E7DFF] transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
                  >
                    <span>Enviar e conversar no WhatsApp</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-[11px] text-center text-[#6B7280]">
                  Ao clicar, você será direcionado para o WhatsApp oficial com a mensagem pronta.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
