# Remediación de seguridad — 9 de septiembre de 2026

## Resultado

**0 vulnerabilidades reportadas** por `npm audit --json` y `npm audit --omit=dev`, tras actualizar Next.js y sus dependencias. La auditoría inicial tenía 9 paquetes afectados. Este resultado corresponde a los avisos conocidos del registro consultado; no es una certificación completa del sitio.

El usuario autorizó resolver los pendientes después de la entrega del rediseño. Se actualizaron dependencias y se aplicaron protecciones en el código local, sin despliegue público.

## Versiones comprobadas

| Paquete | Antes | Ahora |
| --- | --- | --- |
| next | 16.2.4 | 16.3.4 |
| eslint-config-next | 16.2.4 | 16.3.4 |
| @babel/core | 7.29.0 | 7.29.7 |
| baseline-browser-mapping | 2.10.19 | 2.11.21 |
| brace-expansion (raíz) | 1.1.14 | 1.1.18 |
| browserslist | 4.28.2 | 4.28.9 |
| js-yaml | 4.1.1 | 4.3.2 |
| nanoid (raíz) | 3.3.11 | 3.3.18 |
| postcss (raíz) | 8.5.10 | 8.5.23 |
| sharp | 0.34.5 | 0.35.4 |

Se mantuvieron React/React DOM 19.2.4 y las restricciones declaradas del resto de dependencias directas. El lockfile también actualiza dependencias internas. No se usó `--force` ni se añadieron overrides.

## Protecciones implementadas

En `next.config.ts`:

- `X-Content-Type-Options: nosniff`.
- `X-Frame-Options: DENY` y CSP `frame-ancestors 'none'`: impiden incrustar esta landing en otro sitio.
- `Referrer-Policy: strict-origin-when-cross-origin`.
- `Permissions-Policy`: cámara, micrófono y geolocalización deshabilitados.
- Se eliminó `X-Powered-By`.
- El optimizador solo acepta `/images/**` sin query strings; sigue rechazando imágenes remotas.
- CSP aplicada: recursos del propio origen, objetos y frames bloqueados, `base-uri 'none'`, formularios al propio origen. Desarrollo permite eval y WebSocket local; producción no los permite.

### Alcance de CSP

Se eligió la variante sin nonces documentada por la versión instalada de Next para conservar las seis páginas prerenderizadas. Los scripts de hidratación y estilos inline siguen permitidos, por lo que **no se presenta esta política como protección completa contra XSS**. Restringe orígenes, conexiones, objetos e incrustación.

El plan inicial contemplaba probar una CSP estricta en report-only. Se implementó en su lugar una política base compatible y aplicada; una política estricta requiere validar hidratación en navegador y elegir entre renderizado dinámico con nonces o hashes por compilación. No se cambió la arquitectura de la landing para imponerla sin esa verificación.

HSTS y redirección HTTPS se reservan al despliegue una vez conocido el dominio y sus subdominios. No se aplican sobre la vista HTTP local.

## Verificación

- `npm run lint`: código 0.
- `npm test`: 6/6 pruebas aprobadas.
- `npm run build`: código 0 en Next 16.3.4, incluida comprobación TypeScript.
- `npm run test:security`: 3/3 pruebas aprobadas contra `next start` en loopback.
- Todas las rutas de negocio: HTTP 200, un `main` y un `h1`; portada conserva ocho secciones y video sin descarga automática en su HTML inicial.
- Cabeceras comprobadas en las seis rutas y la respuesta 404.
- Optimizador: imagen local permitida devuelve 200; `/contacto`, query inesperada y origen remoto devuelven 400.
- `git diff --check` con reconocimiento CRLF: sin errores.

Los tests HTTP verifican las respuestas del servidor; no ejecutan JavaScript ni sustituyen la comprobación de UI en un navegador.

## Reproducir

```powershell
npm audit
npm audit --omit=dev
npm run lint
npm test
npm run build
npm run start -- --hostname 127.0.0.1 --port 3100
```

En una segunda terminal, con el servidor de producción activo:

```powershell
npm run test:security
```

Vista local: http://127.0.0.1:3100.

## Recuperación

Antes de la actualización se copiaron `package.json`, `package-lock.json` y `next.config.ts` a:

`C:\Users\sebas\AppData\Local\Temp\igohez-security-44734f781eaf40c3972d0df5e4b5d6b7`

La copia conserva cambios anteriores del usuario que no están en HEAD. Para una recuperación diagnóstica, restaurar únicamente esos archivos desde esa copia y ejecutar `npm ci`; la versión anterior es vulnerable y no debe publicarse. La copia temporal puede ser eliminada por la limpieza del sistema. No se restauró ni se borró ningún archivo del usuario.

## Pendientes externos

- Navegador: inventario vacío y `getBrowser` devuelve `No browser is available`. Se solicitó conectar uno. Pendientes inspección visual, interacciones y Lighthouse; no hay puntuaciones nuevas.
- Hosting: URL pública y acceso necesarios para revisar TLS, CDN, cabeceras efectivas y configuración de producción. Cambios todavía locales.
- Del informe original siguen pendientes la validación comercial de cifras/reseñas, el aviso aprobado de privacidad y, si se quiere envío desde servidor, un proveedor de correo. El contacto actual prepara un correo y no simula entrega.
