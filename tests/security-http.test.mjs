import test from 'node:test';
import assert from 'node:assert/strict';

// Run against `next start`, never next dev: development intentionally needs eval.
const origin = 'http://127.0.0.1:3100';

test('all public pages serve production security headers and valid HTML', async () => {
  for (const path of ['/', '/nosotros', '/servicios', '/productos', '/proyectos', '/contacto']) {
    const response = await fetch(origin + path);
    assert.equal(response.status, 200, path);
    assert.equal(response.headers.get('x-powered-by'), null, path);
    assert.equal(response.headers.get('x-content-type-options'), 'nosniff', path);
    assert.equal(response.headers.get('x-frame-options'), 'DENY', path);
    assert.equal(response.headers.get('referrer-policy'), 'strict-origin-when-cross-origin', path);
    assert.equal(response.headers.get('permissions-policy'), 'camera=(), microphone=(), geolocation=()', path);
    const csp = response.headers.get('content-security-policy');
    assert.ok(csp, path);
    for (const directive of ["default-src 'self'", "object-src 'none'", "frame-ancestors 'none'", "base-uri 'none'", "connect-src 'self'", "form-action 'self'"]) assert.ok(csp.includes(directive), path + ': ' + directive);
    assert.ok(!csp.includes('unsafe-eval'), path);
    assert.ok(!csp.includes('ws://'), path);
    const html = await response.text();
    assert.equal((html.match(/<main[ >]/g) || []).length, 1, path);
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1, path);
    if (path === '/') {
      assert.equal((html.match(/<section[ >]/g) || []).length, 8);
      assert.doesNotMatch(html.match(/<video[^>]*>/)?.[0] || '', /\bsrc=|\bautoplay\b/i);
    }
  }
});

test('optimizer accepts approved images and refuses other local paths', async () => {
  const approved = await fetch(origin + '/_next/image?url=%2Fimages%2Ffondo-inicio.jpeg&w=640&q=75');
  assert.equal(approved.status, 200);
  assert.match(approved.headers.get('content-type'), /^image\//);
  await approved.arrayBuffer();
  for (const source of ['/contacto', '/images/fondo-inicio.jpeg?unexpected=1', 'https://example.com/image.jpg']) {
    const blocked = await fetch(origin + '/_next/image?url=' + encodeURIComponent(source) + '&w=640&q=75');
    assert.equal(blocked.status, 400, source);
    await blocked.text();
  }
});

test('missing routes return a protected 404', async () => {
  const response = await fetch(origin + '/auditoria-ruta-inexistente');
  assert.equal(response.status, 404);
  assert.equal(response.headers.get('x-content-type-options'), 'nosniff');
  assert.equal(response.headers.get('x-frame-options'), 'DENY');
  await response.text();
});
