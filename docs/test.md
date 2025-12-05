# How to Test

[TOC]

## Test Locally

You can test `mkdocs-tacc` or `mkdocs-tacc` clients locally with [PIP](https://pip.pypa.io/) or [Poetry](https://python-poetry.org/).

Some clients also support [Docker](https://docs.docker.com/) and [Make](https://www.gnu.org/software/make/). \*

/// tab | PIP

0. PIP should be **at least** version `21.3`.

    ```shell
    pip --version
    ```
    <small>Only checks current version. Upgrade command is different.</small>

1. To **install** dependencies and **serve** docs in isolation:

    //// tab | Test `mkdocs-tacc` Repo

    <small>To test client instead, use **Test on Client Repo** tab.</small>

    ```shell
    python -m venv venv
    source venv/bin/activate
    pip install -e ".[all]"
    mkdocs serve
    ```

    ////
    //// tab | Test on Client Repo
        select: True

    <small>The client repo might required additional or different commands. Check its documentation.</small>

    ```shell
    python -m venv venv
    source venv/bin/activate
    pip install -e "."
    mkdocs serve
    ```

    ////

To **deactivate** environment: `deactivate`

To **remove** environment: `rm -rf venv`

///
/// tab | Poetry

0. Poetry should be **at least** version `1.5.0`.

    ```shell
    poetry --version
    ```

    <small>Only checks current version. Upgrade command is different.</small>

1. To **install** dependencies and **serve** docs in isolation:

    //// tab | Test `mkdocs-tacc` Repo

    <small>To test client instead, use **Test on Client Repo** tab.</small>

    ```shell
    poetry install --sync --extras "all"
    poetry run mkdocs serve
    ```

    ////
    //// tab | Test on Client Repo
        select: True

    <small>The client repo might required additional or different commands. Check its documentation.</small>

    ```shell
    poetry install --sync
    poetry run mkdocs serve
    ```

    ////

To **deactivate** environment: `exit`

To **remove** environment: `poetry env remove --all`

///
/// tab | \* Docker

0. Docker should be **at least** version `20.10.0`.

    ```shell
    docker --version
    ```

    <small>Only checks current version. Upgrade command is different.</small>

1. To **install** dependencies and **serve** docs in isolation:

    <small>The client repo might required additional or different commands. Check its documentation.</small>

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

1. To **install** dependencies and **serve** docs in isolation:

    <small>The client repo might required additional or different commands. Check its documentation.</small>

    ```shell
    make start
    ```

To **deactivate** environment: `Ctrl+C`

To **remove** environment: `make stop`

///

## Test Remotely

Some clients will offer automatic, remote build and deploy for testing.

## Test on Client

### Test Theme on Client

/// note |

As you follow [**Test Locally**](#test-locally) instructions, use **Test Client Repo** tab.

//// tab | Test `mkdocs-tacc` Repo

Ignore this tab. **Read the other tab.**

////
//// tab | Test on Client Repo
    select: True

**Read this tab.** Ignore the other tab.

////

///


### Test Theme at Specific Revision

To test a specific revision of `mkdocs-tacc` on a client repository:

0. Clone and/or enter client repository.
1. Install the theme at a specific revision (e.g. a version) —

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

    — or a specific branch —

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

### Test Theme in Real-Time

To test `mkdocs-tacc` theme changes in real-time on a client repository:

0. Clone and/or enter client repository.
1. Install the theme in editable mode, e.g.

    /// tab | PIP

    ```shell
    pip install -e "../mkdocs-tacc[all]"
    ```

    <small>Where `../mkdocs-tacc` is the path to your clone of this repository.</small>

    //// tip |

    If changes since that command are not reflected, try:

    ```shell
    pip uninstall mkdocs-tacc
    pip install -e "../mkdocs-tacc[all]"
    ```

    ////

    ///
    /// tab | Poetry

    ```shell
    poetry add --editable ../mkdocs-tacc --extras=all
    ```

    <small>Where `../mkdocs-tacc` is the path to your clone of this repository.</small>

    //// tip | If changes since that command are not reflected, try:

    ```shell
    poetry remove mkdocs-tacc
    poetry add --editable ../mkdocs-tacc --extras=all
    ```

    ////

    ///
