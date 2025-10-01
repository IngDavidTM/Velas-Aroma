# Velas & Aroma – Arquitectura de páginas

## Rutas principales

- `/` – Inicio con hero, colecciones destacadas, beneficios, aromas disponibles, top ventas, banner de personalización, testimonios e Instagram.
- `/tienda` – Catálogo completo con filtros ilustrativos y ordenamiento.
- `/categoria/[slug]` – Vista por colección con banner y subfiltros contextuales.
- `/producto/[slug]` – Ficha de producto con galería, seleccionadores, acordeones y relacionados.
- `/servicios` – Servicios B2B/personalizados, formulario de brief y CTA.
- `/envios` – Información de cobertura, políticas y FAQ.
- `/pagos` – Métodos de pago y políticas de reembolso.
- `/nosotros` – Historia, beneficios de la cera de soya y CTA a showroom.
- `/contacto` – Formulario, enlaces directos, horario y mapa.
- `/carrito` – Resumen editable de productos y CTA a checkout.
- `/checkout` – Flujo de datos personales, envío, pago y resumen.

## Componentes reutilizables

- `HeroPrimary`, `CollectionRail`, `FeatureGrid`, `TagCloud`, `ProductGrid`, `Testimonials`, `InstagramFeed`, `CtaBanner`.
- `PageSection`, `SectionIntro`, `BorderPanel` para mantener el grid modular.
- `ThemeProvider` + `ThemeToggle` para estado global del modo oscuro.

## Datos centralizados (`src/data`)

- `site.ts` – Contacto, aromas, chips de servicios, FAQ.
- `collections.ts` – Colecciones disponibles y helper.
- `products.ts` – Modelo de producto según requerimientos y helpers.
- `services.ts` – Descripción de servicios.
- `testimonials.ts` – Citas de clientes.

## Pendientes para integración

- Conectar filtros/ordenamiento con backend o CMS.
- Reemplazar imágenes placeholder en `/public/images/...`.
- Agregar lógica real de carrito/checkout y pasarela de pagos.
- Generar metadatos dinámicos por categoría/producto.
- Incluir esquema `Product`, `Offer`, `LocalBusiness` y sitemap XML.
