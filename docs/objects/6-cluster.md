---
pageTitle: Cluster Object
sinceVersion: 0.1.0
cssFeatures:
  - flexbox
  - css-sel2
---

The cluster provides a simple responsive way of putting items next to each other
without using a grid. So instead of giving each item the same width, the item’s
size is deciding how much space there is for each item. On smaller viewports the
cluster item’s will get wrapped into multiple lines.

{% codeSample %}
<nav class="o-cluster">
  <ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ol>
</nav>
{% endcodeSample %}

### Markup
Please note, how in the above example the cluster is set on the parent element
of the element holding the cluster items (nav). The cluster always expects
exactly one children element that hosts all the cluster items. This is
necessary, so the cluster itself can handle overflow issues.

## Spacing Modifier
You can set the spacing between your cluster items by using one of the spacing modifiers
provided in your `_settings.scss`. Modifiers are passed as the `data-spacing`
attribute.

{% codeSample %}
<nav class="o-cluster" data-spacing="large">
  <ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ol>
</nav>
{% endcodeSample %}

## Alignment Modifier
You can set the prefered vertical alignment of your items using the
`data-align` attribute. Available alignments are `middle` and `bottom`, if no
modifier is set, the items will be aligned at the top.

## Justification Modifier
You can set the prefered horizontal alignements using the `data-justify`
attribute. Available values are `center` and `right`, if no modifier is set, the
items will be justified to the left.

{% codeSample %}
<nav class="o-cluster" data-spacing="large" data-justify="right">
  <ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ol>
</nav>
{% endcodeSample %}

## Use Cases
Typical use cases of the cluster object include navigation patterns, tag lists
or logo walls.
