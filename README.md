![lint](https://github.com/und-pohlen/und-css/actions/workflows/ci.yml/badge.svg?branch=master)
![docs](https://github.com/und-pohlen/und-css/actions/workflows/docs.yml/badge.svg?branch=master)
![npmjs](https://github.com/und-pohlen/und-css/actions/workflows/release-package.yml/badge.svg?branch=master)

# und CSS

und CSS is a SCSS-based low level toolkit used as the basis for all things CSS at [und Pohlen](https://und-pohlen.de).

## Installation

```
npm install @und-pohlen/und-css --save-dev
```

## Documentation

For further documentation see [css.und-pohlen.de](https://css.und-pohlen.de).

## Goal

und CSS aims to make working with CSS easier by providing robust compositions and tools to flexibly set up visual languages fast.

## What

und CSS consists of three parts: Tokens, Objects and Utilities

### Tokens

Tokens are namespaced CSS custom properties automatically generated from your settings. They provide fast and easy access to your visual language (colors, spacings, typography, etc.) from your components.

### Objects

Objects are unstyled composition styles solving common layout problems such as grids, boxes or stacks. They are heavily inspired by [Every Layout](https://every-layout.dev/) and provide basic responsive behaviour without relying on media queries – but rather by utilizing "modern" CSS such as flexbox or grid.

### Utilities

Utility classes are automatically generated from settings as well. They do one thing well – setting a single CSS property on an element. You can use utility classes for quickly setting font-sizes, colors or spacings on your elements. Und CSS provides an open utility configuration, so you can easily generate your own utility classes for whatever property you want.

## Inspiration

und CSS does not reinvent the wheel but draws inspiration from frameworks and approaches we have worked with over the years. Most important influences are [Inuit CSS’](https://github.com/inuitcss/inuitcss) namespace, [Tailwind CSS’](https://tailwindcss.com/) flexible approach to utility classes and [Every Layout’s](https://every-layout.dev/) robust and resilient CSS layout solutions.
