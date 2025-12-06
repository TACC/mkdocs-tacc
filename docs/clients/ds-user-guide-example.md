# How to Configure "DS User Guide"

How [DesignSafe-CI/DS-User-Guide][ds-user-guide]{target="_blank"} project should use this theme.

[ds-user-guide]: https://github.com/DesignSafe-CI/DS-User-Guide

## Theme Configuration

```yaml
theme:
  name: tacc_readthedocs
  # "ReadTheDocs" Theme Features
  logo: img/logo.svg
  hljs_languages:
    - python
    - json
  # "TACC" Theme Features
  portal_url: https://designsafe-ci.org/
  portal_name: designsafe-ci.org
  nav_name: User Guide
```

## Custom Styling

```yaml
extra_css:
  - css/ds-docs.css
```

## Custom JavaScript

```yaml
extra_javascript:
  - https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js # for pymdownx.arithmatex
```

## Unique Markdown Extensions

```yaml
markdown_extensions:
  - pymdownx.arithmatex:
      generic: true # for mathjax
```
