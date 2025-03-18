# How to Develop

**This project uses [Poetry] (v2) for dependency management.**

[Poetry]: https://python-poetry.org/

## Quick Start

Clone this repository, install all dependencies, activate virtual environment, serve the documentation, e.g.

```shell
git clone https://github.com/TACC/Core-Docs.git
cd Core-Docs
poetry install --sync --all-extras
poetry run mkdocs serve
```

> [!NOTE]
> If you don't have Poetry installed, you may use `pip`, but we offer no peer support for this approach:
>
> ```shell
> git clone https://github.com/TACC/Core-Docs.git
> cd Core-Docs
> python -m venv venv
> source venv/bin/activate  # On Windows, use: venv\Scripts\activate
> pip install -e .
> pip install mkdocs
> mkdocs serve
> ```

## Test on Client

### End-to-End

To test changes end-to-end on client repository:

1. Install the theme at a specific revision, e.g.

    ```shell
    poetry add git+https://github.com/wesleyboar/Core-Docs.git#main
    ```

### Real-Time

To test changes real-time on client repository:

1. Install the theme in editable mode, e.g.

    ```shell
    poetry add --editable ../Core-Docs # ¹
    ```

<sub>¹ Where `../Core-Docs` is the path to your clone of this repository.</sub>

> [!TIP]
> If changes since that command are not reflected, try:
>
> ```shell
> poetry remove mkdocs-tacc
> poetry add --editable ../Core-Docs # ¹
> ```

## Related

- [How to Deploy](./DEPLOY.md)
