import React, { useEffect } from 'react';


function getUsers(setTeams) {
    fetch(`/api/users`)
    .then((response) => response.json())
    .then(result => setTeams(result.data));
};

export function SampleComponent() {
    const [teams, setTeams] = React.useState([]);

    useEffect(() => {
        getUsers(setTeams);
    }, [])

    console.log("TEAMS: ", teams);

    return (
        <div>
        This is a sample component (edited)

        <ol>
        {teams.length > 0 ? teams.map((item, index) => <li key={index}>{item.team}</li>) : null}
        </ol>
        </div>
    );
}
