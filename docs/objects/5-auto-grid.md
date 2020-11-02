---
pageTitle: Auto Grid
sinceVersion: 0.1.0
cssFeatures:
  - grid
---

The auto grid provides a simple way of creating a responsive grid without
writing media queries or relying on breakpoints. This is good if you just have a
bunch of equally important elements you need to put in a grid.

{% codeSample %}
<div class="o-auto-grid">
    <div class="o-box u-bg-white">
      I am in a box
    </div>
    <div class="o-box u-bg-white">
      I am in a box
    </div>
    <div class="o-box u-bg-white">
      I am in a box
    </div>
</div>
{% endcodeSample %}

## Spacing Modifier
You can set the grid’s gutter by using one of the spacing modifiers
provided in your `_settings.scss`. Modifiers are passed as the `data-spacing`
attribute.

{% codeSample %}
<div
  class="o-auto-grid"
  data-spacing="large"
>
    <div class="o-box u-bg-white">
      I am in a box
    </div>
    <div class="o-box u-bg-white">
      I am in a box
    </div>
    <div class="o-box u-bg-white">
      I am in a box
    </div>
</div>
{% endcodeSample %}

## Measure Modifier
The auto grid is sized intrinsically. That means that instead of specifying the
amount of columns you want to have, you specify the minimum width each column
should occupy. CSS grid will then calculate the neccessary amount of columns and
rows to lay out your items.

The min-width is expressed in measures. You can set the min-width by using one
of the measure values set in `_settings.scss`. Measure modifiers are passed as
the `data-measure` attribute.

{% codeSample %}
<div
  class="o-auto-grid"
  data-measure="narrow"
>
    <div class="o-box u-bg-white">
      I am in a box
    </div>
    <div class="o-box u-bg-white">
      I am in a box
    </div>
    <div class="o-box u-bg-white">
      I am in a box
    </div>
</div>
{% endcodeSample %}

{% codeSample %}
<div
  class="o-auto-grid"
  data-measure="wide"
>
    <div class="o-box u-bg-white">
      I am in a box
    </div>
    <div class="o-box u-bg-white">
      I am in a box
    </div>
    <div class="o-box u-bg-white">
      I am in a box
    </div>
</div>
{% endcodeSample %}

## Use Cases
The auto grid is good when you have a bunch of equally important items that you
want to place in a responsive grid without worrying about breakpoints.

A prime example is a collection of cards (e.g. news teaser of team members) that
need to be layed out automatically.

**Do not use auto-grid** if you need granular control over the grid. In those
cases you should use the manual [grid object](/objects/grid/).
