---
pageTitle: Frame Object
sinceVersion: 0.1.0
cssFeatures:
  - css-sel2
  - flexbox
  - object-fit
---

The frame object can be used to wrap images or videos to maintain or force their
aspect ratio. This is especially useful if you can’t control the aspect ratio of
some image data coming from a CMS or you don’t want your layout to horizontally
jump when using lazy loading for images.

{% codeSample %}
<div class="o-frame">
  <img src="https://source.unsplash.com/random/1600x900" alt="Some Image" />
</div>
{% endcodeSample %}

## Ratios
The frame object can be configured to use different ratios. You can set the
available ratios in your `_settings.scss`. The ratio can be passed to the
`data-ratio` attribute.

{% codeSample %}
<div class="o-frame" data-ratio="1:1">
  <img src="https://source.unsplash.com/random/1600x900" alt="Some Image" />
</div>
{% endcodeSample %}

## Image Scaling
Images will be centered within the provided ratio and will be scaled so they
fully fit within given ratio. This can cause some unwanted crops with some
images, so be sure to double check if the selected ratio is the correct one for
the images you’re working with.
