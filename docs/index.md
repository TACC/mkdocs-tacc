# TACC MkDocs ReadTheDocs Theme

A [MkDocs](https://www.mkdocs.org/) theme based on MkDocs' own [ReadTheDocs theme](https://www.mkdocs.org/user-guide/choosing-your-theme/#readthedocs) but with a [TACC skin and configuration](https://docs.tacc.utexas.edu/).

## Quick Start

1. Install theme:

    ```bash
    pip install mkdocs-tacc-readthedocs
    ```

2. Set theme in `mkdocs.yml`:

    ```yaml
    theme:
        name: tacc-readthedocs
        logo: img/logo.svg
    ```

For general MkDocs configuration, refer to the [MkDocs documentation](https://www.mkdocs.org/user-guide/configuration/).

For information on customizing MkDocs themes, see the [MkDocs theme customization guide](https://www.mkdocs.org/dev-guide/themes/).

## Documentation

- [Configuration](configure.md) - Theme-specific configuration options
- [Customization](customize.md) - How to customize the theme
- Usage
    - [Example](clients/example.md)
    - [DesignSafe User Guide](clients/ds-user-guide.md)
    - [TACC-Docs](clients/tacc-docs.md)
