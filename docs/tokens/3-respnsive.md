---
pageTitle: Responsive Tokens
---

To make your live with various breakpoints easier und-css allows you to keep
track of your breakpoints. The settings offer you two variables to set.

## Biggest Screen
Typically this will be the width of your biggest breakpoint. Und-css needs this
information to handle the fluid scaling of your text-sizes correctly. This value
is directly passed to RFF (the library used for fluid text scaling). See the
[RFS documentation](https://github.com/twbs/rfs) for more information.

```scss
$responsive--biggest-screen: 1400px;
```

## Breakpoints
und-css allows you the add as many widths as you like as named breakpoints. The
width provided for a named breakpoint is the min-width for this breakpoint. As
und-css seeks to encourage [intrinsic
layouts](https://www.youtube.com/watch?v=AMPKmh98XLY) breakpoints are kept as
simple as possible.

```scss
$responsive--breakpoints: (
  sm: 520px,
  md: 920px,
  lg: $responsive--biggest-screen
);
```

As you currently cannot use CSS custom properties in media queries we have to
rely on SCSS to access the breakpoints in our own styles.

```scss
@include respond-to(md) {
  // Styles you want to apply above 920px viewport width
}
```

Named breakpoints are also used to generate responsive variants of your
utilities.

```html
<aside class="md:u-w-8/12">
  <!-- this will 66.6666% wide on viewports bigger than 920px -->
```
