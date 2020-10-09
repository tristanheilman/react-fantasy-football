var React = require('react');
var DefaultLayout = require('./layouts/default');

function Index(props) {
  return (
    <DefaultLayout title={props.title}>
        <div>
            <h3>Deployment Info:</h3>
            <p>React-Express NodeJS Web Application with connections to a MySQL Database!</p>
            <p>Page Views: {props.page_views}</p>
        </div>
    </DefaultLayout>
  );
}

module.exports = Index;