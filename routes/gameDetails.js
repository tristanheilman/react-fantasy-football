var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

router.get('/', async function(req, res, next) {

    const upcomingDataUrl = "https://api.sportsdata.io/v3/nfl/scores/json/Timeframes/upcoming?key=22f30d0cc8c04c6b897284cf457749e3";
    const weekLastCompleted = "https://api.sportsdata.io/v3/nfl/scores/json/LastCompletedWeek?key=22f30d0cc8c04c6b897284cf457749e3";
    const gameOdds = "https://api.sportsdata.io/v3/nfl/odds/json/AlternateMarketGameOddsByWeek/2020/12?key=22f30d0cc8c04c6b897284cf457749e3";

    var homeUrl = 'http://localhost:3000/api/teams/home-teams';
    var awayUrl = 'http://localhost:3000/api/teams/away-teams';
    if(process.env.NODE_ENV != 'development') {
        homeUrl = 'https://cc-fantasy-football.azurewebsites.net/api/teams/home-teams';
        awayUrl = 'https://cc-fantasy-football.azurewebsites.net/api/teams/away-teams';
    }

    const awayQueryResult = await fetch(awayUrl)
    .then(response => response.json())
    .then(result => {
        return {status: 200, data: result.data};
    })
    .catch(error => {
        console.log("ERROR: ", error);
        return {status: 500, data: []};
    });

    const homeQueryResult = await fetch(homeUrl)
    .then(response => response.json())
    .then(result => {
        return {status: 200, data: result.data};
    })
    .catch(error => {
        console.log("ERROR: ", error);
        return {status: 500, data: []};
    });


    const upcomingDataResult = await fetch(upcomingDataUrl)
    .then(response => response.json())
    .then(result => {
        return {
            status: 200,
            data: result
        };
    })
    .catch(error => {
        return {
            status: 500,
            data: null
        };
    });

    const weekLastCompletedResult = await fetch(weekLastCompleted)
    .then(response => response.json())
    .then(result => {
        return {
            status: 200,
            week: result,
            season: 2020
        };
    })
    .catch(error => {
        return {
            status: 500,
            data: null
        };
    });

    const gameOddsResult = await fetch(gameOdds)
    .then(response => response.json())
    .then(result => {
        return {
            status: 200,
            week: result,
            season: 2020
        };
    })
    .catch(error => {
        return {
            status: 500,
            data: null
        };
    });

    const scoresLastWeek = "https://api.sportsdata.io/v3/nfl/scores/json/ScoresByWeek/" + weekLastCompletedResult.season + "/" + weekLastCompletedResult.week + "?key=22f30d0cc8c04c6b897284cf457749e3";
    const scoresLastWeekResult = await fetch(scoresLastWeek)
    .then(response => response.json())
    .then(result => {
        return {
            status: 200,
            data: result
        };
    })
    .catch(error => {
        return {
            status: 500,
            data: null
        };
    });

    const thisWeekNumber = weekLastCompletedResult.week+1;
    const scoresThisWeek = "https://api.sportsdata.io/v3/nfl/scores/json/ScoresByWeek/" + weekLastCompletedResult.season + "/" + thisWeekNumber + "?key=22f30d0cc8c04c6b897284cf457749e3";
    const scoresThisWeekResult = await fetch(scoresThisWeek)
    .then(response => response.json())
    .then(result => {
        return {
            status: 200,
            data: result
        };
    })
    .catch(error => {
        return {
            status: 500,
            data: null
        };
    });
    if(homeQueryResult.status == 200 && awayQueryResult.status == 200 && upcomingDataResult.status == 200 &&  scoresLastWeekResult.status == 200 && scoresThisWeekResult.status == 200) {

        let homeTeams = homeQueryResult.data;
        let awayTeams = awayQueryResult.data;
        let lastWeekScores = scoresLastWeekResult.data;
        let thisWeekScores = scoresThisWeekResult.data;


        //let tempArray1 = weekScores.map((item, i) => Object.assign({}, item, homeTeams[i]));
        //let tempArray2 = tempArray1.map((item, i) => Object.assign({}, item, awayTeams[i]));

        let lastWeekScoresMerged = [];

        for(let i=0; i<lastWeekScores.length; i++) {
            lastWeekScoresMerged.push({
                ...lastWeekScores[i],
                ...(homeTeams.find((itmInner) => itmInner.HomeTeam === lastWeekScores[i].HomeTeam))}
            );
        }

        let lastWeekScoresMergedAgain = [];

        for(let i=0; i<lastWeekScoresMerged.length; i++) {
            lastWeekScoresMergedAgain.push({
                ...lastWeekScoresMerged[i],
                ...(awayTeams.find((itmInner) => itmInner.AwayTeam === lastWeekScoresMerged[i].AwayTeam))}
            );
        }

        let thisWeekScoresMerged = [];

        for(let i=0; i<thisWeekScores.length; i++) {
            thisWeekScoresMerged.push({
                ...thisWeekScores[i],
                ...(homeTeams.find((itmInner) => itmInner.HomeTeam === thisWeekScores[i].HomeTeam))}
            );
        }

        let thisWeekScoresMergedAgain = [];

        for(let i=0; i<thisWeekScoresMerged.length; i++) {
            thisWeekScoresMergedAgain.push({
                ...thisWeekScoresMerged[i],
                ...(awayTeams.find((itmInner) => itmInner.AwayTeam === thisWeekScoresMerged[i].AwayTeam))}
            );
        }

        res.render('gameDetails', { title: 'Fantasy Football', upcomingData: upcomingDataResult.data[0], lastWeekScores: lastWeekScoresMergedAgain, thisWeekScores: thisWeekScoresMergedAgain});
    } else {
        res.render('error', { message: '' });
    }
});

module.exports = router;
