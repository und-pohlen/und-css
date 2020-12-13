---
pageTitle: Grid Object
sinceVersion: 0.1.0
cssFeatures:
  - flexbox
---

The grid object is a flex box based layout grid, providing adjustable
padding. The grid object sets up a manual grid, that needs to be controlled with
utility styles across breakpoints. By default all direct child elements of the
grid object are sized to 100% width.

By default und-css is set up to provide a 12 column grid. See [width
tokens](/tokens/#width-tokens) for configuration options.

{% codeSample %}
<div class="o-grid">
  <div class="u-w-6/12">
    <div class="o-box u-bg-white">
        I am in a box
    </div>
  </div>
  <div class="u-w-6/12">
    <div class="o-box u-bg-white">
        I am in a box
    </div>
  </div>
</div>
{% endcodeSample %}

## Spacing Modifier
The grid object’s spacing can be modified by using one of the spacing modifiers
provided in your `_settings.scss`. Modifiers are passed as the `data-spacing`
attribute.

{% codeSample %}
<div class="o-grid" data-spacing="large">
  <div class="u-w-6/12">
    <div class="o-box u-bg-white">
        I am in a box
    </div>
  </div>
  <div class="u-w-6/12">
    <div class="o-box u-bg-white">
        I am in a box
    </div>
  </div>
</div>
{% endcodeSample %}

## Alignment Modifier
You can set the prefered vertical alignment of your items using the
`data-align` attribute. Available alignments are `middle` and `bottom`, if no
modifier is set, the items will be aligned at the top.

## Justification Modifier
You can set the prefered horizontal alignements using the `data-justify`
attribute. Available values are `center` and `right`, if no modifier is set, the
items will be justified to the left.

## Responsive Grids
By default all grid items are set to 100% in width. As you’ve seen you can use
utility classes to set the width of single grid items. To achieve a responsive
grid, you can use the responsive modifiers of utility classes.

{% codeSample %}
<div class="o-grid">
  <div class="lg:u-w-6/12">
    <div class="o-box u-bg-white">
      I am 50% wide on big screens
    </div>
  </div>
  <div class="lg:u-w-3/12">
    <div class="o-box u-bg-white">
      I am 25% wide on big screens
    </div>
  </div>
  <div class="md:u-w-6/12 lg:u-w-3/12">
    <div class="o-box u-bg-white">
      I am 50% wide on medium screens and 25% wide on big screens
    </div>
  </div>
</div>
{% endcodeSample %}

## Use Cases
The grid object is used for manual grid, where you need full control over their
responsive behaviour to account for differences in visual hierarchy. The manual
grid is usually used to create the macro layout of a site.
