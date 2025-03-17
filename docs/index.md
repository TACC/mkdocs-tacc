# TACC ReadTheDocs Theme for MkDocs

A [MkDocs](https://www.mkdocs.org/){target="_blank"} theme based on MkDocs' own [ReadTheDocs theme](https://www.mkdocs.org/user-guide/choosing-your-theme/#readthedocs){target="_blank"} but with [TACC styling and features](https://docs.tacc.utexas.edu/){target="_blank"}.

[TOC]

## How to Install

<!-- Sync these steps with /README.md -->

1. Install the theme e.g.

    ```shell
    pip install mkdocs-tacc-readthedocs
    ```

2. Use the theme in your MkDocs project; add —

    ```yaml
    theme:
        name: tacc-readthedocs
    ```

    — to your `mkdocs.yml`.

3. Include the [core extensions] —

    ```yaml
    markdown_extensions:
      - toc:
          permalink: ""
          permalink_class: headerlink fa fa-link
          permalink_title: Link to Heading
          toc_depth: 2-6
    ```

    — in your `mkdocs.yml`.

[core extensions]: extensions.md#core-extensions

## Configure & Customize

You can [configure the appearance and behavior](configure.md).

You can [expand or rewrite parts of the theme](customize.md).

## Supported Extensions

This theme supports [many Markdown extensions](extensions.md).
