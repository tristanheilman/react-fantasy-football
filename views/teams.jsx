import React from 'react';
var DefaultLayout = require('./layouts/default');

function Teams(props) {
    console.log("PROPS: ", props);

    
    return (
        <DefaultLayout title={props.title}>
            <div>MySql Teams</div>
            <div>
                <ol>
                    {props.teams.length > 0 ? props.teams.map((item, index) => <li key={index}>{item.team}</li>) : null}
                </ol>
            </div>
        </DefaultLayout>
    );
}
module.exports = Teams;