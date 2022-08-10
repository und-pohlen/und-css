---
layout: main
pageTitle: Changelog
---

## Legend

* [new] new component or feature
* [update] non-breaking change
* [breaking] breaking change
* [fix] Bugfix

## Unreleased
* [breaking] Replace RFS with a custom implementation of truly fluid type based on the approach presented by utopia.fyi (using clamps)
  * adds `fluid` function to generate a clamped value (`fluid(12px, 16px)`)
  * replaces `$typography--base-size` with `$typography--base-size-min` and `$typography--base-size-max`
  * adds `$typography--ratio-min` and `$typography--ratio-max` settings variables
  * adds `$responsive--smallest-screen` settings variable
* [breaking] Update spacings to use fluid values as well
  * `$layout--spacing-default` is now defined as a clamped value using `fluid`
  * adds `$layout--spacing-default-min` and `$layout--spacing-default-max` setting variables
* [update] Remove fluid image handling from base styles.
* [breaking] Replace node-sass with dart-sass.
* [update] use sass math.div instead of slash for division

## 0.2.3
* [fix] Remove dynamically generated comments from utility tool, as this is not
  compatible with Dart SASS.
* [fix] Add License Text to Repo.

## 0.2.2
* [update] add `data-stretch` modifier to `auto-grid`
* [update] add information cross browser compatibility to docs
* [update] add `$globals--print-reset` variable to settings, so users can decide if they want to include the crude print reset in their build.
* [update] update sizing of responsive images

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
