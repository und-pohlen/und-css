---
pageTitle: Color Tokens
---

## Default Colors
To get started quickly, und-css will set your background-color to white and your
text color to black. If you want to change this, you can do so via the two
default-color variables.

```scss
$colors--default-background: #000000; // available as var(--color--default-background)
$colors--default-text: #ffffff;       // available as var(--color--default-text)
```

These colors are globally available as `var(--color--default-background)` and
`var(--color--default-text)`.

## Named colors
Chances are, you will want to add more colors to your visual language. und-css
let’s you add as many colors as you want, as long as you provide meaningful
(read: meaningful to you and your design and dev-team) keys for them. This is
what we call **named colors**.

To define named colors add them to the `$color--named-colors` map-variable.

```scss
$colors--named-colors: (
  accent: #0000ff, // will become var(--color--accent)
  muted: #f1f1f1,  // will become var(--color--muted)
  …
);
```

Named colors are exposed globally as `var(--color--{{name}})`, as shown in the
comments above.
