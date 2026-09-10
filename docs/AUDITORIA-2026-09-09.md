# Auditoría de Igohez Piscinas

> **Estado tras la remediación:** Next.js actualizado a 16.3.4, auditorías npm completa y de producción con 0 vulnerabilidades, cabeceras de seguridad y restricción del optimizador implementadas. SEC-01 y SEC-02 resueltos en dependencias locales; SEC-03 implementado y comprobado por HTTP, pendiente revisión del hosting. Ver `docs/REMEDIACION-SEGURIDAD-2026-09-09.md`. Los hallazgos y versiones siguientes documentan el estado inicial.

Fecha: 9 de septiembre de 2026. Alcance: seis rutas, componentes, contenido, configuración, dependencias y recursos locales. Revisión no destructiva; no se realizaron ataques ni se accedió al hosting.

## Resumen

La base usa Next.js 16.2.4, React 19.2.4, Tailwind 4 y componentes con datos locales. No se encontraron API propias, Server Actions, autenticación, base de datos ni pagos. La prioridad técnica es actualizar dependencias; la prioridad comercial es corregir la confirmación ficticia del formulario.

`npm audit --json` consultado el 09/09/2026 reportó **9 paquetes afectados: 1 crítico, 6 altos, 1 moderado y 1 bajo**. Es un recuento de paquetes, no de ataques confirmados ni de nueve vulnerabilidades explotables desde esta landing.

## Hallazgos y acciones

| ID | Prioridad | Evidencia inicial | Impacto y acción |
| --- | --- | --- | --- |
| SEC-01 | P0 / crítica condicionada al despliegue | `package.json`: Next 16.2.4. npm propone 16.3.4. | Avisos críticos de ejecución remota en servidores Windows y procesamiento AVIF. Actualizar Next y eslint-config-next coordinadamente y validar la compilación. No publicar esta versión en un servidor Windows expuesto. |
| SEC-02 | P1 | npm: brace-expansion, browserslist, js-yaml, nanoid, postcss y sharp con severidad alta; baseline-browser-mapping moderada; @babel/core baja. | Renovar dependencias transitivas dentro de versiones compatibles; separar dependencias de producción y herramientas. No equivale a una explotación remota demostrada en esta aplicación. |
| UX-01 | P1 | `app/contacto/page.tsx`: `setTimeout(1500)` muestra éxito y vacía campos; no existe petición de red. | Se pierden oportunidades comerciales. Sustituir la simulación por un borrador explícito de correo; conservar datos y ofrecer teléfono. Un backend real requiere proveedor y pruebas de entrega. |
| UX-02 | P1 | Servicios enlaza a `?servicio=...`; contacto solo lee `producto`. | Se pierde el contexto de la cotización. Leer ambos parámetros, limitar longitud y conservar la selección. |
| CONTENT-01 | P1 | `lib/home-content.ts`: 15+ años, 1.2k+, 99.9%, atención 24/7; `app/nosotros/page.tsx`: inicio en 2022. | Afirmaciones sin respaldo adjunto. Confirmar si experiencia personal y antigüedad de empresa son distintas. Sustituir cifras solo con datos aprobados por el negocio. |
| CONTENT-02 | P1 | Testimonios y proyectos de Valle de Bravo, San Pedro Garza, CDMX y Cuernavaca; contacto ofrece BCS. | Validar autenticidad, autorización de testimonios, propiedad de imágenes y cobertura. No asumir que son falsos ni inventar testimonios nuevos. |
| CONTENT-03 | P1 | Beneficios promete desinfección total sin daño a ojos/piel; metodología dice libre de bacterias. | Revisar promesas absolutas y certificaciones con responsable técnico. Preferir descripción del procedimiento y resultados medidos. |
| SEC-03 | P2 | `next.config.ts` sin configuración de headers. | No hay política de seguridad explícita en el repositorio. Verificar headers del hosting antes de afirmar que faltan en producción. Diseñar CSP compatible con scripts de Next; añadir nosniff, Referrer-Policy, protección de framing y Permissions-Policy. |
| PRIV-01 | P1 antes de captación real | Formulario solicita nombre, correo, teléfono y mensaje; no hay aviso de privacidad enlazado. | El negocio debe aportar identidad del responsable, finalidades, conservación y canal de derechos. La revisión no certifica cumplimiento jurídico. No generar un aviso ficticio ni consentimiento para cookies inexistentes. |
| UI-01 | P2 | Hero genérico, acciones pequeñas a la derecha y sin cobertura local en primera vista. | Composición editorial con fotografía amplia, titular orientado al beneficio, alcance local y CTA de cotización. |
| UI-02 | P2 | CSS contiene etiquetas de 10–12 px, tarjetas repetidas y muchos radios de 20 px. | Subir legibilidad, definir jerarquía tipográfica y variar composición sin introducir librerías. |
| A11Y-01 | P2 | Menú móvil absoluto sin límite de altura; foco global azul en superficies azules. | Acotar altura al viewport, permitir desplazamiento del menú y usar foco con doble contraste. Verificar teclado, zoom y orientación horizontal. |
| A11Y-02 | P2 | Formulario exige teléfono de 10 dígitos, rechaza +52, guiones y paréntesis habituales. | Normalizar formatos mexicanos y mostrar errores por campo más resumen enlazado. Indicar campos obligatorios y conservar valores al preparar el correo. |
| A11Y-03 | P2 | `.stars` y `.founder-monogram` usan `aria-label` en div genérico; el reporte anterior señala las estrellas. | Asignar semántica de imagen a los grupos gráficos con etiqueta. Verificar nuevamente con lector de pantalla y auditor automático. |
| PERF-01 | P2 | `video-hero.mp4`: 5,030,560 bytes; el observador reproduce automáticamente al entrar en vista. | Eliminar descarga/reproducción automática de portada, mostrar imagen optimizada y cargar video a petición. En servicios conservar reproducción al entrar en vista y respetar movimiento reducido. |
| SEO-01 | P2 | Solo hay metadata genérica en layout; sin sitemap, canonical, OG ni robots propios. | Incorporar títulos por ruta y social preview; dominio canónico y sitemap después de confirmar dominio público. La ausencia de robots no impide por sí misma indexación. |
| ENG-01 | P2 | No existe suite ni script de pruebas; páginas muy compactas y estilos mixtos. | Añadir regresiones del flujo de contacto; lint, TypeScript, build y revisión de rutas. Evitar reescritura general del código. |

