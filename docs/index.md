# MkDocs TACC Theme

A [TACC](https://www.tacc.utexas.edu/)-styled [MkDocs](https://www.mkdocs.org/) theme based on MkDocs' own [ReadTheDocs theme](https://www.mkdocs.org/user-guide/choosing-your-theme/#readthedocs).

[TOC]

<style>
dt::after {
    content: ": ";
    display: inline;
}
dd {
    margin-left: 0;
}
dd:not(:last-child) {
    margin-bottom: 1em;
}
dl strong {
    font-weight: var(--medium);
}
</style>

## How to Install

1. Install the theme (with all or zero extra functionality).

    /// tab | PIP

    For **all** features
    : `pip install "mkdocs-tacc[all]"`
    
    To change **text**, like "Edit on GitHub"
    : `pip install "mkdocs-tacc[i18n]"`
    
    For extra Markdown **syntax**
    : `pip install "mkdocs-tacc[pymdown-extensions]"`
    
    For **minimal** install
    : `pip install mkdocs-tacc`


    ///
    /// tab | Poetry

    For **all** features
    : `poetry add "mkdocs-tacc[all]"`
    
    To change **text**, like "Edit on GitHub"
    : `poetry add "mkdocs-tacc[i18n]"`
    
    For extra Markdown **syntax**
    : `poetry add "mkdocs-tacc[pymdown-extensions]"`
    
    For **minimal** install
    : `poetry add mkdocs-tacc`

    ///

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
