# How to Customize

You can expand or rewrite parts of the theme.

_MkDocs offers a [generic, detailed guide to customizing a MkDocs theme](https://www.mkdocs.org/user-guide/customizing-your-theme/){target="_blank"}._

[TOC]

## Stylesheets

Add your own CSS files to override the theme's default styles:

```yaml
extra_css:
    - css/custom.css
```

## JavaScript

Add your own JavaScript files to extend the theme's functionality:

```yaml
extra_javascript:
    - js/custom.js
```

## Templates

The theme overrides ReadTheDocs templates that you can override with your own:

- `main.html`
- `nav.html`
- `footer.html`
- `searchbox.html`

To override a template:

1. Create a directory called `overrides` in your docs directory.
2. Add your custom templates e.g.

    ```
    docs/
    ├── overrides/
    │   ├── main.html
    │   └── footer.html
    ```

3. Configure overrides via `mkdocs.yml`:

    ```yaml
    theme:
        name: tacc-readthedocs
        custom_dir: overrides
    ```

## More Options

- [MkDocs: User Guide: Customizing Your Theme](https://www.mkdocs.org/user-guide/customizing-your-theme/){target="_blank"}
- [TACC/Core-Docs: Configuration](configure.md)
- [TACC/Core-Docs: Supported Extensions](extensions.md)