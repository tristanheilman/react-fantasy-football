var React = require('react');
var DefaultLayout = require('./layouts/default');

function Index(props) {
    console.log(props.games_in_progress)
  return (
    <DefaultLayout title={props.title}>
        <div>
            <h3>Deployment Info:</h3>
            <p>React-Express NodeJS Web Application with connections to a MySQL Database!</p>
            <h3>Important Information!</h3>
            <p>Games in Progress: {props.games_in_progress ? <a href="https://www.nfl.com/">Yes - Check out NFL.com</a> : "No"} </p>
            <h3>User Info:</h3>
            <p>Page Views: {props.page_views}</p>
            {props.user == null ? <p>Login to view account info!</p> :
                <section>
                    <p>First Name: {props.user.firstName}</p>
                    <p>Last Name: {props.user.lastName}</p>
                    <p>User Name: {props.user.userName}</p>
                    <p>Email: {props.user.email}</p>
                    <p>ID: {props.user.id}</p>
                </section>
            }
        </div>
    </DefaultLayout>
  );
}

module.exports = Index;
