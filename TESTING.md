## How to Test

> [!NOTE]
> Testing is manual and requires using a command prompt.

1. Follow [`DEVELOPING.md` "Quick Start"](./DEVELOPING.md#quick-start).
2. Checkout your branch e.g.
    ```shell
    git checkout __THE_NAME_OF_YOUR_BRANCH__
    ```
3. Make changes.
4. If you changed theme files:
    1. Stop the server (e.g. `Ctrl+C`).
    2. Serve the docs again:
        ```shell
        poetry run mkdocs serve
        ```

## Test on Client

### End-to-End

To test changes end-to-end on client repository:

0. Clone and/or enter client repository.
1. Install the theme at a specific revision, e.g.

    ```shell
    poetry add git+https://github.com/wesleyboar/Core-Docs.git#main
    ```

### Real-Time

To test changes real-time on client repository:

0. Clone and/or enter client repository.
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
