# TACC Documentation Theme & Guide & Demo for MkDocs

A guide and demo for [TACC](https://www.tacc.utexas.edu/)'s [MkDocs](https://www.mkdocs.org/) documentation theme based on MkDocs' own [ReadTheDocs theme](https://www.mkdocs.org/user-guide/choosing-your-theme/#readthedocs) but with a [TACC styling and features](https://docs.tacc.utexas.edu/).

## Quick Start

<!-- Sync these steps with /docs/index.md -->

1. Install the theme e.g.

    ```shell
    pip install mkdocs-tacc-readthedocs
    ```

2. Use the theme in your MkDocs project; add —

    ```yaml
    theme:
        name: tacc-readthedocs
    ```

    — to `mkdocs.yml`

Learn to [configure](./docs/configure.md) and [customize](./docs/customize.md).

## Known Clients

| Status | Repository |
| - | - |
| Active | None |
| Upcoming | [TACC-Docs](https://github.com/TACC/TACC-Docs)<br>[DesignSafe-CI/DS-User-Guide](https://github.com/DesignSafe-CI/DS-User-Guide.md) |
| Potential | [TACC/containers_at_tacc](https://github.com/TACC/containers_at_tacc)<br>[TACC/life_sciences_ml_at_tacc](https://github.com/TACC/life_sciences_ml_at_tacc) |

## For Developers

We welcome your contribution. Learn [how to develop](./docs/customize.md).
