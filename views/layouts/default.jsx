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
                        <li><a href="/players">Player Stats</a></li>
                        <li><a href="/teams">Team Stats</a></li>
                        <li><a href="/squad-selection">Select Your Squad</a></li>
                        <li><a href="/squad-rankings">Squad Rankings</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Register</a></li>
                    </ul>
                </nav>
          
                <main>
                    {props.children}
                </main>
          
                <footer>
                    <p>Created by: Tristan Heilman, Sean Hearne and Ryan Gruss</p>
                </footer>
            </div>
        </body>
    </html>
  );
}

module.exports = DefaultLayout;