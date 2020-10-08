var React = require('react');
var DefaultLayout = require('./layouts/default');

function Index(props) {
  return (
    <DefaultLayout title={props.title}>
      <div>Hello {props.name}</div>
    </DefaultLayout>
  );
}
module.exports = Index;