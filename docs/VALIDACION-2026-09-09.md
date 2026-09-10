# Validación de la intervención

> **Actualización posterior:** las dependencias ya se corrigieron y la compilación pasó en Next 16.3.4. Ahora hay 0 avisos npm y 9 pruebas aprobadas (6 de contacto + 3 HTTP de seguridad). La referencia a dependencias sin actualizar más abajo describe la primera entrega; queda sustituida por `docs/REMEDIACION-SEGURIDAD-2026-09-09.md`. La limitación de navegador sigue vigente.

## Comprobaciones realizadas

- `npm run lint`: código 0, sin incidencias.
- `npx tsc --noEmit`: código 0.
- `npm run build`: código 0, seis páginas de negocio prerenderizadas, además de icono y 404. Se necesitó acceso a Google Fonts para la fuente Manrope existente; el primer intento restringido falló por red, no por código.
- `node --experimental-strip-types --test tests/contact.test.mjs`: 6 pruebas aprobadas. Se verificó primero que fallaran al no existir el módulo, después pasaron con la implementación. Node 22 informa que el soporte de eliminación de tipos es experimental.
- `git diff --check` con reconocimiento de CRLF: sin errores. Git informa normalización LF/CRLF; no se reescribieron archivos ajenos para silenciar avisos.
- Servidor local de producción en `127.0.0.1:3100`: HTTP 200 en `/`, `/nosotros`, `/servicios`, `/productos`, `/proyectos`, `/contacto`, además de URLs de contacto con producto y servicio. Un `main` y un `h1` por ruta.
- Ruta inexistente: HTTP 404.
- 20 enlaces internos únicos: sin fallos HTTP. 26 referencias de imágenes/videos: todos los archivos existen. Optimizador de portada a 640 px: HTTP 200, JPEG de 34,334 bytes (cliente HTTP sin negociación WebP).
- HTML de inicio: ocho secciones; video sin `src`, `preload="none"` y sin atributo de reproducción automática. La reproducción depende de la interacción con el botón.
- Contraste calculado con luminancia sRGB para texto principal, secundario y acento sobre cuatro superficies, más texto de botones: mínimo **4.94:1** en claro y **5.90:1** en oscuro. Botón principal: **6.70:1** en claro y **8.03:1** en oscuro. Cálculo de tokens sólidos: no incluye superposiciones, frames de video ni estados transitorios de animación.

## Lo implementado

- Portada editorial asimétrica, ubicación visible, cotización destacada, fotografía existente y video bajo demanda.
- Paleta cálida, énfasis serif, espaciado y jerarquía, cierre/footer rediseñado y campos más legibles.
- Menú limitado a la altura visible, cierre al salir el foco, foco de doble contraste y roles de imagen para estrellas y monograma.
- Contacto conserva producto/servicio, acepta formatos mexicanos con +52, valida límites y errores por campo con resumen enfocable.
- Preparación explícita de un borrador de correo; los datos no se borran ni se afirma recepción. El usuario debe abrir su correo y enviar desde allí.

## Pendientes y límites

- **Dependencias vulnerables sin actualizar:** npm reporta 9 paquetes afectados, incluyendo Next crítico. Se entregó plan técnico; no se migraron dependencias como parte del rediseño. Esta intervención no acredita seguridad de producción.
- No se verificó el hosting público. En el servidor local se observa `X-Powered-By: Next.js` y no aparecen CSP ni las cabeceras propuestas; el proveedor podría aplicar otras políticas en producción.
- No se envió ningún correo de prueba ni se validó la existencia/entrega del buzón. La acción de abrir correo requiere una aplicación configurada por el visitante.
- Sin navegador conectado: pendientes capturas, revisión del layout en 375/768/1024/1440 px, zoom, filtros interactivos, lectura con tecnología asistiva, teclado, movimiento reducido y video en ejecución.
- El reporte Lighthouse del 04/09 es histórico: rendimiento 85, accesibilidad 92, prácticas 100, SEO 100, LCP 4.4 s. No hay medición Lighthouse posterior; no se atribuyen mejoras de puntuación.
- Cambios previos del usuario conservados; sin commit, push ni despliegue público.
- La revisión independiente prevista por `requesting-code-review` no produjo dictamen por límite de uso del agente. Se hizo revisión directa y se corrigió la cancelación de carga del video para que una pausa intencional no se convierta en error permanente.

## Reproducción

```powershell
npm run lint
node --experimental-strip-types --test tests/contact.test.mjs
npx tsc --noEmit
npm run build
npm run start -- --hostname 127.0.0.1 --port 3100
```

Abrir el servidor local para revisar visualmente. Antes de publicar, ejecutar la remediación P0 del plan y confirmar los datos comerciales.
