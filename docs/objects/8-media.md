---
pageTitle: Media Object
sinceVersion: 0.1.0
status: experimental
cssFeatures:
  - flexbox
  - css-sel2
  - calc
---

The media object is a simple abstraction over the – well – media objects. It
allows you to put media and text next to each other in a responsive way, without
using a breakpoint.

The media object is sized intrinsically and will collapse to a one column layout
if the min-widths of it’s children can not be met anymore.

If no widths are provided, the media object will use the natural sizes of its
elements.

{% codeSample %}
<div
  class="o-media"
  data-media-width="3/12"
  data-content-width="medium"
>
  <figure> <!-- Required Block Level Wrapper Element -->
    <div><!-- First child of wrapper will be the media -->
      <div class="o-frame">
        <img src="https://source.unsplash.com/random/1600x900" alt="Some Image" />
      </div>
    </div>
    <figcaption class="o-box u-bg-white"><!-- Second child is text component -->
      I am the text component of the media object
    </figcaption>
  </figure>
</div>
{% endcodeSample %}

## Markup
The media object – like the cluster object – depends on a single child element,
that then wraps the media and text children. The somewhat unsemantic wrapper
element is needed to handle overflow management.

## Spacing Modifier
The media object’s spacing can be modified by using one of the spacing modifiers
provided in your `_settings.scss`. Modifiers are passed as the `data-spacing`

{% codeSample %}
<div
  class="o-media"
  data-media-width="3/12"
  data-content-width="medium"
  data-spacing="large"
>
  <figure> <!-- Required Block Level Wrapper Element -->
    <div><!-- First child of wrapper will be the media -->
      <div class="o-frame">
        <img src="https://source.unsplash.com/random/1600x900" alt="Some Image" />
      </div>
    </div>
    <figcaption class="o-box u-bg-white"><!-- Second child is text component -->
      I am the text component of the media object
    </figcaption>
  </figure>
</div>
{% endcodeSample %}

## Direction Modifier
By default the first element will be the media container. If you want to reverse
the media object (making the second element the media container) you can add
`reversed` as the `data-direction` attribute.

{% codeSample %}
<div
  class="o-media"
  data-media-width="3/12"
  data-content-width="medium"
  data-direction="reversed"
>
  <figure> <!-- Required Block Level Wrapper Element -->
    <figcaption class="o-box u-bg-white"><!-- First child is now text component -->
      I am the text component of the media object
    </figcaption>
    <div><!-- Second child of wrapper will now be the media -->
      <div class="o-frame">
        <img src="https://source.unsplash.com/random/1600x900" alt="Some Image" />
      </div>
    </div>
  </figure>
</div>
{% endcodeSample %}

## Size Modifiers
To handle the intrinsic sizing of the media object you can provide values for
`data-content-width` and `data-media-width`. You can pass named widths from your
`_settings.scss`. It is best practice to use an absolute value for one of the
values and provide a relative value for the other. See the above examples, where
the media’s width was set to `3/12` while the content’s width used a measure
value to set its width.

## Use Cases
This component can be used everytime you need to solve the common layout problem
of putting image and text next to each other in a responsive way. This might be
teaser cards, landing page sections or comment entries.

Please note, even though it’s called **media object** you are by no means
required to place images or videos in the media slot of the object. The media
object can also be used to create a sidebar-layout or put input-fields and
labels on the same row. The component was simply named after its most probable
use case.
