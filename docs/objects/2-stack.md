---
pageTitle: Stack Object
sinceVersion: 0.1.0
cssFeatures:
  - flexbox
---

The stack object provides a simple way of creating vertical rhythm. The stack
will put even spacing between all its direct child elements by setting their
`margin-top` value (except of course, for the first child).

{% codeSample %}
<div class="o-stack">
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
The stack object’s spacing can be modified by using one of the spacing modifiers
provided in your `_settings.scss`. Modifiers are passed as the `data-spacing`
attribute.

{% codeSample %}
<div class="o-stack" data-spacing="large">
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

## Recursive Stack
By default the stack only spaces its direct children elements. In some cases you
might want to put a space between all children element. In this case, you can
simply add the `data-recursive` attribute to your stack.

{% codeSample %}
<div class="o-stack" data-spacing="large" data-recursive>
  <div class="o-box u-bg-white">
    <div>I am in a box</div>
    <div>I am a spaced div in a box</div>
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
The stack object is a handy utility object that can be used in every situation
you need to establish a consistent vertical rhythm, without relying on adding
margins to every single component. In the past I've used the stack object for
spacing the macro layout of an entire site but also to create a basic vertical
rhythm for text-blocks coming from rich text editors.

In essence the stack object enables you to add spacing to your components
without adding it to the component styles, which allows you to write more
self-contained code, where every part just knows how to style itself but has no
interdependence on how other parts are styled and spaced. If you use this object
often enough you will fall in love with it.
