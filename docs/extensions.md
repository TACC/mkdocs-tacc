# Markdown Extensions

You can extend the functionality of your MkDocs site.

_MkDocs offers a [generic guide to extending a MkDocs site](https://www.mkdocs.org/user-guide/configuration/#markdown_extensions){target="_blank"}._

[TOC]

## Core Extensions

Users of TACC MkDocs Theme should enable the following extensions.

```yaml
markdown_extensions:
  - toc:
      permalink: ""
      permalink_class: headerlink fa fa-link
      permalink_title: Link to Heading
      toc_depth: 2-6
```

## Tested Extensions

Standard TACC documentation websites with this theme use:

```yaml
markdown_extensions:
  - footnotes
  - def_list
  - admonition
  - attr_list
  - abbr
  - toc:
      permalink: ""
      permalink_class: headerlink fa fa-link
      permalink_title: Link to Heading
      toc_depth: 2-6
  - pymdownx.superfences
  - pymdownx.inlinehilite
  - pymdownx.saneheaders
  - pymdownx.blocks.details
  - pymdownx.blocks.tab
  - pymdownx.blocks.html
```

## Enhanced Extensions

The TACC MkDocs Theme enhances the UI of these extensions:

| from [Python-Markdown](https://python-markdown.github.io/extensions/) | Ref. | Description |
| - | - | - |
| extra: `abbr` | [demo](#abbreviations), [docs](https://python-markdown.github.io/extensions/abbreviations/) | Define abbreviations. |
| extra: `attr_list` | [demo](#attribute-lists), [docs](https://python-markdown.github.io/extensions/attr_list/) | Add custom classes and IDs to paragraphs. |
| extra: `def_list` | [demo](#definition-lists), [docs](https://python-markdown.github.io/extensions/definition_lists/) | Create definition lists. |
| extra: `fenced_code` | [demo](#fenced-code-blocks), [docs](https://python-markdown.github.io/extensions/fenced_code_blocks/) | Create code blocks. |
| extra: `footnotes` | [demo](#footnotes), [docs](https://python-markdown.github.io/extensions/footnotes/) | Create footnotes. |
| extra: `md_in_html` | [demo](#markdown-in-html), [docs](https://python-markdown.github.io/extensions/md_in_html/) | Render Markdown in HTML. |
| extra: `tables` | [demo](#tables), [docs](https://python-markdown.github.io/extensions/tables/) | Create simple tables. |
| `admonition` | [demo](#admonition), [docs](https://python-markdown.github.io/extensions/admonition/) | Create note/alert boxes. |
| `toc` | [demo](#table-of-contents), [docs](https://python-markdown.github.io/extensions/toc/) | Create table of contents.<br>Get section permalinks. |

---

| of [PyMdown Extensions](https://facelessuser.github.io/pymdown-extensions/#extensions) | Ref. | Description |
| - | - | - |
| `blocks.admonition` | [demo](#pymdownx-admonition), [docs](https://facelessuser.github.io/pymdown-extensions/extensions/blocks/plugins/admonition/) | Create note/alert boxes. |
| `blocks.details` | [demo](#pymdownx-details), [docs](https://facelessuser.github.io/pymdown-extensions/extensions/blocks/plugins/details/) | Create collapsible content. |
| `blocks.html` | [demo](#pymdownx-html), [docs](https://facelessuser.github.io/pymdown-extensions/extensions/blocks/plugins/html/) | Render raw HTML. |
| `blocks.tab` | [demo](#pymdownx-tab), [docs](https://facelessuser.github.io/pymdown-extensions/extensions/blocks/plugins/tab/) | Create tabbed content. |
| `tabbed` (old) | [demo](#pymdownx-tabbed), [docs](https://facelessuser.github.io/pymdown-extensions/extensions/tabbed/) | Create tabbed content. |

## Usage Examples

<style>
    /* to make grid use rows on narrow screens */
    .grid { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }

    /* to reduce space between blocks in grid */
    .grid { gap: 20px; }
    .grid > :is(
        pre,
        .admonition,
        .tabbed-set
    ) { margin-block: 0; }
</style>

### from [Python-Markdown](https://python-markdown.github.io/extensions/)

#### Abbreviation

/// note | Syntax

```markdown
The HTML and CSS specifications are maintained by the W3C.

*[HTML]: Hypertext Markup Language
*[CSS]: Cascading Style Sheets
*[W3C]: World Wide Web Consortium
```

///
/// hint | Result

The HTML and CSS specifications are maintained by the W3C.

*[HTML]: Hypertext Markup Language
*[CSS]: Cascading Style Sheets
*[W3C]: World Wide Web Consortium

///

#### Attribute Lists

/// note | Syntax

```markdown
This is a paragraph with custom class and ID. (Inspect element to see.)
{: .class-name #custom-id }
```

///
/// hint | Result

This is a paragraph with custom class and ID. (Inspect element to see.)
{: .class-name #custom-id }

///

#### Definition Lists

/// note | Syntax

```markdown
Term
: Definition of the term
: Another definition

HTML
: Hypertext Markup Language
: The standard markup language for web pages
```

///
/// hint | Result

Term
: Definition of the term
: Another definition

HTML
: Hypertext Markup Language
: The standard markup language for web pages

///

#### Fenced Code Blocks

/// note | Syntax

````markdown
```shell
echo "Hello, World!" > /tmp/output.txt
```
````

///
/// hint | Result

```shell
echo "Hello, World!" > /tmp/output.txt
```

///

#### Footnotes

<div class="grid" markdown="block">

/// note | Syntax

```markdown
A sentence with a footnote.[^1]

[^1]: The footnote content.
```

///
/// hint | Result

A sentence with a footnote.[^1]

[^1]: The footnote content.

///

</div>

#### Markdown in HTML

//// note | Syntax

```markdown
<div markdown="block">

I am in a `<div>` with markdown enabled.

</div>
```

////
//// hint | Result

<div markdown="block">

I am in a `<div>` with markdown enabled.

</div>

////

#### Tables

<div class="grid" markdown="block">

/// note | Syntax

```markdown
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |
```

///
/// hint | Result

| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |

///

</div>

#### Admonitions

/// note | Syntax

```markdown
!!! note "Custom Title"
    This is a note with a custom title.

!!! warning
    You can include blocks in admonitions, e.g.

    ```shell
    echo "Hello from an admonition!"
    ```
```

///
/// hint | Result

!!! note "Custom Title"
    This is a note with a custom title.

!!! tip
    You can include blocks in admonitions, e.g.

    ```shell
    echo "Hello from an admonition!"
    ```

///

#### Table of Contents

/// html | div.grid

//// note | Syntax

```markdown
[TOC]
```

////
//// hint | Result
(on this page)

<style>
    .toc ul ul { display: none;}
</style>

[TOC]

////

///

### of [PyMdown Extensions](https://facelessuser.github.io/pymdown-extensions/#extensions)

#### Admonition {#pymdownx-admonition}

/// note | Syntax

//// details | Simple Syntax
    open: true
///// html | div.grid

```markdown
/// note | Custom Title
This is a message with a custom title.
///
```

```markdown
/// tip
You can include blocks in admonitions, e.g.

````shell
echo "Hello from an admonition!"
````
///
```

/////
////
//// details | Explicit Syntax
///// html | div.grid

```markdown
/// admonition | Custom Title
    type: note

This is a message with a custom title.
///
```

```markdown
/// admonition
    type: tip

You can include blocks in admonitions, e.g.

````shell
echo "Hello from an admonition!"
````
///
```

/////
////

///
/// hint | Result

<div class="grid" markdown="block">

///// note | Custom Title
This is a note with a custom title.
/////
///// tip
You can include blocks in admonitions, e.g.

```bash
echo "Hello from an admonition!"
```
/////

</div>

///

#### Details/Summary {#pymdownx-details}

<div class="grid" markdown="block">

/// note | Syntax

```markdown
??? "Click to expand"
    This content is collapsible.
```

///
/// hint | Result

??? "Click to expand"
    This content is collapsible.

///

</div>

#### HTML {#pymdownx-html}

<div class="grid" markdown="block">

/// note | Syntax

```markdown
/// html | div
I am in a `<div>` with markdown enabled.
///
```

///
/// hint | Result

//// html | div
I am in a `<div>` with markdown enabled.
////

///

</div>

#### Tab {#pymdownx-tab}

/// note | Syntax

```markdown
/// tab | Tab 1
Content for first tab
///

/// tab | Tab 2
Content for second tab
///
```

///
/// hint | Result

//// tab | Tab 1
Content for first tab
////

//// tab | Tab 2
Content for second tab
////

///

#### Tabbed {#pymdownx-tabbed}

/// caution | Deprecated
This extension is deprecated. Try the [`blocks.tab`](#pymdownx-tab) extension instead.
///

/// note | Syntax

```markdown
=== "Tab 1"
    Content for first tab

=== "Tab 2"
    Content for second tab
```

///

<div class="grid" markdown="block">

/// hint | Result
(if supported)

//// tab | Tab 1
Content for first tab
////

//// tab | Tab 2
Content for second tab
////

///
/// error | Result
(if disabled)

=== "Tab 1"
    Content for first tab

=== "Tab 2"
    Content for second tab

///

</div>
