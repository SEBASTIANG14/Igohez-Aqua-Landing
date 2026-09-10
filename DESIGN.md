# Igohez Piscinas: dirección visual

## Actualización — 9 de septiembre de 2026

La intervención solicitada evoluciona la landing hacia una dirección editorial costera. Esta sección sustituye las decisiones visuales anteriores cuando difieran; se conserva el resto como contexto del trabajo previo.

- Fondo cálido `#faf9f5`, texto `#173b43`, acento `#176473`, superficie secundaria `#f0f0e9`. Tema oscuro existente conservado.
- Manrope para lectura y Georgia cursiva para énfasis editorial: sin fuente ni librería adicional.
- Portada asimétrica con fotografía existente, propuesta de valor y cobertura BCS; cotización como acción principal. Video solicitado por el visitante, sin descarga automática en inicio.
- Radios de 6 px en controles, 12 px en paneles y esquinas amplias solo en fotografías principales.
- Ocho secciones de inicio conservadas. Cifras y reseñas preexistentes requieren validación comercial, documentada en `docs/AUDITORIA-2026-09-09.md`.
- Contacto prepara un borrador para abrir en el correo del visitante; no afirma envío ni recepción. Se conserva contexto de producto/servicio y contenido del formulario.
- Navegación móvil acotada al viewport, foco de doble contraste y tratamiento semántico de estrellas/monogramas.
- Validación de código y compilación separadas de revisión visual: no hubo navegador disponible en esta sesión.

Rediseño visual completo sobre arquitectura y contenido existentes. Se conservan seis rutas, nombres de navegación, ocho secciones de inicio y su orden, productos, proyectos, servicios, datos de contacto y campos del formulario.

## Auditoría

- Base anterior: Montserrat, azul #3b82f6, marino #03045e, radios de 32-40 px, sombras y paneles translúcidos repetidos.
- Portada sin h1, logotipo escalado fuera de su caja, navegación comprimida en tablet, cifras con contraste insuficiente.
- Tarjetas muy similares entre servicios, beneficios, proceso y testimonios; texto de 10-12 px frecuente.
- Productos recortados con object-cover; información de proyectos dependiente del hover; iconos dependientes de una fuente externa.
- Se mantienen título SEO, descripción, favicon y todas las URL. No hay eventos de analítica ni datos estructurados configurados.
- El formulario original simula el envío; no existe una integración de correo. El rediseño no configura servicios externos.
- Cifras, testimonios y ubicaciones son contenido previo, conservado por alcance. La historia comienza en 2022 y la portada declara 15+ años: requieren revisión editorial independiente.

## Sistema

- DESIGN_VARIANCE: 6; MOTION_INTENSITY: 4; VISUAL_DENSITY: 3. Composición amplia y clara para una empresa de servicios local.
- CSS nativo con Tailwind v4 existente. Manrope, azul piscina, marino y superficies frías. Tokens semánticos con modo oscuro según sistema.
- Botones de radio completo, imágenes y paneles de 20 px, campos de 10 px. Sombras solo en navegación y elementos flotantes.
- Ocho secciones: portada panorámica, introducción editorial, especialidades en cuadrícula visual, beneficios abiertos, proceso conectado, cifras, testimonios y cierre fotográfico.
- Animaciones para entrada y respuesta al usuario; movimiento reducido elimina transformaciones y reproducción automática.
- Se conserva contenido del cliente donde las recomendaciones genéricas de taste sugieren acortar párrafos o quitar etiquetas. La preservación solicitada tiene prioridad.
- Capas: contenido 0; cabecera 30; menú 40; diálogos 50; enlace para saltar navegación 60.
