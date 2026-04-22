# CONTENT REPLACEMENT PLAN — Vertex Hub

Esta guía describe paso a paso cómo reemplazar los contenidos placeholder por el copy y assets definitivos del proyecto.

---

## 1. Archivos de Contenido: Colección de Servicios

Los archivos de cada servicio se encuentran en:

```
src/content/services/
├── 01-ciberseguridad.md
├── 02-ingenieria-electrica.md
├── 03-seguridad-fisica.md
├── 04-infraestructura-it.md
├── 05-inteligencia-artificial.md
├── 06-higiene-seguridad.md
├── 07-consultoria-juridica.md
├── 08-consultoria-financiera.md
├── 09-marketing-industrial.md
├── 10-fintech.md
└── 11-vertex-academy.md
```

Cada archivo tiene el siguiente formato:

```md
---
title: "Nombre del Servicio"
order: 1
icon: "nombre-del-icono"
---

Descripción breve del servicio (1-3 oraciones).
```

### Cómo editar cada servicio

1. Abre el archivo `.md` correspondiente en tu editor de código.
2. En el **frontmatter** (entre los `---`), actualiza:
   - `title`: El nombre final del bloque de servicio.
   - `order`: El número de orden en que aparecerá en la grilla (1–11).
   - `icon`: El identificador del icono (ver sección 4 más abajo).
3. En el **cuerpo del archivo** (después del segundo `---`), escribe la descripción del servicio en **texto plano o Markdown**. Esta descripción aparecerá como subtexto en la tarjeta del servicio.

**Ejemplo de archivo completo:**

```md
---
title: "Ciberseguridad"
order: 1
icon: "shield-check"
---

Protección integral de activos digitales, auditorías de seguridad, respuesta ante incidentes y cumplimiento normativo para empresas e instituciones del sector público y privado.
```

---

## 2. Cómo Reemplazar el Copy de Texto en la Interfaz

Los textos estáticos (eslogan, descripciones del Hero, links del Navbar, etc.) se encuentran directamente en los componentes Astro:

| Texto                          | Archivo                              |
|-------------------------------|--------------------------------------|
| Eslogan Hero ("El centro…")   | `src/components/Hero.astro`          |
| Subtítulo Hero                | `src/components/Hero.astro`          |
| Links del Navbar              | `src/components/Navbar.astro`        |
| Encabezado de Servicios       | `src/components/ServicesGrid.astro`  |
| Descripción del Footer        | `src/components/Footer.astro`        |
| Email de contacto             | `src/components/Footer.astro`        |
| Links legales del Footer      | `src/components/Footer.astro`        |

Para editar, abre el componente correspondiente y busca el texto entre comillas o en etiquetas HTML.

---

## 3. Cómo Reemplazar el Logo

El logo placeholder actual se encuentra en:

```
public/logo-placeholder.png
```

**Requisitos del logo definitivo:**
- **Formato**: PNG con fondo transparente (recomendado) o SVG.
- **Dimensiones mínimas**: 1024 × 1024 px.
- **Nombre de archivo**: `logo-placeholder.png` (o actualiza las referencias en los componentes).

**Pasos:**

1. Exporta el logo final en formato PNG (1024×1024 px, fondo transparente).
2. Reemplaza el archivo `public/logo-placeholder.png` con tu nuevo logo manteniendo el mismo nombre. O bien:
3. Si cambias el nombre del archivo (ej: `logo-vertex.png`), actualiza las referencias en:
   - `src/components/Navbar.astro` → línea con `src="/logo-placeholder.png"`
   - `src/components/Footer.astro` → línea con `src="/logo-placeholder.png"`

**Opcional — Versión SVG:**

Si usas un logo en formato SVG, puedes referenciarlo directamente:

```astro
<!-- En Navbar.astro y Footer.astro, reemplaza el <img> por: -->
<img src="/logo.svg" alt="Vertex Hub Logo" width="40" height="40" class="h-10 w-10 object-contain" />
```

Y coloca el archivo `logo.svg` en la carpeta `public/`.

---

## 4. Cómo Ajustar la Iconografía

Los iconos son SVGs inline (estilo outlined de Heroicons) definidos en `src/components/ServicesGrid.astro` dentro del objeto `iconMap`.

### Iconos actuales asignados por servicio

| Servicio                                 | Icono actual (`icon` en frontmatter) |
|-----------------------------------------|--------------------------------------|
| Ciberseguridad                           | `shield-check`                       |
| Ingeniería Eléctrica y Eficiencia        | `bolt`                               |
| Seguridad Física y Videovigilancia       | `camera`                             |
| Infraestructura IT, Redes y Suministros  | `server`                             |
| Inteligencia Artificial y Desarrollo     | `cpu-chip`                           |
| Higiene, Seguridad y Medio Ambiente      | `leaf`                               |
| Consultoría Jurídica y Prop. Intelectual | `scale`                              |
| Consultoría Financiera y Capital         | `chart-bar`                          |
| Marketing Industrial y Vinculación       | `megaphone`                          |
| Soluciones Fintech y Pagos               | `credit-card`                        |
| Vertex Academy                           | `academic-cap`                       |

### Cómo cambiar un icono

**Opción A — Usar un icono de Heroicons:**

1. Ve a [heroicons.com](https://heroicons.com/) y elige un icono en estilo **Outline**.
2. Copia el SVG del icono.
3. Abre `src/components/ServicesGrid.astro`.
4. En el objeto `iconMap`, añade una nueva entrada con el nombre que elijas:

```ts
const iconMap: Record<string, string> = {
  // ... iconos existentes ...
  'mi-nuevo-icono': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><!-- path del SVG --></svg>`,
};
```

5. En el archivo `.md` del servicio correspondiente, actualiza el frontmatter:

```md
---
icon: "mi-nuevo-icono"
---
```

**Opción B — Cambiar el SVG directamente en iconMap:**

Si prefieres modificar el SVG de un icono existente, simplemente edita el valor correspondiente en el objeto `iconMap` en `src/components/ServicesGrid.astro`.

---

## 5. Colores y Estilos

Los colores están definidos en `tailwind.config.mjs`:

```js
colors: {
  'vertex-blue': {
    DEFAULT: '#0B1929',   // Fondo secciones
    light: '#112236',     // Fondo tarjetas
    dark: '#060F1A',      // Fondo oscuro / Navbar / Footer
  },
  'vertex-emerald': {
    DEFAULT: '#10B981',   // Acento principal (iconos, badges)
    light: '#34D399',     // Hover estados
    dark: '#059669',      // Variante oscura
  },
  'vertex-gold': {
    DEFAULT: '#B8860B',   // CTAs y énfasis premium
    light: '#D4A017',     // Hover de CTAs
    dark: '#8B6914',      // Variante oscura
  },
}
```

Para cambiar la paleta, edita estos valores en `tailwind.config.mjs`.

---

## 6. Build y Despliegue

Una vez realizados todos los cambios:

```bash
# Verificar que el sitio compila sin errores
npm run build

# Previsualizar el sitio localmente
npm run preview

# Para desarrollo con hot-reload
npm run dev
```

El sitio generado estará en la carpeta `dist/` y puede ser desplegado en cualquier hosting estático (Vercel, Netlify, Cloudflare Pages, etc.).
