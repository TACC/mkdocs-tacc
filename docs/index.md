# MkDocs TACC Theme

A [TACC](https://www.tacc.utexas.edu/)-styled [MkDocs](https://www.mkdocs.org/) theme based on MkDocs' own [ReadTheDocs theme](https://www.mkdocs.org/user-guide/choosing-your-theme/#readthedocs).

[TOC]

## How to Install

<!-- Keep these steps synced with /README.md -->

1. Install the theme (with as much or as little as you need) e.g.

    ```shell
    pip install mkdocs-tacc
    ```

    ```shell
    pip install "mkdocs-tacc[i18n]" # to change text like "Edit on GitHub"
    ```

    ```shell
    pip install "mkdocs-tacc[pymdown-extensions]" # for bonus Markdown syntax
    ```

    ```shell
    pip install "mkdocs-tacc[all]" # for all features
    ```

2. Use the theme in your MkDocs project; set —

    ```yaml
    theme:
        name: tacc_readthedocs
    ```

    — in your `mkdocs.yml`.

3. Include the [typical][exts-typ] or [minimal][exts-min] set of extensions — e.g.

    ```yaml
    markdown_extensions:
      - toc:
          permalink: "" # i.e. `true` but without "¶"
          permalink_class: headerlink fa fa-link
          permalink_title: Link to Heading
    ```

    — in your `mkdocs.yml`.

[exts-min]: extensions.md#minimal
[exts-typ]: extensions.md#typical

## Configure & Customize

You can [configure the appearance and behavior](configure.md).

You can [expand or rewrite parts of the theme](customize.md).

## Supported Extensions

This theme supports [many Markdown extensions](extensions.md).
