import React from 'react';
var DefaultLayout = require('./layouts/default');

function Teams(props) {

    return (
        <DefaultLayout title={props.title}>
            <h2>NFL Team Statistics</h2>
            <div>
               <table className="table">
                    <thead>
                        <tr>
                            <form action="/teams" method="get">
                                <th name="team">Team Name<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/teams/sort-lyp" method="get">
                                <th>Last Year Points<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/teams/sort-typ" method="get">
                                <th>This Year Points<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                        </tr>
                    </thead>
                    <tbody>
                        {props.teams.length == 0 ? null : props.teams.map((item, index) => 
                            <tr key={index}>
                                <td>{item.team}</td>
                                <td>{item.lyp}</td>
                                <td>{item.typ}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </DefaultLayout>
    );
}
module.exports = Teams;