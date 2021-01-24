---
pageTitle: Cross Browser Compatibility
---

und-css is built to be future proof with modern browsers in mind. It makes heavy
use of modern CSS technologies such as custom properties and CSS calculations.

und-css makes no assumption about the browsers you want to target, as it is a
meta-framework, that you can use to build your own CSS on top. By default
und-css will not work in legacy browsers including IE11 and very old versions of
Edge. However, this can be fixed in your build step.

## Build Step Strategies
If you have good reason to target a legacy browser (maybe because you're
designing a website for a conservative german SME) you can transform your CSS
code to something that will work in legacy browsers. It might not have all the
sparkle, but it won't look broken either.

### Custom Properties
The biggest hurdle are CSS custom properties as these aren't natively supported
in IE11. To make things work, you need to do two things:

* You can either polyfill them using [IE 11 Custom Properties](https://github.com/nuxodin/ie11CustomProperties). Heads up: This does not seem to work with inline styles.
* You can transform your CSS using [PostCSS Preset Env](https://github.com/csstools/postcss-preset-env)

You could also look into [Post CSS
Variables](https://github.com/MadLittleMods/postcss-css-variables) and configure
your build step to generate and serve different bundles to modern and legacy
browsers.

### CSS Calculations
While CSS Calculations are generally supported by IE11, but there are some
issues with nested calculations. So using [PostCSS
calc](https://github.com/postcss/postcss-calc) might be a good idea if you need
full IE11 support.

## Compatibility of Objects
und-css' objects make use of modern CSS Features such as `flexbox` or `grid` to
create intrinsic and robust layouts. See the [object documentation](/objects/)
for more information on browser compatibility per object.
