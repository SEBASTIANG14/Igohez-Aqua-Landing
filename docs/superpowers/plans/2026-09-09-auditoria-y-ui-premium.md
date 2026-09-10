# Igohez: plan de auditoría y UI premium

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox syntax for tracking. La ejecución visual está solicitada por el usuario; la remediación de infraestructura se documenta por separado.

**Goal:** Mejorar la presentación y el contacto, con un plan verificable para los riesgos detectados.

**Architecture:** Conservar App Router y datos locales. Reutilizar componentes y assets. Aislar validación de contacto y construcción de borradores en una función pura; no simular entrega ni configurar proveedores externos.

**Tech Stack:** Next.js 16, React 19, Tailwind 4, CSS, Phosphor y Node test runner.

**Spec:** `docs/AUDITORIA-2026-09-09.md`, junto con `DESIGN.md` y la solicitud de rediseño premium.

## Restricciones

- Conservar cambios previos, seis rutas, contenido comercial y ocho secciones de inicio.
- Editorial costero: superficies cálidas, azul profundo, Manrope y serif de sistema para contraste; sin nueva dependencia visual.
- El usuario autorizó posteriormente resolver los pendientes: dependencias y protecciones locales implementadas. No se ha solicitado despliegue público.
- No inventar reseñas, cifras, certificaciones, datos legales o confirmaciones de entrega.
- No realizar commits de cambios previos del usuario.

## 1. Contacto claro y contextual — P1

Archivos: `lib/contact.ts`, `tests/contact.test.mjs`, `app/contacto/page.tsx`.

- [x] Probar validación vacía, correo inválido, teléfono nacional/internacional, parámetros acotados y codificación del mensaje.
- [x] Exponer `initialContact(product: string | null, service: string | null)`, `validateContact(data: ContactData)` y `contactMailto(data: ContactData)`.
- [x] Usar `initialContact` para precarga; `validateContact` devuelve errores por campo; `contactMailto` devuelve un URI `mailto:contacto@igohezaqua.com` con asunto y cuerpo codificados.
- [x] Al enviar el formulario válido, mostrar una revisión con enlace «Abrir mi correo»; no borrar datos, no mostrar recibido/enviado. Ofrecer correo directo y teléfono.
- [x] Ejecutar `node --experimental-strip-types --test tests/contact.test.mjs`.

## 2. Sistema visual y portada — P2

Archivos: `app/page.tsx`, `app/globals.css`, `components/PoolVideo.tsx`, `components/Navbar.tsx`, `components/Footer.tsx`.

- [x] Hero asimétrico: titular breve, descripción específica, BCS y CTA a `/contacto`.
- [x] Imagen de portada optimizada, video a petición y botón accesible. Los videos fuera de portada solo se cargan al acercarse a vista, salvo movimiento reducido.
- [x] Jerarquía de titulares, serif editorial, superficies cálidas, espaciado, indicadores de sección, tarjetas y footer más legibles.
- [x] Implementar foco de doble contraste, menú con altura limitada y objetivos táctiles amplios. Comprobación visual pendiente.
- [x] Conservar tema oscuro y preferencias de movimiento; compilar CSS en producción. Inspección en navegador pendiente.

## 3. Validación — P1

- [x] Ejecutar `npm run lint`, `npx tsc --noEmit` y `npm run build`.
- [x] Servir en loopback y verificar HTTP 200 en las seis rutas, 20 enlaces internos sin fallos, 26 assets presentes, imagen optimizada HTTP 200 y ruta inexistente 404.
- [ ] Navegador: escritorio/móvil, filtros, producto/servicio precargado, errores de contacto, edición tras preparar correo, Tab/Escape y controles de video. Si el entorno no ofrece navegador, consignar pendiente.
- [ ] Lighthouse móvil sobre build de producción: objetivo LCP ≤2.5 s, CLS ≤0.1 y sin fallos automáticos de accesibilidad; no declarar resultados sin medición.

## 4. Dependencias — P0, completado

Archivos: `package.json`, `package-lock.json`.

- [x] Registrar versiones instaladas y árbol antes de actualizar: `npm ls next react react-dom eslint-config-next`.
- [x] Actualizar coordinadamente Next y su configuración ESLint a la versión corregida disponible (npm propone 16.3.4 a la fecha):

```powershell
npm install --save-exact next@16.3.4
npm install --save-dev --save-exact eslint-config-next@16.3.4
npm audit fix
npm audit --omit=dev
npm audit
npm run lint
npm run build
```

- [x] Revisar el lockfile y las guías locales de la nueva versión. No se usó `--force` ni overrides.
- [x] Auditar: 0 avisos en auditoría completa y 0 en producción. No requiere excepciones.
- [x] Preparar recuperación: copia previa de manifests y configuración conservada en carpeta temporal documentada en el informe de remediación. No fue necesario restaurar.

## 5. Cabeceras y hosting — P2, código completado / hosting pendiente

Archivo: `next.config.ts`, configuración del proveedor.

- [ ] Consultar headers reales con `curl -I https://DOMINIO_CONFIRMADO` una vez que el negocio facilite el dominio.
- [x] Añadir y verificar por HTTP `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: DENY` y `Permissions-Policy: camera=(), microphone=(), geolocation=()`.
- [x] Aplicar CSP base compatible con prerenderizado según la guía de Next y restringir optimización a `/images/**`. No se afirma protección completa XSS: scripts/styles inline siguen permitidos. Decisión y límites en el informe de remediación.
- [ ] Validar CSP e hidratación en navegador y evaluar política estricta con nonces/hashes si se requiere.
- [ ] Activar HSTS solo tras confirmar HTTPS y alcance de subdominios. Configurar límites y logs en el proveedor; no exponer datos de formularios.

## 6. Captación, contenido y SEO — P1/P2, pendiente

Archivos: `app/contacto/page.tsx`, futura ruta de envío, `lib/home-content.ts`, `lib/proyectos.ts`, `app/layout.tsx`, metadata por ruta.

- [ ] Negocio: confirmar dominio, destinatario, proveedor de correo, responsable y aviso de privacidad, cobertura, horarios, cifras, certificaciones y reseñas autorizadas.
- [ ] Si se integra backend: validar servidor, limitar tamaño/frecuencia, proteger credenciales, validar origen, permitir reintento conservando datos y confirmar éxito solo con respuesta verificable del proveedor. Probar fallo, timeout, abuso y éxito.
- [ ] Después de validar contenido, corregir promesas absolutas y estadísticas, y usar fotografías propias en portafolio.
- [ ] Añadir títulos y descripciones únicos por ruta; generar sitemap, canonical y OG sobre dominio confirmado. No inventar dirección postal ni datos de negocio estructurados.

## Registro de implementación y verificación

Implementación visual y de contacto terminada en código. Dependencias resueltas, protecciones locales implementadas y 9 pruebas aprobadas. Consultar `docs/REMEDIACION-SEGURIDAD-2026-09-09.md`. Persisten la revisión visual/Lighthouse por falta de navegador y las tareas que necesitan dominio, hosting o datos comerciales. La revisión independiente solicitada por Superpowers falló por límite de uso; se realizó revisión directa del código, sin atribuirle aprobación de otro agente.
