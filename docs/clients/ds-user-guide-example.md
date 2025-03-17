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
  - css/specific-to-ds-user-guide.css
```

## Custom JavaScript

```yaml
extra_javascript:
  - js/tacc-theme.js # to retain TACC theme UX
  - js/specific-to-ds-user-guide.js
```
