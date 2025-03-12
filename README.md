# TACC ReadTheDocs Theme for MkDocs

This repository contains the TACC ReadTheDocs theme for MkDocs, a custom theme based on the ReadTheDocs theme, customized for TACC documentation projects.

It offers TACC-specific features, and [will be][tacc-docs-76] how TACC consistently styles documentation projects.

[tacc-docs-76]: https://github.com/TACC/TACC-Docs/issues/76

## How to Use

1. Install the theme e.g.

    ```bash
    pip install mkdocs-tacc-readthedocs
    ```

2. Use the theme in your MkDocs project; add —

    ```yaml
    theme:
        name: tacc-readthedocs
    ```

    — to `mkdocs.yml`

## Configuring

You can configure the appearance and behavior. [Read more](./docs/configure.md).

## Customizing

You can extend or rewrite parts of the theme. [Read more](./docs/configure.md).

## Developing

This project uses [Poetry] (v2) for dependency management.

[Poetry]: https://python-poetry.org/

Clone this repository, install all dependencies, activate virtual environment, serve the documentation, e.g.

```bash
git clone https://github.com/TACC/Core-Docs.git
cd Core-Docs
poetry install --sync --all-extras
poetry run mkdocs serve
```

> [!NOTE]
> If you don't have Poetry installed, you may use `pip`, but we offer no peer support for this approach:
>
> ```bash
> git clone https://github.com/TACC/Core-Docs.git
> cd Core-Docs
> python -m venv venv
> source venv/bin/activate  # On Windows, use: venv\Scripts\activate
> pip install -e .
> pip install mkdocs
> mkdocs serve
> ```

## Deploying

This project is not yet deployed on any server.
