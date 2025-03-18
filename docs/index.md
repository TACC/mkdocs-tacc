# MkDocs TACC Theme

A [TACC](https://www.tacc.utexas.edu/)-styled [MkDocs](https://www.mkdocs.org/) theme based on MkDocs' own [ReadTheDocs theme](https://www.mkdocs.org/user-guide/choosing-your-theme/#readthedocs).

[TOC]

## How to Install

<!-- Keep these steps synced with /README.md -->

1. Install the theme e.g.

    ```shell
    pip install mkdocs-tacc
    ```

2. Use the theme in your MkDocs project; set —

    ```yaml
    theme:
        name: tacc_readthedocs
    ```

    — in your `mkdocs.yml`.

3. Include _at least_ the [minimum set of extensions] —

    ```yaml
    markdown_extensions:
      - toc:
          permalink: "" # i.e. `true` but without "¶"
          permalink_class: headerlink fa fa-link
          permalink_title: Link to Heading
    ```

    — in your `mkdocs.yml`.

[core extensions]: extensions.md#core-extensions

## Configure & Customize

You can [configure the appearance and behavior](configure.md).

You can [expand or rewrite parts of the theme](customize.md).

## Supported Extensions

This theme supports [many Markdown extensions](extensions.md).
