var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();

router.get('/', async function(req, res, next) {

    if(req.session.page_views){
        req.session.page_views++;
    } else {
        req.session.page_views = 1;
    }

    const gamesInProgressUrl = "https://api.sportsdata.io/v3/nfl/scores/json/AreAnyGamesInProgress?key=22f30d0cc8c04c6b897284cf457749e3";
    
    req.session.games_in_progress = await fetch(gamesInProgressUrl)
    .then(response => response.json())
    .then(result => {
        return result;
    })
    .catch(error => {
        return null;
    });

    console.log(req.session.games_in_progress);

    res.render('index', {
        title: 'Fantasy Football',
        page_views: req.session.page_views,
        user: req.session.user,
        games_in_progress: req.session.games_in_progress
    });
});

module.exports = router;
