# How to Test

[TOC]

## Test Locally

You can test `mkdocs-tacc` locally with [PIP](https://pip.pypa.io/) or [Poetry](https://python-poetry.org/).

You can test `mkdocs-tacc` clients the same way; some also support [Docker](https://docs.docker.com/) and [Make](https://www.gnu.org/software/make/). \*

/// tab | PIP

0. Ensure PIP is **updated**; `21.3+` recommended:

    ```shell
    pip install --upgrade pip
    ```

1. To **install** dependencies and **serve** docs in isolation:

    ```shell
    python -m venv venv
    source venv/bin/activate
    pip install -e .
    mkdocs serve
    ```

To **deactivate** environment: `deactivate`

To **remove** environment: `rm -rf venv`

///
/// tab | Poetry

0. Ensure Poetry is **updated**; `1.5.0+` recommended:

    ```shell
    poetry self update
    ```

1. To **install** dependencies and **serve** docs in isolation:

    ```shell
    poetry install --sync
    poetry run mkdocs serve
    ```

To **deactivate** environment: `exit`

To **remove** environment: `poetry env remove --all`

///
/// tab | \* Docker

0. Ensure Docker is **updated**; `20.10.0+` recommended:

    ```shell
    docker --version
    ```

    <small>Only checks version. Upgrade differs per platform.</small>

1. To **install** dependencies and **serve** docs in isolation:

    ```shell
    docker compose up
    ```

To **deactivate** environment: `docker compose stop`

To **remove** environment: `docker compose down`

///
/// tab | \* Make

0. Ensure Make is **available**:

    ```shell
    make --version
    ```

    <small>Only checks version. Upgrade differs per platform.</small>

1. To **install** dependencies and **serve** docs in isolation:

    ```shell
    make start
    ```

To **deactivate** environment: `Ctrl+C`

To **remove** environment: `make stop`

///

## Test Remotely

Some clients will offer automatic, remote build and deploy for testing.

## Test on Client

### at Specific Revision

To test changes end-to-end on client repository:

0. Clone and/or enter client repository.
1. Install the theme at a specific version —

    /// tab | PIP

    ```shell
    pip install mkdocs-tacc==0.5.0
    ```

    ///
    /// tab | Poetry

    ```shell
    poetry add mkdocs-tacc@0.5.0
    ```

    ///

    — or a specific branch –

    /// tab | PIP

    ```shell
    pip install "mkdocs-tacc[all] @ git+https://github.com/TACC/mkdocs-tacc.git#work-in-progress"
    ```

    ///
    /// tab | Poetry

    ```shell
    poetry add "mkdocs-tacc[all] @ git+https://github.com/TACC/mkdocs-tacc.git#work-in-progress"
    ```

    ///

    — or other revision.

### in Real-Time

To test changes real-time on client repository:

0. Clone and/or enter client repository.
1. Install the theme in editable mode, e.g.

    /// tab | PIP

    ```shell
    pip install -e ../mkdocs-tacc
    ```

    <small>Where `../mkdocs-tacc` is the path to your clone of this repository.</small>

    //// tip | If changes since that command are not reflected, try:

    ```shell
    pip uninstall mkdocs-tacc
    pip install -e ../mkdocs-tacc
    ```

    ////

    ///
    /// tab | Poetry

    ```shell
    poetry add --editable ../mkdocs-tacc
    ```

    <small>Where `../mkdocs-tacc` is the path to your clone of this repository.</small>

    //// tip | If changes since that command are not reflected, try:

    ```shell
    poetry remove mkdocs-tacc
    poetry add --editable ../mkdocs-tacc # ¹
    ```

    ////

    ///

