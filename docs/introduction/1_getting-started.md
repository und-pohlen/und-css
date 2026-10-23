---
pageTitle: Getting Started
description: Get started using und-css in your own projects by installing it as a frontend dependency
---

## Quick Start

Install und-css as a dependency. It requires **Dart Sass** (`sass`), not `node-sass`.

```bash
yarn add -D @und-pohlen/und-css sass
```

```bash
npm install @und-pohlen/und-css sass --save-dev
```

und-css uses the Sass **module system** (`@use` / `@forward`). Settings must be
configured on the **first** load of the settings module, before you pull in the
framework styles.

### 1. Configure settings

Create a project settings file that forwards und-css settings with your theme
overrides:

```scss
// e.g. styles/_settings.scss
@forward '~@und-pohlen/und-css/src/settings/settings' with (
  $colors--named-colors: (
    'accent': #711c21,
    'muted': #ecedf1,
    'black': #000000,
    'white': #ffffff,
  ),
  $typography--default-font: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  $typography--ratio-min: 1.2,
  $typography--ratio-max: 1.2,
  $layout-spacing--default-min: 1rem,
  $layout-spacing--default-max: 1.5rem,
);
```

Use whatever Sass/webpack alias you already have (`~`, `includePaths`, etc.) so
the path resolves to the package under `node_modules`.

### 2. Load configured settings, then styles

In your main stylesheet, load the configured settings **first**, then the
und-css entry. Later `@use` of the same settings URL reuses that configured
instance—do not configure it twice.

```scss
// e.g. styles/index.scss
@use 'settings' as *;
@use '~@und-pohlen/und-css/src/styles' as *;

// your project styles…
```

`@use '@und-pohlen/und-css'` resolves to the package `main` (`src/_styles.scss`)
and is equivalent to the `src/styles` path above—as long as settings were already
configured in this compilation.

### 3. Mixins in component styles (optional)

If Vue/React SFCs or other partials need mixins (`respond-to`, etc.) without
pulling in the full CSS output, `@use` the tools after your configured settings:

```scss
@use 'settings' as *;
@use '~@und-pohlen/und-css/src/tools/math.tool' as *;
@use '~@und-pohlen/und-css/src/tools/fluid.tool' as *;
@use '~@und-pohlen/und-css/src/tools/responsive.tool' as *;
@use '~@und-pohlen/und-css/src/tools/utilities.tool' as *;
@use '~@und-pohlen/und-css/src/tools/visibility.tool' as *;
```

With loaders such as `sass-resources-loader` / `@nuxtjs/style-resources`, inject
that snippet **before** entry `@use` statements. Do **not** enable
`hoistUseStatements: true` if that would move the und-css styles `@use` above
your settings configuration—configuration only works on the first load.

### Design tokens as CSS variables

Configured tokens are emitted as CSS custom properties (e.g.
`var(--color--accent)`, `var(--layout-spacing--md)`,
`var(--typography-size--lg)`). Prefer those in components instead of `@extend`
across Sass modules—`@extend` does not work reliably across `@use` boundaries.

## Important Globals

To make life easier and more predictable und-css makes some assumptions about
your HTML markup and sets some opinionated styling defaults.

### HTML5 Doctype

und-css requires the HTML5 Doctype. Without it you might experience some weird
rendering issues.

```html
<!DOCTYPE html>
<html lang="en">
  ...
</html>
```

### Responsive Meta Tag

und-css provides responsive utility classes to make designing for _different
viewports_ easier. To ensure proper rendering and zooming for all devices, you
need to **add the responsive view meta tag** to your `<head>`.

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

### Box-sizing

For more logical spacing and size calculations in CSS, und-css switches the
global `box-sizing` value from `content-box` to `border-box`.

On rare occasions you therefore might want to reset this in your custom
component styles building on und-css.

```css
.c-my-component {
  box-sizing: content-box;
}
```
