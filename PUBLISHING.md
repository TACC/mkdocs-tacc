# How to Publish

Publish relies on [Poetry](https://python-poetry.org/).

1. Run
    ```shell
    poetry publish --build --dry-run
    ```
2. Review the output.
3. Run
    ```shell
    poetry publish --build
    ```
4. Wait for console to log success.
5. Load https://pypi.org/project/mkdocs-tacc/.

# Related

- [How to Deploy](./DEPLOYING.md)
