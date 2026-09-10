import test from 'node:test';
import assert from 'node:assert/strict';
import { initialContact, validateContact, contactMailto } from '../lib/contact.ts';

const valid = { nombre: 'Persona de prueba', correo: 'prueba@example.com', telefono: '6131093611', interes: 'servicio', mensaje: 'Cotización de mantenimiento' };

test('requires the four contact fields', () => {
  assert.deepEqual(Object.keys(validateContact(initialContact(null, null))).sort(), ['correo', 'mensaje', 'nombre', 'telefono']);
});
test('accepts common Mexican phone formatting', () => {
  for (const telefono of ['6131093611', '(613) 109-3611', '+52 613 109 3611']) assert.deepEqual(validateContact({ ...valid, telefono }), {});
});
test('rejects malformed email and phone', () => {
  assert.ok(validateContact({ ...valid, correo: 'a@b.c extra' }).correo);
  assert.ok(validateContact({ ...valid, telefono: 'call6131093611' }).telefono);
  assert.ok(validateContact({ ...valid, telefono: '123' }).telefono);
});
test('preserves selected service and gives product precedence', () => {
  assert.match(initialContact(null, 'Mantenimiento semanal').mensaje, /Mantenimiento semanal/);
  const product = initialContact('Bomba & filtro', 'Limpieza');
  assert.equal(product.interes, 'producto');
  assert.match(product.mensaje, /Bomba & filtro/);
  assert.doesNotMatch(product.mensaje, /Limpieza/);
});
test('bounds query and form text', () => {
  assert.ok(initialContact('x'.repeat(10000), null).mensaje.length < 400);
  assert.ok(validateContact({ ...valid, mensaje: 'x'.repeat(2001) }).mensaje);
});
test('mailto keeps fixed recipient and safely encodes message content', () => {
  const data = { ...valid, mensaje: 'Piscina & filtro? #1\nBcc: nadie@example.com' };
  const link = new URL(contactMailto(data));
  assert.equal(link.pathname, 'contacto@igohezaqua.com');
  assert.equal(link.searchParams.has('bcc'), false);
  assert.ok(link.searchParams.get('body').includes(data.mensaje));
  assert.deepEqual(data, { ...valid, mensaje: 'Piscina & filtro? #1\nBcc: nadie@example.com' });
});
