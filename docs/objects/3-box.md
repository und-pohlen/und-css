---
pageTitle: Box Object
sinceVersion: 0.1.0
cssFeatures:
  - css-sel2
---

The box object is a simple abstraction to box things of. Providing adjustable
padding.

{% codeSample %}
<div class="o-box u-bg-white">
    I am in a box
</div>
{% endcodeSample %}

## Spacing Modifier
The box object’s spacing can be modified by using one of the spacing modifiers
provided in your `_settings.scss`. Modifiers are passed as the `data-spacing`
attribute.

{% codeSample %}
<div class="o-box u-bg-white" data-spacing="large">
    I am in a box
</div>
{% endcodeSample %}

## Use Cases
Use the box object whenever you need to box off content from the rest of the
pages. Common use cases include teaser cards or floating info or call-to-action
boxes. The box object, as all objects, only sets the spacing and does not add
any cosmetic styling. Combine with utility classes or custom component styles to
get a fully styled box.
