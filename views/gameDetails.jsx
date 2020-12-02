import React from 'react';
var DefaultLayout = require('./layouts/default');

function GameDetails(props) {
    return (
        <DefaultLayout title={props.title}>
            <h2>Current Week Details</h2>
            <p>Week Name: {props.upcomingData.Name}</p>
            <p>Season: {props.upcomingData.Season}</p>
            <p>Week: {props.upcomingData.Week}</p>
            <p>Start of Week: {new Date(props.upcomingData.StartDate).toDateString()}</p>
            <p>End of Week: {new Date(props.upcomingData.EndDate).toDateString()}</p>
            <p>Games Started: {props.upcomingData.HasStarted ? "Yes" : "No"}</p>
            <p>API Season: {props.upcomingData.ApiSeason}</p>
            <h2>NFL Current Games</h2>
            <div className="tableWrapper">
               <table className="players-table">
                    <thead>
                        <tr>
                            <form action="/game-details" method="get">
                                <th>Week<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/game-details" method="get">
                                <th>Date<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/game-details" method="get">
                                <th>Is In Progress<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/game-details" method="get">
                                <th>Home Team<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/game-details" method="get">
                                <th>Away Team<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/game-details" method="get">
                                <th>Home Score<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/game-details" method="get">
                                <th>Away Score<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/game-details" method="get">
                                <th>Point Spread<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/game-details" method="get">
                                <th>Over/Under<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/game-details" method="get">
                                <th>Stadium Name<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/game-details" method="get">
                                <th>Stadium City<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/game-details" method="get">
                                <th>Stadium State<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/game-details" method="get">
                                <th>Stadium Type<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                        </tr>
                    </thead>
                    <tbody>
                        {props.thisWeekScores.length == 0 ? null : props.thisWeekScores.map((item, index) =>
                            <tr key={index}>
                                <td>{item.Week}</td>
                                <td>{new Date(item.Date).toDateString()}</td>
                                <td>{item.IsInProgress ? "Live" : "No"}</td>
                                <td>{item.HomeTeamName}</td>
                                <td>{item.AwayTeamName}</td>
                                <td>{item.HomeScore}</td>
                                <td>{item.AwayScore}</td>
                                <td>{item.PointSpread}</td>
                                <td>{item.OverUnder}</td>
                                <td>{item.StadiumDetails.Name}</td>
                                <td>{item.StadiumDetails.City}</td>
                                <td>{item.StadiumDetails.State}</td>
                                <td>{item.StadiumDetails.Type}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <h2>NFL Recent Games</h2>
            <div className="tableWrapper">
               <table className="players-table">
                    <thead>
                        <tr>
                            <form action="/game-details" method="get">
                                <th>Week<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/game-details" method="get">
                                <th>Date<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/game-details" method="get">
                                <th>Home Team<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/game-details" method="get">
                                <th>Away Team<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/game-details" method="get">
                                <th>Home Score<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/game-details" method="get">
                                <th>Away Score<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/game-details" method="get">
                                <th>Point Spread<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/game-details" method="get">
                                <th>Over/Under<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/game-details" method="get">
                                <th>Stadium Name<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/game-details" method="get">
                                <th>Stadium City<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/game-details" method="get">
                                <th>Stadium State<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                            <form action="/game-details" method="get">
                                <th>Stadium Type<button type="button" className="selectbtn" type="submit">Sort</button></th>
                            </form>
                        </tr>
                    </thead>
                    <tbody>
                        {props.lastWeekScores.length == 0 ? null : props.lastWeekScores.map((item, index) =>
                            <tr key={index}>
                                <td>{item.Week}</td>
                                <td>{new Date(item.Date).toDateString()}</td>
                                <td>{item.HomeTeamName}</td>
                                <td>{item.AwayTeamName}</td>
                                <td>{item.HomeScore}</td>
                                <td>{item.AwayScore}</td>
                                <td>{item.PointSpread}</td>
                                <td>{item.OverUnder}</td>
                                <td>{item.StadiumDetails.Name}</td>
                                <td>{item.StadiumDetails.City}</td>
                                <td>{item.StadiumDetails.State}</td>
                                <td>{item.StadiumDetails.Type}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </DefaultLayout>
    );
}
module.exports = GameDetails;
