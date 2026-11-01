/**
 * Utilitários para formatação e geração de URLs de WhatsApp da EWS Gestor.
 * Segue estritamente as regras de comunicação sem promessas exageradas.
 */

export const EWS_PHONE_RAW = '5518991469679';
export const EWS_PHONE_FORMATTED = '+55 18 99146-9679';
export const EWS_EMAIL = 'contato@ewsgestor.com.br';
export const EWS_INSTAGRAM_HANDLE = '@ewsgestor';
export const EWS_INSTAGRAM_URL = 'https://instagram.com/ewsgestor';
export const EWS_DOMAIN = 'ewsgestor.com.br';

export const WHATSAPP_MESSAGES = {
  geral: 'Olá! Vim pelo site da EWS Gestor e gostaria de agendar uma apresentação.',
  sistema: 'Olá! Vim pelo site da EWS Gestor e quero conhecer o sistema de gestão. Podemos agendar uma demonstração?',
  nucleo: 'Olá! Vim pelo site da EWS Gestor e quero saber mais sobre o Núcleo de Aceleração.',
  flutuante: 'Olá! Vim pelo site da EWS Gestor e gostaria de tirar uma dúvida.',
  segmento: (segmento: string): string =>
    `Olá! Vim pelo site da EWS Gestor. Tenho ${segmento} e gostaria de saber como a EWS pode ajudar minha empresa.`,
  formulario: (nome: string, negocio: string, interesse: string): string =>
    `Olá! Meu nome é ${nome.trim()}. Tenho ${negocio.trim()} e tenho interesse em ${interesse.trim()}. Vim pelo site da EWS Gestor e gostaria de agendar uma apresentação.`,
};

/**
 * Gera o link direto wa.me com a mensagem codificada em URI.
 */
export function buildWhatsAppLink(message: string): string {
  const trimmed = message.trim();
  const encoded = encodeURIComponent(trimmed);
  return `https://wa.me/${EWS_PHONE_RAW}?text=${encoded}`;
}

/**
 * Validação do mini-formulário de contato rápido da EWS Gestor.
 */
export interface ContactFormData {
  nome: string;
  negocio: string;
  interesse: string;
}

export interface ContactFormErrors {
  nome?: string;
  negocio?: string;
  interesse?: string;
}

export function validateContactForm(data: ContactFormData): {
  isValid: boolean;
  errors: ContactFormErrors;
} {
  const errors: ContactFormErrors = {};

  if (!data.nome || data.nome.trim().length < 2) {
    errors.nome = 'Por favor, informe seu nome ou da sua empresa (mínimo 2 letras).';
  }

  if (!data.negocio || data.negocio.trim() === '') {
    errors.negocio = 'Por favor, selecione o segmento do seu negócio.';
  }

  if (!data.interesse || data.interesse.trim() === '') {
    errors.interesse = 'Por favor, selecione a solução de seu interesse.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
