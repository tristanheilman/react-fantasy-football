var React = require('react');

function DefaultLayout(props) {
  return (
    <html>
      <head>
        <title>{props.title}</title>
        <link rel="stylesheet" type="text/css" href="/stylesheets/style.css" />
      </head>
      <body>
        <div className="wrapper">
          <header>
            <h1>Cloud Computer - Fantasy Football Wep App</h1>
          </header>
          
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/teams">NFL Teams</a></li>
              <li><a href="/teams">Dummy</a></li>
              <li><a href="/teams">Dummy</a></li>
              <li><a href="/teams">Dummy</a></li>
            </ul>
          </nav>
          
          <main>
            {props.children}
          </main>
          
          <footer>
            This is some footer content.
          </footer>
        </div>
      </body>
    </html>
  );
}

module.exports = DefaultLayout;