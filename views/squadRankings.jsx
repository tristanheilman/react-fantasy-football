var React = require('react');
var DefaultLayout = require('./layouts/default');

function SquadSelection(props) {



    const selectPlayer = () => {
        console.log("SELECT PLAYER");
    }
    
    return (
        <DefaultLayout title={props.title}>
            <div>
                <h3>Squad Rankings</h3>
                {props.user == undefined ? 
                    <section>
                        <p>Login to see where your squad ranks against the others!</p>
                    </section> 
                :
                    <section className="selection-columns">
                        <section className="column1">
                            <h4>Your Squad Rank: # xx</h4>
                            <ul>
                                <li>1 QB POINTS GAINED</li>
                                <li>2 RBs POINTS GAINED</li>
                                <li>2 WRs POINTS GAINED</li>
                                <li>1 TE POINTS GAINED</li>
                            </ul>
                        </section>
            
                        <section className="column2">
                            <table>
                                <thead>
                                    <tr>
                                    <th>Last Name</th>
                                    <th>First Name</th>
                                    <th>Email</th>
                                    <th>Due</th>
                                    <th>Web Site</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>Smith</td>
                                    <td>John</td>
                                    <td>jsmith@gmail.com</td>
                                    <td>$50.00</td>
                                    <td>http://www.jsmith.com</td>
                                    </tr>
                                    <tr>
                                    <td>Bach</td>
                                    <td>Frank</td>
                                    <td>fbach@yahoo.com</td>
                                    <td>$50.00</td>
                                    <td>http://www.frank.com</td>
                                    </tr>
                                    <tr>
                                    <td>Doe</td>
                                    <td>Jason</td>
                                    <td>jdoe@hotmail.com</td>
                                    <td>$100.00</td>
                                    <td>http://www.jdoe.com</td>
                                    </tr>
                                    <tr>
                                    <td>Conway</td>
                                    <td>Tim</td>
                                    <td>tconway@earthlink.net</td>
                                    <td>$50.00</td>
                                    <td>http://www.timconway.com</td>
                                    </tr>
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