# How to Publish

Publish relies on [Poetry](https://python-poetry.org/).

1. Update `pyproject.toml` version e.g.
    ```sh
    poetry version N.N.N
    ```
2. Commit version bump.
3. Create GitHub release.
4. Run
    ```shell
    poetry publish --build --dry-run
    ```
5. Review the output.
6. Run
    ```shell
    poetry publish --build
    ```
7. Wait for console to log success.
8. Load https://pypi.org/project/mkdocs-tacc/.

# Related

- [How to Deploy](./DEPLOYING.md)
