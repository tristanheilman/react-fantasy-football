import React from 'react';
var DefaultLayout = require('./layouts/default');

function Players(props) {
    return (
        <DefaultLayout title={props.title}>
            <h2>NFL Player Statistics</h2>
            <div className="container">
                <form action="/players/search" method="post">
                <label for="player"><b>Player Search</b></label>
                <input type="text" placeholder="Search Player Name" name="player"/>
                <button type="button" className="selectbtn" type="submit">Search</button>
                </form>
            </div>
            <div>
               <table className="table">
                    <thead>
                        <tr>
                            <form action="/players" method="get">
                                <th>Team<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/players/position-desc" method="get">
                                <th>Position<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/players/first-desc" method="get">
                                <th>First Name<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/players/last-desc" method="get">
                                <th>Last Name<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/players/passyrds-desc" method="get">
                                <th>Pass Yards<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/players/rushyrds-desc" method="get">
                                <th>Rush Yards<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/players/rushatt-desc" method="get">
                                <th>Rush Attempts<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/players/rec-desc" method="get">
                                <th>Recieving Attempts<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/players/recyrds-desc" method="get">
                                <th>Recieving Yards<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/players/tds-desc" method="get">
                                <th>TDs<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/players/cmpperc-desc" method="get">
                                <th>Completion Percent<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/players/int-desc" method="get">
                                <th>Interceptions<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/players/gp-desc" method="get">
                                <th>Games Played<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                        </tr>
                    </thead>
                    <tbody>
                        {props.players.length == 0 ? null : props.players.map((item, index) => 
                            <tr key={index}>
                                <td>{item.team}</td>
                                <td>{item.position}</td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.passYrds}</td>
                                <td>{item.rushYrds}</td>
                                <td>{item.rushAtt}</td>
                                <td>{item.recAtt}</td>
                                <td>{item.recYrds}</td>
                                <td>{item.tds}</td>
                                <td>{item.cmpPerc}</td>
                                <td>{item.int}</td>
                                <td>{item.gamesPlayed}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </DefaultLayout>
    );
}
module.exports = Players;