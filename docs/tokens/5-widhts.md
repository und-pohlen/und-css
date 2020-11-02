---
pageTitle: Width Tokens
---

und-css provides to approaches to widht: Measure and Grid-widths. Both can be
set as custom variables in your settings.

## Measures
A measure is the maximum line of a length of text (typically expressed in
characters). und-css allows you to set named measures, that can act as
`max-width` of your container elements.

Ideally you would set your measures in font-relative units like `em` (not rem)
or `ch`, so it adapts to the font-size of its content.

As they are linked closely to typography measures can be defined under the
`$typography` namespace.

```scss
$typography--measures: (
  narrow: 30ch,
  medium: 60ch,
  wide: 90ch,
);
```

{% codeSample %}
<div class="o-stack">
  <div class="u-measure-narrow">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  </div>
  <div class="u-measure-medium">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  </div>
  <div class="u-measure-wide">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  </div>
</div>
{% endcodeSample %}

Measures are used in the [media object](/objects/#media-object) and can be
accessed using custom properties or utility styles.

## Grid Widths
und-css gives you access to a simple 12 column grid using – you
guessed it – named grid widths. By default the widths are named like fractions,
so you can easily access them in modifiers and utility classes.

```scss
$layout--widths: (
  '1\\/12': percentage(1 / 12),
  '2\\/12': percentage(2 / 12),
  '3\\/12': percentage(3 / 12),
  '4\\/12': percentage(4 / 12),
  '5\\/12': percentage(5 / 12),
  '6\\/12': percentage(6 / 12),
  '7\\/12': percentage(7 / 12),
  '8\\/12': percentage(8 / 12),
  '9\\/12': percentage(9 / 12),
  '10\\/12': percentage(10 / 12),
  '11\\/12': percentage(11 / 12),
  '12\\/12': percentage(12 / 12),
);
```

Grid widths are used in the [media object](/objects#media-object) and can be
accessed in utility. We currently do not generate custom attributes for grid
widths.

{% codeSample %}
<ol class="o-grid">
  <li class="u-w-4/12">
    <div class="o-box u-bg-white">4 / 12</div>
  </li> 
  <li class="u-w-4/12">
    <div class="o-box u-bg-white">4 /12 </div>
  </li> 
  <li class="u-w-4/12">
    <div class="o-box u-bg-white">4 / 12</div>
  </li> 
</ol>
{% endcodeSample %}

Also see the [Grid Object](/objects/#grid-object) for more information on how to
work with grids.
