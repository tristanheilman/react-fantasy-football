var React = require('react');
var DefaultLayout = require('./layouts/default');

function Error(props) {
    return (
        <DefaultLayout title={props.title}>
            <div>Error:</div>
            <div>Message: {props.message}</div>
        </DefaultLayout>
    );
}
module.exports = Error;