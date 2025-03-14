# How to Configure

You can configure the theme appearance and behavior.

_MkDocs offers a [generic, detailed guide to configuring a MkDocs theme](https://www.mkdocs.org/user-guide/configuration/){target="_blank"}._

[TOC]

## Basics

```yaml
theme:
    name: tacc-readthedocs
    logo: img/logo.svg
```

## Advanced

| Option | Description |
|--------|-------------|
| `hljs_aliases` | Custom language aliases for highlight.js code blocks |
| `nav_redirects` | Redirect nav links to external pages |
| `cms_url` | URL of the related non-documentation website |
| `cms_name` | Name of the related non-documentation website |
| `nav_name` | Custom name for the navigation section |

### Custom Language Aliases

Define custom language identifiers for code blocks:

```yaml
theme:
    name: tacc-readthedocs
    hljs_aliases:
        - name: cmd-line
          lang: bash
        - name: job-script
          lang: bash
```

### Navigation Redirects

Set up redirects for navigation links:

```yaml
theme:
    name: tacc-readthedocs
    nav_redirects:
        - from: /old-page/
          to: /new-page/
```

### Related Website

Link to a related non-documentation website:

```yaml
theme:
    name: tacc-readthedocs
    cms_url: https://your.related-non-documentation.website
    cms_name: Your Related non-Documentation Website
```

### Navigation Name

Customize the navigation section name:

```yaml
theme:
    name: tacc-readthedocs
    nav_name: Documentation
```

## Alternate Text

The theme can change some of the default English text via optional internationalization (i18n) feature.

| from | to | reason |
| - | - | - |
| "Edit on %(repo_name)s" | "Suggest an update via %(repo_name)s" | more accurately reflects contribution workflow of public repositories |

To enable [all text changes](https://github.com/TACC/Core-Docs/main/tacc_readthedocs/locales/en/LC_MESSAGES/messages.po), install the theme with the i18n extra:

| PIP | Poetry |
| - | - |
| `pip install mkdocs-tacc-readthedocs[i18n]` | `poetry add mkdocs-tacc-readthedocs --extras i18n` |

If you install without the i18n extra, the default text "Edit on %(repo_name)s" will be used.

## More Options

- [MkDocs: User Guide: Configuration](https://www.mkdocs.org/user-guide/configuration/){target="_blank"}
- [TACC/Core-Docs: Customization](customize.md)
- [TACC/Core-Docs: Supported Extensions](extensions.md)
