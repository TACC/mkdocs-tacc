/* FAQ: jQuery element selector is used cuz Firefox does not support :has() */

/* To add icon to nav items that are external links */
document.querySelectorAll(`
  .wy-menu-vertical a:not(.internal),
  .wy-menu-vertical a[href^="http"]
`).forEach( a => {
  const icon = document.createElement('i');

  icon.classList.add('fa', 'fa-external-link');
  a.prepend(icon);
});
