# How to Configure "DS User Guide"

How [DesignSafe-CI/DS-User-Guide][ds-user-guide]{target="_blank"} project should use this theme.

[ds-user-guide]: https://github.com/DesignSafe-CI/DS-User-Guide

## Theme Configuration

```yaml
theme:
  name: tacc-readthedocs
  # "ReadTheDocs" Theme Features
  logo: img/NSF_NHERI-DS.svg
  hljs_languages:
    - python
    - json
  # "TACC" Theme Features
  cms_url: https://designsafe-ci.org/
  cms_name: designsafe-ci.org
  nav_name: User Guide
```

## Custom Styling

```yaml
extra_css:
  - css/tacc-theme.css # to retain TACC theme UI
  - css/ds-docs.css
```

## Custom JavaScript

```yaml
extra_javascript:
  - js/tacc-theme.mjs # to retain TACC theme UX
  - https://polyfill.io/v3/polyfill.min.js?features=es6
  - https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js
```
