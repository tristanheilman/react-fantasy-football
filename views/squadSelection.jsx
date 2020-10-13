var React = require('react');
var DefaultLayout = require('./layouts/default');

function SquadSelection(props) {

    console.log("SQUAD: ", props.userSquad);
    
    return (
        <DefaultLayout title={props.title}>
            <div>
                <h3>Squad Selection</h3>
                {props.user == undefined ? 
                    <section>
                        <p>Login to see where your squad ranks against the others!</p>
                    </section> 
                :
                    <section className="selection-columns">
                        <section className="column1">
                            <h4>Your Squad</h4>
                            <ul>
                                <li key={1}>QB: {props.userSquad[0].qbPosition == null ? 
                                    <form action="/player-draft" method="post">
                                        <input type="hidden" value="qb" name="position" />
                                        <input type="hidden" value="QBPlayerID" name="columnName" />
                                        <button type="button" className="selectbtn" type="submit">Draft your QB</button>
                                    </form> : props.userSquad[0].qbPosition + " " + props.userSquad[0].qbFirstName + " " + props.userSquad[0].qbLastName}</li>
                                <li key={2}>RB #1: {props.userSquad[0].rb1Position == null ? 
                                     <form action="/player-draft" method="post">
                                        <input type="hidden" value="rb" name="position" />
                                        <input type="hidden" value="RB1PlayerID" name="columnName" />
                                        <button type="button" className="selectbtn" type="submit">Draft your RB #1</button>
                                    </form> : props.userSquad[0].rb1Position + " " + props.userSquad[0].rb1FirstName + " " + props.userSquad[0].rb1LastName}</li>
                                <li key={3}>RB #2: {props.userSquad[0].rb2Position == null ? 
                                    <form action="/player-draft" method="post">
                                        <input type="hidden" value="rb" name="position" />
                                        <input type="hidden" value="RB2PlayerID" name="columnName" />
                                        <button type="button" className="selectbtn" type="submit">Draft your RB #2</button>
                                    </form> : props.userSquad[0].rb2Position + " " + props.userSquad[0].rb2FirstName + " " + props.userSquad[0].rb2LastName}</li>
                                <li key={4}>TE: {props.userSquad[0].tePosition== null ? 
                                     <form action="/player-draft" method="post">
                                        <input type="hidden" value="te" name="position" />
                                        <input type="hidden" value="TEPlayerID" name="columnName" />
                                        <button type="button" className="selectbtn" type="submit">Draft your TE</button> 
                                    </form>: props.userSquad[0].tePosition + " " + props.userSquad[0].teFirstName + " " + props.userSquad[0].teLastName}</li>
                                <li key={5}>WR #1: {props.userSquad[0].wr1Position == null ? 
                                    <form action="/player-draft" method="post">
                                        <input type="hidden" value="wr" name="position" />
                                        <input type="hidden" value="WR1PlayerID" name="columnName" />
                                        <button type="button" className="selectbtn" type="submit">Draft your WR #1</button>
                                    </form> : props.userSquad[0].wr1Position + " " + props.userSquad[0].wr1FirstName + " " + props.userSquad[0].wr1LastName}</li>
                                <li key={6}>WR #2: {props.userSquad[0].wr2Position == null ? 
                                    <form action="/player-draft" method="post">
                                        <input type="hidden" value="wr" name="position" />
                                        <input type="hidden" value="WR2PlayerID" name="columnName" />
                                        <button type="button" className="selectbtn" type="submit">Draft your WR #2</button>
                                    </form> : props.userSquad[0].wr2Position + " " + props.userSquad[0].wr2FirstName + " " + props.userSquad[0].wr2LastName}</li>
                            </ul>
                        </section>
            
                        <section className="column2">
                            <h4>Squad Standings</h4>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Position</th>
                                        <th>Team</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Pass Yards</th>
                                        <th>Rush Yards</th>
                                        <th>Rush Attempts</th>
                                        <th>Recieving Attempts</th>
                                        <th>Recieving Yards</th>
                                        <th>TDs</th>
                                        <th>Completion Percent</th>
                                        <th>Interceptions</th>
                                        <th>Games Played</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.players == null ? null : props.players.map((item, index) =>
                                        <form action="/squad-selection/select-player" method="post">
                                            <tr key={index}>
                                                <td name={item.id} value={item.id}>{item.id}</td>
                                                <td><button type="button" className="selectbtn" type="submit">Draft</button></td>
                                                <td name={item.position} value={item.position}>{item.position}</td>
                                                <td>{item.team}</td>
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
                                        </form>
                                    )}
                                </tbody>
                            </table>
                        </section>
                    </section>
            }
            </div>
        </DefaultLayout>
    );
}

module.exports = SquadSelection;