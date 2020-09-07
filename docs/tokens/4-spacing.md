---
pageTitle: Spacing Tokens
---

On of the most common headaches of writing CSS scale is to keep consistent
spacing across all your components.

und-css let’s you manage your spacing sizes as – you guessed it by now – named
spacing sizes.

## Base spacing size
By default the base spacing size is set to `1rem`. You will probably want to
keep this value as it’s a good idea to relate your spacing to your main copy
font size.

```scss
$layout-spacing--default: 1rem; // Available as var(--layout-spacing--default)
```

## Named spacing
As with colors, you can also provide a map of common spacing sizes as named
spacings.

```scss
$layout-spacing--variants: (
  flush: 0,                               // var(--layout-spacing--flush)
  tiny: $layout-spacing--default * 0.25,  // var(--layout-spacing--tiny)
  small: $layout-spacing--default * 0.5,  // var(--layout-spacing--small)
  medium: $layout-spacing--default,       // var(--layout-spacing--medium)
  …
);
```

Named spaces are exposed globally as `var(--layout-spacing--{{name}})`, as shown in the
comments above.
