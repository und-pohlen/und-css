---
layout: main
pageTitle: Changelog
---

## Legend

* [new] new component or feature
* [update] non-breaking change
* [breaking] breaking change
* [fix] Bugfix

## unreleased
* [new] Switcher Object

## 0.2.1
* [fix] Renamed `styles.scss` to `_styles.scss` to prevent `src/style.css` from
  being generated in development mode.

## 0.2.0
* [breaking] Responsive Breakpoints are now designed to be mutually exclusive to
  avoid collisions when using responsive utility classes. This means, that
  breakpoints are now specified using the auxiliary setting variables
  `$responsive--small-screen`, `$responsive--medium-screen` and
  `$responsive--biggest-screen`. If more breakpoints are needed the
  `$responsive--breakpoints` map can be overriden using `(min-width: ###px) and
  max-width: ####px)` like statements.

## 0.1.0
Initial Version
