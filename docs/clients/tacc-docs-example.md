# How to Configure "TACC Docs"

How [TACC/TACC-Docs][tacc-docs]{target="_blank"} project should use this theme.

[tacc-docs]: https://github.com/TACC/TACC-Docs

## Theme Configuration

```yaml
theme:
  name: tacc_readthedocs
  # "ReadTheDocs" Theme Features
  logo: img/logo-with-text.svg
  analytics:
    gtag: G-TRRRQZ0EHX
  # "TACC" Theme Features
  cms_url: https://tacc.utexas.edu
  cms_name: tacc.utexas.edu
  hljs_aliases:
    - name: cmd-line
      lang: bash
    - name: job-script
      lang: bash
    - name: syntax
      lang: plaintext
```

## Custom Styling

```yaml
extra_css:
  - css/specific-to-tacc-docs.css
```

## Custom JavaScript

```yaml
extra_javascript:
  - js/specific-to-tacc-docs.js
```
