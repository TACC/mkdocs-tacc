/* FAQ: jQuery element selector is used cuz Firefox does not support :has() */

function createIcon() {
  const icon = document.createElement('i');
        icon.classList.add('fa', 'fa-external-link');
  return icon;
}

/* to add icon to external links in nav menu */
document.querySelectorAll(`
  .wy-menu a:where( :not(.internal), [href^="http"] )
`).forEach( a => {
  const icon = createIcon();

  a.prepend(icon);
});

/* to add icon to external links in content */
document.querySelectorAll(`
  .rst-content a[href^="http"]
`).forEach( a => {
  const icon = createIcon();

  /* to style external links */
  const style = document.createElement('style');
  style.textContent = `
  .rst-content a > .fa-external-link {
      margin-left: 0.25em;
  }
  `;
  document.head.appendChild(style);

  a.append(icon);
});
