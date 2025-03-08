# Configuration

Configure the theme to match your project's needs.

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

### Related Website Configuration

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

For more advanced customization, see [Customization](customization.md).
