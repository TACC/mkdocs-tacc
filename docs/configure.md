# How to Configure

You can configure the theme appearance and behavior.

_MkDocs offers a [generic, detailed guide to configuring a MkDocs theme](https://www.mkdocs.org/user-guide/configuration/){target="_blank"}._

[TOC]

<style id="table-style">
    table:not(#alternate-text ~ *) td:first-child { font-weight: bold; }
</style>

## Basics

```yaml
theme:
    name: tacc_readthedocs
    logo: img/logo.svg
```

| Property | Value | Description |
| - | - | - |
| `name` | `tacc_readthedocs` | Enable the TACC theme. |
| `logo` | `img/logo.svg` | Path to a custom logo (or [overwrite the logo file](./customize.md#templates-assets)). |

## Advanced

| Property | Description |
| - | - |
| [`hljs_aliases`](#custom-language-aliases) | Custom language aliases for highlight.js code blocks |
| [`nav_redirects`](#navigation-redirects) | Redirect nav links to external pages |
| [`logo_svg_inject`](#logo-svg-inject) | Inject the `.svg` logo as `<svg>` markup |
| [`portal_url`](#related-website) | URL of a relevant website or portal |
| [`portal_name`](#related-website) | Name of a relevant website or portal |
| [`nav_name`](#navigation-name) | Custom name for the navigation section |

/// admonition
    type: note

To see default values, inspect [`mkdocs_theme.yml`](https://github.com/TACC/mkdocs-tacc/blob/main/mkdocs_tacc/tacc_readthedocs/mkdocs_theme.yml){target="_blank"} at the version you installed.
///

### Custom Language Aliases

Define custom language identifiers for code blocks e.g.

```yaml
theme:
    name: tacc_readthedocs
    hljs_aliases:
        - name: cmd-line
          lang: bash
        - name: job-script
          lang: bash
```

### Navigation Redirects

Set up redirects for navigation links e.g.

```yaml
theme:
    name: tacc_readthedocs
    nav_redirects:
        - from: /old-page/
          to: /new-page/
```

### Logo SVG Inject

If logo is an `.svg` file, inject its `<svg>` content so your CSS can style it.

```yaml
theme:
    name: tacc_readthedocs
    logo_svg_inject: true
```

### Related Website

Link to a related non-documentation website e.g.

```yaml
theme:
    name: tacc_readthedocs
    portal_url: https://your.related-non-documentation.website
    portal_name: Your Related non-Documentation Website
```

### Navigation Name

Customize the navigation section name e.g.

```yaml
theme:
    name: tacc_readthedocs
    nav_name: Documentation
```

## Alternate Text

The theme can change some of the default English text via optional internationalization (i18n) feature.

| from | to | reason |
| - | - | - |
| "Edit on %(repo_name)s" | "Suggest an update via %(repo_name)s" | more accurately reflects contribution workflow of public repositories |

To enable [all text changes](https://github.com/TACC/mkdocs-tacc/main/tacc_readthedocs/locales/en/LC_MESSAGES/messages.po), install the theme with the i18n extra:

| PIP | Poetry |
| - | - |
| `pip install "mkdocs-tacc[i18n]"` | `poetry add mkdocs-tacc --extras i18n` |

If you install without the i18n extra, the default text "Edit on %(repo_name)s" will be used.

## More Options

- [MkDocs: User Guide: Configuration](https://www.mkdocs.org/user-guide/configuration/){target="_blank"}
- [TACC/mkdocs-tacc: Customization](customize.md)
- [TACC/mkdocs-tacc: Supported Extensions](extensions.md)
