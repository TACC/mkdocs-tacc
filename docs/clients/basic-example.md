# How to Configure a Project

How a generic project might use this theme.

## Theme Configuration

```yaml
theme:
  name: tacc_readthedocs
  # "ReadTheDocs" Theme Features
  logo: img/your-logo.svg
  navigation_depth: 4
  # "TACC" Theme Features
  portal_url: https://your-site.org
  portal_name: your-site.org
  nav_name: Documentation
```

## Custom Styling

```yaml
extra_css:
  - css/specific-to-your-project.css
```

## Custom JavaScript

```yaml
extra_javascript:
  - js/specific-to-your-project.js
```
