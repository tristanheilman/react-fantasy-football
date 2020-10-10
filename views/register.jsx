var React = require('react');
var DefaultLayout = require('./layouts/default');

function Register(props) {
    return (
    <DefaultLayout title={props.title}>
        <form action="/api/register" method="post">
            <div className="container">
                <label for="email"><b>First Name</b></label>
                <input type="text" placeholder="Enter First Name" name="firstName" required/>

                <label for="email"><b>Last Name</b></label>
                <input type="text" placeholder="Enter Last Name" name="lastName" required/>

                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required/>

                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required/>   

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>
            </div>

            <div className="container">
                <button className="submitbtn" type="submit">Register</button>
            </div>
        </form>
    </DefaultLayout>
  );
}

module.exports = Register;