## Seguridad: aplicabilidad y límites

- No se localizaron `dangerouslySetInnerHTML`, `eval`, escrituras a DOM crudo, consultas SQL ni secretos incrustados en `app`, `components`, `lib` y configuración revisada. React trata el parámetro de producto como texto. Esto no es un escaneo exhaustivo del historial Git ni del hosting.
- La ausencia de autenticación es coherente con una landing pública; no constituye por sí misma un fallo. No corresponden pruebas de roles o IDOR sin recursos privados.
- Avisos de bypass de middleware, Server Actions, rewrites y CSP nonces requieren funcionalidades/configuraciones que no aparecen en este código. La exposición de componentes internos de Next debe reevaluarse tras actualizar.
- No hay subida de archivos ni imágenes remotas habilitadas. Esto reduce los caminos observados hacia el procesamiento de imágenes maliciosas; no sustituye el parche.
- No se verificaron TLS, CDN, HSTS, WAF, logs, backups ni cabeceras reales de producción. No se proporcionó URL de despliegue.

Fuentes del mantenedor: [RCE en Windows](https://github.com/vercel/next.js/security/advisories/GHSA-p293-qw3h-jr36), [RCE con AVIF](https://github.com/vercel/next.js/security/advisories/GHSA-2xp9-vwfh-vxw4), [avisos de Next](https://github.com/vercel/next.js/security/advisories). El rango afectado informado por npm para ambos avisos críticos en Next 16 es `>=16.0.0 <16.3.3`; la propuesta agregada de actualización es 16.3.4. Verificar avisos nuevamente al ejecutar el plan.

## Rendimiento y validación visual

El reporte local de Lighthouse es del **04/09/2026**, anterior a esta intervención: LCP 4.4 s, incidencias de contraste y atributos ARIA. No describe necesariamente el código actual y no se usa como medición posterior.

No hay navegador disponible en la sesión: inventario vacío y apertura de navegador integrada rechazada como no disponible. Por ello no se afirma validación visual, cumplimiento WCAG completo ni nueva puntuación Lighthouse. Pendiente revisar 375, 768, 1024 y 1440 px, tema claro/oscuro, zoom 200 %, teclado y movimiento reducido.

## Intervención solicitada

La mejora de UI/UX utiliza `redesign-existing-projects` y la guía de `ui-ux-pro-max`, con organización y verificación de Superpowers. Se preservan las seis rutas, ocho secciones de inicio y contenido comercial preexistente. El buscador Python de UI/UX no pudo ejecutarse; se aplicó su guía de referencia. Se trabaja sobre las modificaciones previas del usuario, sin revertirlas.

La actualización de dependencias, configuración del hosting, integración de correo y aprobación editorial quedan como remediaciones técnicas/comerciales separadas. Ver el plan y el registro de validación para distinguir implementación de pendientes.
