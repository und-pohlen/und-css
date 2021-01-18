---
pageTitle: Namespacing
description: By default und-css is set up to namespace the provided CSS class names to allow for more transparent UI code.
---

## Why use namespaces
When working at scale a lot of our time is spent reading existing code trying to
understand what it does. Naming conventions such as BEM help to clearly
distinguish parts of a component in relation to the other parts of a component.

Namespaces take this a step further by prefixing CSS classes according to their
function in the global sense. A namespace can help us to quickly understand what
a certain class does in absolute terms. They help to easily understand what
existing codes does and how it might be altered to achieve a desired change in
design. Namespaces greatly reduce the urge to create new selectors.

If you want to know more about the motivation behind using namespaced CSS check
out [Harry Roberts’ article on namespaced
CSS](https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/).

## Default Namespaces
By default und-css uses two different namespaces to distinguish the classes it
provides and generates.

* **o-**: Signifies that a class belongs to an object. Objects may be used in
  any number of non related contexts. Objects provide abstractions of common
  layouts. They don’t come with any cosmetic styling.
* **u-**: Signifies a utility class. Utility classes have a very specific role
  (mostly just providing one CSS rule). They are commonly used to provide quick
  access to design tokens.

If you build your own layout objects or utility styles on top of und-css it is
recommended that you follow the same namespace convention.

## Recommended Namespaces
As und-css only provides layout objects and utility classes it does not cover
how you handle and name your custom component styles. To distinguish your
components from objects and utilities it is recommended to introduce a new
namespace.

* **c-**: Should signify a component style in your custom CSS. A component is a
  specific implementation of UI. Changes made to a component style only affect
  instances of this component but nothing else in your design.

## Changing / Removing Namespaces
und-css default namespaces are a suggestion rather than a convention. You can
ovveride them in your `_settings.scss`.

* `$utilities--prefix`: Sets the prefix of your utility classes. Defaults to
  `u-`, set to an empty String if you don’t want a prefix.
* `$objects--prefix`: Sets the prefix of object classes. Default to `o-`, set to
  an ampty String if you don’t want any prefix.
