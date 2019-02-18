var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'wedding invitation',
    // App id
    id: 'com.wedding.invitation',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/entourage/',
        url: 'entourage.html',
      },
      {
        path: '/lechon/',
        url: 'lechon.html',
      },
      {
        path: '/afritada/',
        url: 'afritada.html',
      },
      {
        path: '/ribs/',
        url: 'ribs.html',
      },
      {
        path: '/salmon/',
        url: 'salmon.html',
      },
      {
        path: '/menu/',
        url: 'menu.html',
      },
      {
        path: '/location/',
        url: 'location.html',
      },
      {
        path: '/attire/',
        url: 'attire.html',
      },
      {
        path: '/event/',
        url: 'event.html',
      },
      {
        path: '/more-details/',
        url: 'more-details.html',
      },
      
    ],
    // ... other parameters
  });
  
  var mainView = app.views.create('.view-main');