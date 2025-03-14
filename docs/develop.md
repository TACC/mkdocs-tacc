# How to Develop

**This project uses [Poetry] (v2) for dependency management.**

[Poetry]: https://python-poetry.org/

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
