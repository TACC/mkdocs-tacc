# How to Configure a Project

How a generic project might use this theme.

## Theme Configuration

```yaml
theme:
  name: tacc-readthedocs
  # "ReadTheDocs" Theme Features
  logo: img/your-logo.svg
  navigation_depth: 4
  # "TACC" Theme Features
  cms_url: https://your.related-non-documentation.website
  cms_name: Your Related non-Documentation Website
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
