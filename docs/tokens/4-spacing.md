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

## Spacing Ratio
By default und-css uses a ratio of 1.5 to calculate spacing sizes based on the
base spacing size. The ratio is used in a fibonacci fashion to calculate each
spacing value by mulitplying (or dividing) its adjacent value with the ratio.

The easiest way to change your spacing, is to change the spacing ratio. und-css
will then auto generate new named spacing from xxxxs to xxxxl for your.

```
$layout-spacing--ratio: 1.5;
```

## Default Spacings
By default und-css is set up to generate spacing-tokens ranging from xxxxs to
xxxxl based on the ratio and the base spacing size. Available default values
are:

| Spacing Name | Custom Property  | Spacing Value  | |
|---|---|---|---|
| xxxxs  | `--layout-spacing--xxxxs`  | `$layout-spacing--default / pow($layout-spacing--ratio, 5)` | <div class="u-bg-muted u-p-xxxxs"></div> |
| xxxs  | `--layout-spacing--xxxs`  | `$layout-spacing--default / pow($layout-spacing--ratio, 4)` | <div class="u-bg-muted u-p-xxxs"></div> |
| xxs  | `--layout-spacing--xxs`  | `$layout-spacing--default / pow($layout-spacing--ratio, 3)` | <div class="u-bg-muted u-p-xxs"></div> |
| xs  | `--layout-spacing--xxs`  | `$layout-spacing--default / pow($layout-spacing--ratio, 2)` | <div class="u-bg-muted u-p-xs"></div> |
| sm  | `--layout-spacing--sm`  | `$layout-spacing--default / $layout-spacing--ratio` | <div class="u-bg-muted u-p-sm"></div> |
| md  | `--layout-spacing--md`  | `$layout-spacing--default` | <div class="u-bg-muted u-p-md"></div> |
| lg  | `--layout-spacing--lg`  | `$layout-spacing--default * $layout-spacing--ratio` | <div class="u-bg-muted u-p-lg"></div> |
| xl  | `--layout-spacing--xl`  | `$layout-spacing--default * pow($layout-spacing--ratio, 2)` | <div class="u-bg-muted u-p-xl"></div> |
| xxl  | `--layout-spacing--xxl`  | `$layout-spacing--default * pow($layout-spacing--ratio, 3)` | <div class="u-bg-muted u-p-xxl"></div> |
| xxxl  | `--layout-spacing--xxxl`  | `$layout-spacing--default * pow($layout-spacing--ratio, 4)` | <div class="u-bg-muted u-p-xxxl"></div> |
| xxxxl  | `--layout-spacing--xxxxl`  | `$layout-spacing--default * pow($layout-spacing--ratio, 5)` | <div class="u-bg-muted u-p-xxxxl"></div> |

## Custom named spacings
If you want to create your custom spacing you can also defined the named spaces
yourself. As with colors, these are provided as a map of names and values.

```scss
$layout-spacing--variants: (
  flush: 0,                               // var(--layout-spacing--flush)
  tiny: $layout-spacing--default * 0.25,  // var(--layout-spacing--tiny)
  small: $layout-spacing--default * 0.5,  // var(--layout-spacing--small)
  medium: $layout-spacing--default,       // var(--layout-spacing--medium)
  …
);
```

Named spaces are exposed globally as `var(--layout-spacing--name)`, as shown in the
comments above.
