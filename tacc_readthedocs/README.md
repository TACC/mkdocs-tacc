# TACC ReadTheDocs Theme for MkDocs

A custom MkDocs theme based on the ReadTheDocs theme, customized for TACC documentation projects.

## Features

- Customized ReadTheDocs theme with TACC styling
- Support for TACC-specific features
- Consistent styling across all TACC documentation projects

## Installation

```shell
pip install mkdocs-tacc-readthedocs
```

## Usage

Add the following to your `mkdocs.yml`:

```yaml
theme:
    name: tacc-readthedocs
```

## Configuration

The theme supports the following configuration options:

```yaml
theme:
    name: tacc-readthedocs
    logo: /img/logo.svg
    nav_redirects: []
    collapse_navigation: false
    highlightjs: true
    hljs_languages:
        - bash
        - plaintext
    hljs_aliases:
        - name: cmd-line
          lang: bash
        - name: job-script
          lang: bash
        - name: syntax
          lang: plaintext
```

## CSS and JavaScript

The theme includes the following CSS and JavaScript files:

### CSS
- css/core/bootstrap.css
- css/core/core-styles.css
- css/core/tacc-docs.css
- css/core/highlight-js.css
- css/core/permalink.css

### JavaScript
- js/core/autoScrollNav.js
- js/core/addPageId.js
- js/core/redirectNavLinks.js
- js/core/modules/setTargetForExternalLinks.js
- js/core/modules/styleLinksOutsideMainContent.js
- js/core/modules/swapImgSvgWithRawSvg.js
- js/core/modules/removeThemeClasses.js
- js/core/modules/changeNavMarkup.js
