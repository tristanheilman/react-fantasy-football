var React = require('react');
var DefaultLayout = require('./layouts/default');

function PlayerDraft(props) {

    return (
        <DefaultLayout title={props.title}>
            <div>
                <h3>Squad Selection</h3>
                {props.user == undefined ? 
                    <section>
                        <p>Login to see see this page!</p>
                    </section> 
                :
                    <section className="column2">
                        <h4>Build Your Squad</h4>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Draft</th>
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
                                {props.players.length == 0 ? null : props.players.map((item, index) => {

                                    let column = null;
                                    switch(item.position) {
                                        case 'qb':

                                    }
                                    return (
                                        <form action="/api/draft" method="post">
                                            <tr key={index}>
                                                <input type="hidden" value={item.id} name="playerID" />
                                                <input type="hidden" value={props.columnName} name="columnPosition" />
                                                <td><button type="button" className="selectbtn" type="submit">Draft</button></td>
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
                                        </form>
                                    )
                                })}
                            </tbody>
                        </table>
                    </section>
                }
            </div>
        </DefaultLayout>
    );
}

module.exports = PlayerDraft;