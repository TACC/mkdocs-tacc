# TACC ReadTheDocs Theme for MkDocs

A [MkDocs](https://www.mkdocs.org/) theme based on MkDocs' own [ReadTheDocs theme](https://www.mkdocs.org/user-guide/choosing-your-theme/#readthedocs) but with a [TACC styling and features](https://docs.tacc.utexas.edu/).

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

You can extend or rewrite parts of the theme. [Read more](./docs/customize.md).

## Usage

- [Example](clients/example.md)
- [DesignSafe User Guide](clients/ds-user-guide.md)
- [TACC-Docs](clients/tacc-docs.md)

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
