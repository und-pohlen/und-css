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

As of version `0.2.0` breakpoints are designed to work mutually exclusive, as
this makes life with responsive utilities easier and prevents specificity
issues. This means that any breakpoint will cover the range from its given size
to 1px less than the breakpoint above.

By default und-css sets up three breakpoints for you: `sm`, `md` and `lg`. These
can be configured using the following variables in your `settings.scss`.

```scss
$responsive--small-screen: 400px; // will be mapped to sm ranging from 400 to 919
$responsive--medium-screen: 920px; // will be mapped to md ranging from 920 to 1399
$responsive--biggest-screen: 1400px; // 1400 and above

// Default Breakpoints are available by their key
@include respond-to(md) {
  // Styles you want to apply above 920px and below 1399px viewport width
}
```

If you need more, or more specific breakpoints you can also override und-css'
internal `$responsive--breakpoints` variable. But keep in mind to formulate your
breakpoints in a mutually exclusive manner, to prevent specifity issues with
responsive utilities.

```scss
$responsive--breakpoints: (
  custom: '(min-width: 100rem) and (max-width: 200rem)',
);

// Breakpoint will be available as 'custom'
@include respond-to(custom) {
  // Between 100 and 200rem viewport width
}
```

Named breakpoints are also used to generate responsive variants of your
utilities.

```html
<aside class="md:u-w-8/12 lg:u-w-6/12">
  <!-- this will 66.6666% wide on viewports bigger than 920px and 50% from 1400px upwards -->
</aside>
```
