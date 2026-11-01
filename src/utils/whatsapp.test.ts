import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildWhatsAppLink,
  WHATSAPP_MESSAGES,
  validateContactForm,
  EWS_PHONE_RAW,
} from './whatsapp';

test('buildWhatsAppLink generates valid wa.me link with encoded text', () => {
  const message = 'Olá! Vim pelo site da EWS Gestor.';
  const link = buildWhatsAppLink(message);
  assert.equal(
    link,
    `https://wa.me/${EWS_PHONE_RAW}?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20EWS%20Gestor.`
  );
});

test('buildWhatsAppLink formats segmento message correctly', () => {
  const msg = WHATSAPP_MESSAGES.segmento('oficina mecânica');
  const link = buildWhatsAppLink(msg);
  assert.match(link, /wa\.me\/5518991469679\?text=/);
  assert.ok(link.includes(encodeURIComponent('oficina mecânica')));
});

test('buildWhatsAppLink formats formulario message correctly', () => {
  const msg = WHATSAPP_MESSAGES.formulario('Carlos Silva', 'Restaurante', 'Sistema de Gestão');
  assert.equal(
    msg,
    'Olá! Meu nome é Carlos Silva. Tenho Restaurante e tenho interesse em Sistema de Gestão. Vim pelo site da EWS Gestor e gostaria de agendar uma apresentação.'
  );
});

test('validateContactForm catches missing fields', () => {
  const invalidResult = validateContactForm({
    nome: '',
    negocio: '',
    interesse: '',
  });

  assert.equal(invalidResult.isValid, false);
  assert.ok(invalidResult.errors.nome);
  assert.ok(invalidResult.errors.negocio);
  assert.ok(invalidResult.errors.interesse);
});

test('validateContactForm passes valid inputs', () => {
  const validResult = validateContactForm({
    nome: 'Carlos',
    negocio: 'Comércio',
    interesse: 'Os dois',
  });

  assert.equal(validResult.isValid, true);
  assert.equal(Object.keys(validResult.errors).length, 0);
});
