---
pageTitle: Getting Started
description: Get started using und-css in your own projects by installing it as a frontend dependency
---

## Quick Start
For a quick start you first need to install und-css as a dependency to your
project.

``` bash
yarn add -D und-css # or npm
```

Presuming you have some kind of SASS transpiler running in your project (e.g.
via webpack or some other task runner) you then simple required the und-css
entry file in your SASS stylesheet.

``` scss
@import './node_modules/und-css/src/styles';
```

## Important Globals
To make live easier and more predictable und-css makes some assumptions about
your HTML markup and sets some opionated styling defaults.

### HTML5 Doctype
und-css requires the HTML5 Doctype. Without it you might experience some weird
rendering issues.

``` html
<!doctype html>
<html lang="en">
  ...
</html>
```

### Responsive Meta Tag
und-css provides responsive utility classes to make designing for *different
viewports* easier. To ensure proper renderung and zooming for all devices, you
need to **add the responsive view meta tag** to your `<head>`.

``` html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

### Box-sizing
For more logical spacing and size calculations in CSS, und-css switches the
global `box-sizing` value from `content-box` to `border-box`.

On rare occasions you therefore might want to reset this in your custom
component styles building on und-css.

``` css
.c-my-component {
  box-sizing: content-box;
}
```
