---
pageTitle: Site Object
sinceVersion: 0.1.0
cssFeatures:
  - viewport-units
---

The site object is a simple helper object that helps you to to ensure an element
always has a min-height. The most common use case is to apply this to the `main`
section of your web page, to ensure your footer is always pushed to the bottom
of the screen.

{% codeSample %}
<div class="o-site">
  I am 100vh tall.
</div>
{% endcodeSample %}

## Overriding Size
By default the side object sets its min-height to `100vh`. To override this
value, you can override the `--o-site--height` custom property in an inline
style.

{% codeSample %}
<div class="o-site" style="--o-site--height: 50vh">
  I am 50vh tall.
</div>
{% endcodeSample %}

## Use cases
The most common use case is to apply `o-site` to your layout’s `main` to ensure
the page’s footer is always pushed to the bottom of the page.
