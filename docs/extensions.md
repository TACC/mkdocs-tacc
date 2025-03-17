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

| [from Python-Markdown](https://python-markdown.github.io/extensions/) | Description |
|-----------|-------------|
| [`toc`](https://python-markdown.github.io/extensions/toc/) | Create table of contents.<br>Get section permalinks. |
| [`tables`](https://python-markdown.github.io/extensions/tables/) | Create simple tables. |
| [`fenced_code`](https://python-markdown.github.io/extensions/fenced_code_blocks/) | Create code blocks. |
| [`def_list`](https://python-markdown.github.io/extensions/definition_lists/) | Create definition lists. |
| [`admonition`](https://python-markdown.github.io/extensions/admonition/) | Create note/alert boxes. |
| [`abbr`](https://python-markdown.github.io/extensions/abbreviations/) | Define abbreviations. |

| [of PyMdown Extensions](https://facelessuser.github.io/pymdown-extensions/#extensions) | Description |
|-----------|-------------|
| [`admonition`](https://facelessuser.github.io/pymdown-extensions/extensions/blocks/plugins/admonition/) | Create note/alert boxes. |

## Usage Examples

<h3>Table of Contents</h3>

Syntax:

```markdown
[TOC]
```

Result (on this page):

[TOC]

<h3>Tables</h3>

Syntax:

```markdown
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |
```

Result:

| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |

<h3>Fenced Code Blocks</h3>

Syntax:

````markdown
```shell
echo "Hello, World!" > /tmp/output.txt
```
````

Result:

```shell
echo "Hello, World!" > /tmp/output.txt
```

<h3>Definition Lists</h3>

Syntax:

```markdown
Term
: Definition of the term
: Another definition

HTML
: Hypertext Markup Language
: The standard markup language for web pages
```

Result:

Term
: Definition of the term
: Another definition

HTML
: Hypertext Markup Language
: The standard markup language for web pages

<h3>Admonitions</h3>

Syntax:

```markdown
!!! note "Optional Title"
    This is a note admonition.

!!! warning
    This is a warning admonition.
```

Result:

!!! note "Optional Title"
    This is a note admonition.

!!! warning
    This is a warning admonition.

<h3>Abbreviations</h3>

Syntax:

```markdown
The HTML and CSS specifications are maintained by the W3C.

*[HTML]: Hypertext Markup Language
*[CSS]: Cascading Style Sheets
*[W3C]: World Wide Web Consortium
```

Result:

The HTML and CSS specifications are maintained by the W3C.

*[HTML]: Hypertext Markup Language
*[CSS]: Cascading Style Sheets
*[W3C]: World Wide Web Consortium

<h3>Admonition</h3>

Syntax:

```markdown
/// admonition | "Custom Admonition"
    type: note

This is a custom-styled admonition box.
///
```

````markdown
/// admonition | "Code Example"
    type: warning

```shell
echo "Hello from an admonition!"
```
///
````

Result:

/// admonition | "Custom Admonition"
    type: note

This is a custom-styled admonition box.
///

/// admonition | "Code Example"
    type: warning

```shell
echo "Hello from an admonition!"
```
///

<h3>Footnotes</h3>

Syntax:

```markdown
Here's a sentence with a footnote.[^1]

[^1]: This is the footnote content.
```

Result:

Here's a sentence with a footnote.[^1]

[^1]: This is the footnote content.

<h3>Attributes</h3>

Syntax:

```markdown
This is a paragraph with custom class and ID. (Inspect element to see.)
{: .class-name #custom-id }
```

Result:

This is a paragraph with custom class and ID. (Inspect element to see.)
{: .class-name #custom-id }

<h3>Tabbed Content</h3>

Syntax:

```markdown
=== "Tab 1"
    Content for first tab

=== "Tab 2"
    Content for second tab
```

Result:

=== "Tab 1"
    Content for first tab

=== "Tab 2"
    Content for second tab

<h3>Details/Summary</h3>

Syntax:

```markdown
??? "Click to expand"
    This content is collapsible.
```

Result:

??? "Click to expand"
    This content is collapsible.

