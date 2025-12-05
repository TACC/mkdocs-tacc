# How to Publish

Publish relies on [Poetry](https://python-poetry.org/).

1. Update `pyproject.toml` version e.g.
    ```shell
    poetry version N.N.N
    ```
2. Commit version bump.
3. Create GitHub release.
4. Pull the new tag.
   ```shell
   git pull
   ```
5. Publish a dry run first:
    ```shell
    poetry publish --build --dry-run
    ```
6. Review the output.
7. Publish for real:
    ```shell
    poetry publish --build
    ```
8. Wait for console to log success.
9. Load https://pypi.org/project/mkdocs-tacc/.

# Related

- [How to Deploy](./DEPLOYING.md)
