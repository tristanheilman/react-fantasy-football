var React = require('react');
var DefaultLayout = require('./layouts/default');

function Index(props) {
  return (
    <DefaultLayout title={props.title}>
        <div>
            <h3>Deployment Info:</h3>
            <p>React-Express NodeJS Web Application with connections to a MySQL Database!</p>
            <h3>User Info:</h3>
            <p>Page Views: {props.page_views}</p>
            {props.user == null ? <p>Login to view account info!</p> : 
                <section>
                    <p>First Name: {props.user.firstName}</p>
                    <p>Last Name: {props.user.lastName}</p>
                    <p>User Name: {props.user.userName}</p>
                    <p>Email: {props.user.email}</p>
                </section>
            }
        </div>
    </DefaultLayout>
  );
}

module.exports = Index;