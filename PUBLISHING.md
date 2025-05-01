# How to Publish

Publish relies on [Poetry](https://python-poetry.org/).

1. Update `pyproject.toml` version e.g.
    ```sh
    poetry version N.N.N
    ```
2. Create GitHub release.
3. Run
    ```shell
    poetry publish --build --dry-run
    ```
4. Review the output.
5. Run
    ```shell
    poetry publish --build
    ```
6. Wait for console to log success.
7. Load https://pypi.org/project/mkdocs-tacc/.

# Related

- [How to Deploy](./DEPLOYING.md)
