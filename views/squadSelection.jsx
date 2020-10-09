var React = require('react');
var DefaultLayout = require('./layouts/default');

function SquadSelection(props) {

    const selectPlayer = () => {
        console.log("SELECT PLAYER");
    }
    
    return (
        <DefaultLayout title={props.title}>
            <div>
                <h3>Team Selection</h3>
                <section className="selection-columns">
                    <section className="column1">
                        <h4>Your Squad</h4>
                        <ul>
                            <li>1 QB</li>
                            <li>2 RBs</li>
                            <li>2 WRs</li>
                            <li>1 TE</li>
                            <li>We may decide to not include this here later to make the page slimmer and less API heavy</li>
                        </ul>
                    </section>
        
                    <section className="column2">
                        <h4>Build Your Squad</h4>
                        <ul>
                            <li>Some Player Data Here<button type="button" className="selectbtn" onClick="selectPlayer()">Select</button></li>
                            <li>Some Player Data Here<button type="button" className="selectbtn" onClick="selectPlayer()">Select</button></li>
                            <li>Some Player Data Here<button type="button" className="selectbtn" onClick="selectPlayer()">Select</button></li>
                            <li>Some Player Data Here<button type="button" className="selectbtn" onClick="selectPlayer()">Select</button></li>
                            <li>Some Player Data Here<button type="button" className="selectbtn" onClick="selectPlayer()">Select</button></li>
                            <li>Some Player Data Here<button type="button" className="selectbtn" onClick="selectPlayer()">Select</button></li>
                            <li>Some Player Data Here<button type="button" className="selectbtn" onClick="selectPlayer()">Select</button></li>
                        </ul>
                    </section>
                </section>
            </div>
        </DefaultLayout>
    );
}

module.exports = SquadSelection;