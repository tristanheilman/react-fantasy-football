var React = require('react');
var DefaultLayout = require('./layouts/default');

function SquadSelection(props) {

    const selectPlayer = () => {
        console.log("SELECT PLAYER");
    }
    
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
                                <li>QB: {props.user.qb == undefined ? "Select a QB!" : props.user.qb.firstName}</li>
                                <li>RB #1: {props.user.rb1 == undefined ? "Select a RB for slot 1!" : props.user.rb1.firstName}</li>
                                <li>RB #2: {props.user.rb2 == undefined ? "Select a RB for slot 2!" : props.user.rb1.firstName}</li>
                                <li>TE: {props.user.te == undefined ? "Select a TE!" : props.user.te.firstName}</li>
                                <li>WR #1: {props.user.wr1 == undefined ? "Select a WR for slot 1!" : props.user.wr1.firstName}</li>
                                <li>WR #2: {props.user.wr2 == undefined ? "Select a Wr for slot 2!" : props.user.wr2.firstName}</li>
                            </ul>
                        </section>
            
                        <section className="column2">
                            <h4>Build Your Squad</h4>
                            <table className="table">
                                <thead>
                                    <tr>
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
                                    {props.players.length == 0 ? null : props.players.map((item, index) => 
                                        <tr key={index}>
                                            <td>{item.position}</td>
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