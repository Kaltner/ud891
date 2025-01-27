let isFirstPage = true

page('/', function() {
  page.redirect('/what-is-vegemite');
});

page('/:slug', function(context) {
  // This will match any value after the first / in the url. For example, if
  // the url was /foo, the value of slug would be "foo".
  const slug = context.params.slug;

  // Remove is-active class from previous menu item and section
  const oldMenuItem = document.querySelector('#menu .is-active');
  let oldPage = document.querySelector('main .is-active');
  oldMenuItem.classList.remove('is-active');
  oldPage.classList.remove('is-active');

  // Add is-active class to new menu item and section using the URL slug
  const newMenuItem = document.querySelector('#menu [data-page='+slug+']');
  let newPage = document.querySelector('main [data-page='+slug+']');
  newMenuItem.classList.add('is-active');
  newPage.classList.add('is-active');

  if(isFirstPage) {
    isFirstPage = false
    return
  }

  newPage.querySelector('h2').focus()
});

page({
  hashbang: true
});
