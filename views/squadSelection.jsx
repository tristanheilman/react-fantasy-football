var React = require('react');
var DefaultLayout = require('./layouts/default');

function squadselection(props) {
    
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
                                <li key={1}>QB: {props.squads[0].qbFirstName == null ? 
                                    <form action="/player-draft" method="post">
                                        <input type="hidden" value="qb" name="position" />
                                        <input type="hidden" value="QBPlayerID" name="columnName" />
                                        <button type="button" className="selectbtn" type="submit">Draft your QB</button>
                                    </form> : props.squads[0].qbFirstName + " " + props.squads[0].qbLastName}</li>
                                <li key={2}>RB #1: {props.squads[0].rb1FirstName == null ? 
                                     <form action="/player-draft" method="post">
                                        <input type="hidden" value="rb" name="position" />
                                        <input type="hidden" value="RB1PlayerID" name="columnName" />
                                        <button type="button" className="selectbtn" type="submit">Draft your RB #1</button>
                                    </form> : props.squads[0].rb1FirstName + " " + props.squads[0].rb1LastName}</li>
                                <li key={3}>RB #2: {props.squads[0].rb2FirstName == null ? 
                                    <form action="/player-draft" method="post">
                                        <input type="hidden" value="rb" name="position" />
                                        <input type="hidden" value="RB2PlayerID" name="columnName" />
                                        <button type="button" className="selectbtn" type="submit">Draft your RB #2</button>
                                    </form> : props.squads[0].rb2FirstName + " " + props.squads[0].rb2LastName}</li>
                                <li key={4}>TE: {props.squads[0].teFirstName== null ? 
                                     <form action="/player-draft" method="post">
                                        <input type="hidden" value="te" name="position" />
                                        <input type="hidden" value="TEPlayerID" name="columnName" />
                                        <button type="button" className="selectbtn" type="submit">Draft your TE</button> 
                                    </form>: props.squads[0].teFirstName + " " + props.squads[0].teLastName}</li>
                                <li key={5}>WR #1: {props.squads[0].wr1FirstName == null ? 
                                    <form action="/player-draft" method="post">
                                        <input type="hidden" value="wr" name="position" />
                                        <input type="hidden" value="WR1PlayerID" name="columnName" />
                                        <button type="button" className="selectbtn" type="submit">Draft your WR #1</button>
                                    </form> : props.squads[0].wr1FirstName + " " + props.squads[0].wr1LastName}</li>
                                <li key={6}>WR #2: {props.squads[0].wr2FirstName == null ? 
                                    <form action="/player-draft" method="post">
                                        <input type="hidden" value="wr" name="position" />
                                        <input type="hidden" value="WR2PlayerID" name="columnName" />
                                        <button type="button" className="selectbtn" type="submit">Draft your WR #2</button>
                                    </form> : props.squads[0].wr2FirstName + " " + props.squads[0].wr2LastName}</li>
                            </ul>
                        </section>
            
                        <section className="column2">
                            <h4>Squad Standings</h4>
                            <div className="tableWrapper">
                                <table className="squad-standings-table">
                                    <thead>
                                        <tr>
                                            <th>Member</th>
                                            <th>Total Points</th>
                                            <th>QB</th>
                                            <th>RB1</th>
                                            <th>RB2</th>
                                            <th>TE</th>
                                            <th>WR1</th>
                                            <th>WR2</th>
                                            <th>WEEK 1</th>
                                            <th>WEEK 2</th>
                                            <th>WEEK 3</th>
                                            <th>WEEK 4</th>
                                            <th>WEEK 5</th>
                                            <th>WEEK 6</th>
                                            <th>WEEK 7</th>
                                            <th>WEEK 8</th>
                                            <th>WEEK 9</th>
                                            <th>WEEK 10</th>
                                            <th>WEEK 11</th>
                                            <th>WEEK 12</th>
                                            <th>WEEK 13</th>
                                            <th>WEEK 14</th>
                                            <th>WEEK 15</th>
                                            <th>WEEK 16</th>
                                            <th>WEEK 17</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props.squads == null ? null : props.squads.map((item, index) => {
                                            let total = 0;

                                            if(item.week1) {
                                                total += item.week1;
                                            } else if(item.week2) {
                                                total += item.week2;
                                            } else if(item.week3) {
                                                total += item.week3;
                                            } else if(item.week4) {
                                                total += item.week4;
                                            } else if(item.week5) {
                                                total += item.week5;
                                            } else if(item.week6) {
                                                total += item.week6;
                                            } else if(item.week7) {
                                                total += item.week7;
                                            } else if(item.week8) {
                                                total += item.week8;
                                            } else if(item.week9) {
                                                total += item.week9;
                                            } else if(item.week10) {
                                                total += item.week10;
                                            } else if(item.week11) {
                                                total += item.week11;
                                            } else if(item.week12) {
                                                total += item.week12;
                                            } else if(item.week13) {
                                                total += item.week13;
                                            } else if(item.week14) {
                                                total += item.week14;
                                            } else if(item.week15) {
                                                total += item.week15;
                                            } else if(item.week16) {
                                                total += item.week16;
                                            } else if(item.week17) {
                                                total += item.week17;
                                            }

                                            return (
                                                <tr key={index}>
                                                    <td>{item.userFirstName + " " + item.userLastName}</td>
                                                    <td>{total}</td>
                                                    <td>{item.qbFirstName == null ? "Not Drafted" : item.qbFirstName + " " + item.qbLastName}</td>
                                                    <td>{item.rb1FirstName == null ? "Not Drafted" : item.rb1FirstName + " " + item.rb1LastName}</td>
                                                    <td>{item.rb2FirstName == null ? "Not Drafted" : item.rb2FirstName + " " + item.rb2LastName}</td>
                                                    <td>{item.teFirstName == null ? "Not Drafted" : item.teFirstName + " " + item.teLastName}</td>
                                                    <td>{item.wr1FirstName == null ? "Not Drafted" : item.wr1FirstName + " " + item.wr1LastName}</td>
                                                    <td>{item.wr2FirstName == null ? "Not Drafted" : item.wr2FirstName + " " + item.wr2LastName}</td>
                                                    <td>{item.week1 == null ? "No Points Scored!" : item.week1}</td>
                                                    <td>{item.week2 == null ? "No Points Scored!" : item.week2}</td>
                                                    <td>{item.week3 == null ? "No Points Scored!" : item.week3}</td>
                                                    <td>{item.week4 == null ? "No Points Scored!" : item.week4}</td>
                                                    <td>{item.week5 == null ? "No Points Scored!" : item.week5}</td>
                                                    <td>{item.week6 == null ? "No Points Scored!" : item.week6}</td>
                                                    <td>{item.week7 == null ? "No Points Scored!" : item.week7}</td>
                                                    <td>{item.week8 == null ? "No Points Scored!" : item.week8}</td>
                                                    <td>{item.week9 == null ? "No Points Scored!" : item.week9}</td>
                                                    <td>{item.week10 == null ? "No Points Scored!" : item.week10}</td>
                                                    <td>{item.week11 == null ? "No Points Scored!" : item.week11}</td>
                                                    <td>{item.week12 == null ? "No Points Scored!" : item.week12}</td>
                                                    <td>{item.week13 == null ? "No Points Scored!" : item.week13}</td>
                                                    <td>{item.week14 == null ? "No Points Scored!" : item.week14}</td>
                                                    <td>{item.week15 == null ? "No Points Scored!" : item.week15}</td>
                                                    <td>{item.week16 == null ? "No Points Scored!" : item.week16}</td>
                                                    <td>{item.week17 == null ? "No Points Scored!" : item.week17}</td>

                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </section>
            }
            </div>
        </DefaultLayout>
    );
}

module.exports = squadselection;