import React from 'react';
var DefaultLayout = require('./layouts/default');

function Stats(props) {
    return (
        <DefaultLayout title={props.title}>
            <h2>NFL Player Statistics</h2>
            <div className="container">
                <label for="search"><b>Player Search</b></label>
                <input type="text" placeholder="Search Player Name" name="search"/>
            </div>
            <div>
               <table className="table">
                    <thead>
                        <tr>
                            <th>Player Name</th>
                            <th>Position</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.players.length == 0 ? null : props.players.map((item, index) => 
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.position}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </DefaultLayout>
    );
}
module.exports = Stats;