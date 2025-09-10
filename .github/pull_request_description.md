### Overview

- Renames `cms_` → `portal_` theme properties (breaking change)
- Separates TACC logo from generic demo logo
- Updates documentation to reflect new naming

### Related

- https://github.com/TACC/TACC-Docs/pull/95

### Changes

- **renamed** `cms_url` → `portal_url` 
- **renamed** `cms_name` → `portal_name`
- **added** `logo-tacc.svg` for TACC-specific branding
- **updated** `logo.svg` to generic demo design
- **updated** examples and documentation

### Testing

1. Verify `portal_url` and `portal_name` functionality.
2. Confirm examples use new naming.
3. Validate logo display.

### UI

…
