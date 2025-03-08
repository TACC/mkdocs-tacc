# TACC ReadTheDocs Theme for MkDocs

This repository contains the TACC ReadTheDocs theme for MkDocs, a custom theme based on the ReadTheDocs theme, customized for TACC documentation projects.

## Features

- Customized ReadTheDocs theme with TACC styling
- Support for TACC-specific features
- Consistent styling across all TACC documentation projects

## Installation

To install the theme, run:

```bash
pip install mkdocs-tacc-readthedocs
```

## Usage

To use the theme in your MkDocs project, add the following to your `mkdocs.yml`:

```yaml
theme:
    name: tacc-readthedocs
```

## Documentation

For more information, see the [documentation](https://tacc.github.io/Core-Docs/).

## Development

To develop the theme, clone this repository and install the theme in development mode:

```bash
git clone https://github.com/TACC/Core-Docs.git
cd Core-Docs
pip install -e .
```

Then, you can make changes to the theme and see them reflected in your MkDocs projects.

## Building the Documentation

To build the documentation, run:

```bash
mkdocs build
```

To serve the documentation locally, run:

```bash
mkdocs serve
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
