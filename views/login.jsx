var React = require('react');
var DefaultLayout = require('./layouts/default');

function Login(props) {
    return (
    <DefaultLayout title={props.title}>
        <form action="/api/login" method="post">
            <div className="container">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required/>                

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>

            </div>

            <div className="container">
                <button className="submitbtn" type="submit">Login</button>
            </div>

        </form>
    </DefaultLayout>
  );
}

module.exports = Login;