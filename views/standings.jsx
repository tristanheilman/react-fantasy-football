import React from 'react';
var DefaultLayout = require('./layouts/default');

function Standings(props) {

    return (
        <DefaultLayout title={props.title}>
            <h2>NFL Team Standings</h2>
            <div className="tableWrapper">
               <table className="table">
                    <thead>
                        <tr>
                            <form action="/standings" method="get">
                                <th name="season">Season<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/standing" method="get">
                                <th>ABR<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/standings" method="get">
                                <th>Team<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/standing" method="get">
                                <th>Conferece<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/standing" method="get">
                                <th>Conferece Rank<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/standing" method="get">
                                <th>Division<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/standing" method="get">
                                <th>Division Rank<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/standing" method="get">
                                <th>Wins<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/standing" method="get">
                                <th>Losses<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/standing" method="get">
                                <th>Percentage<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/standing" method="get">
                                <th>Points For<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/standing" method="get">
                                <th>Points Againts<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/standing" method="get">
                                <th>Net Points<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/standing" method="get">
                                <th>Touchdowns<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/standing" method="get">
                                <th>Division Wins<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/standing" method="get">
                                <th>Division Losses<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/standing" method="get">
                                <th>Conferece Wins<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/standing" method="get">
                                <th>Conferece Losses<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                        </tr>
                    </thead>
                    <tbody>
                        {props.teams.length == 0 ? null : props.teams.map((item, index) =>
                            <tr key={index}>
                                <td>{item.season}</td>
                                <td>{item.teamAbr}</td>
                                <td>{item.team}</td>
                                <td>{item.conference}</td>
                                <td>{item.conferenceRank}</td>
                                <td>{item.division}</td>
                                <td>{item.divisionRank}</td>
                                <td>{item.wins}</td>
                                <td>{item.losses}</td>
                                <td>{item.ties}</td>
                                <td>{item.percentage}</td>
                                <td>{item.pointsFor}</td>
                                <td>{item.pointsAgainst}</td>
                                <td>{item.netPoints}</td>
                                <td>{item.touchdowns}</td>
                                <td>{item.divisionWins}</td>
                                <td>{item.divisionLosses}</td>
                                <td>{item.conferenceWins}</td>
                                <td>{item.conferenceLosses}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </DefaultLayout>
    );
}
module.exports = Standings;
