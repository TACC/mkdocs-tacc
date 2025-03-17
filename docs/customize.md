# How to Customize

You can extend or rewrite parts of the theme.

_MkDocs offers a [generic, detailed guide to customizing a MkDocs theme](https://www.mkdocs.org/user-guide/customizing-your-theme/){target="_blank"}._

## Stylesheets

Add your own CSS files to override the theme's default styles:

```yaml
extra_css:
    - css/tacc-theme.css # load this first to retain TACC theme UI
    - css/custom.css
```

## JavaScript

Add your own JavaScript files to extend the theme's functionality:

```yaml
extra_javascript:
    - js/tacc-theme.mjs # load this first to retain TACC theme UX
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
