/* TODO: With MkDocs 1.5+, we can use the new configuration format:
https://www.mkdocs.org/user-guide/configuration/#extra_javascript

```yml
extra_javascript:
  - addPageId.js
  - autoScrollNav.js
  - redirectNavLinks.js
  - path: modules/setTargetForExternalLinks.js
    type: module
  - path: modules/styleLinksOutsideMainContent.js
    type: module
  - path: modules/swapImgSvgWithRawSvg.js
    type: module
  - path: modules/removeThemeClasses.js
    type: module
  - path: modules/changeNavMarkup.js
    type: module
```
*/

// Dynamically append scripts
document.addEventListener('DOMContentLoaded', function () {
    const siteUrl = document.querySelector('meta[name="site_url"]').getAttribute('content');

    const scripts = [
        { path: 'addPageId.js' },
        { path: 'autoScrollNav.js' },
        { path: 'redirectNavLinks.js' },
        { type: 'module', path: 'modules/setTargetForExternalLinks.js' },
        { type: 'module', path: 'modules/styleLinksOutsideMainContent.js' },
        { type: 'module', path: 'modules/swapImgSvgWithRawSvg.js' },
        { type: 'module', path: 'modules/removeThemeClasses.js' },
        { type: 'module', path: 'modules/changeNavMarkup.js' },
    ];

    // Load all scripts
    scripts.forEach(script => {
        // Skip if non-module script is already loaded
        if (!script.type && typeof window[script.path.replace('.js', '')] !== 'undefined') {
            return;
        }

        const scriptElement = document.createElement('script');
        scriptElement.src = siteUrl + '/js/tacc-theme/' + script.path;

        if (script.type) {
            scriptElement.type = script.type;
        }
        if (script.defer) {
            scriptElement.defer = true;
        }
        if (script.async) {
            scriptElement.async = true;
        }

        document.head.appendChild(scriptElement);
    });
});
