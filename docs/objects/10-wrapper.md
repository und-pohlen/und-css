---
pageTitle: Wrapper Object
---

The wrapper object is a simple helper object that helps you to to ensure an
element always has a max-width and is centered on the page.

{% codeSample %}

<div class="o-wrapper">
  I am am a wrapper.
</div>
{% endcodeSample %}

## Overriding Size

By default the wrapper object sets its max-width to `1400px`. To override this
value, you can set the `$layout--widths-max-width` variable or override the
`--o-wrapper--width` custom property in an inline style.

{% codeSample %}

<div class="o-wrapper" style="--o-wrapper--width: 500px">
  I am 500px wide.
</div>
{% endcodeSample %}

## Use cases

The most common use case is to apply `o-wrapper` to your layout’s `main` or
its siblings to ensure the page’s content always has the same width.
