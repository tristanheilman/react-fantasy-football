var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

router.get('/', async function(req, res, next) {
    var url = 'http://localhost:3000/api/players';
    if(process.env.NODE_ENV != 'development') {
        url = 'https://cc-fantasy-football.azurewebsites.net/api/players';
    }

    const queryResult = await fetch(url)
    .then(response => response.json())
    .then(result => {
        return {status: 200, data: result.data};
    })
    .catch(error => {
        console.log("ERROR: ", error);
        return {status: 500, data: []};
    });

    if(queryResult.status == 200) {
        res.render('players', { title : 'Fantasy Football', players : queryResult.data });
    } else {
        res.render('error', { message : queryResult.data });
    }
});

router.post('/search', async function(req, res, next) {
    var url = 'http://localhost:3000/api/players/search';
    if(process.env.NODE_ENV != 'development') {
        url = 'https://cc-fantasy-football.azurewebsites.net/api/players/search';
    }

    const queryResult = await fetch(url)
    .then(response => response.json())
    .then(result => {
        return {status: 200, data: result.data};
    })
    .catch(error => {
        console.log("ERROR: ", error);
        return {status: 500, data: []};
    });

    if(queryResult.status == 200) {
        res.render('players', { title : 'Fantasy Football', players : queryResult.data });
    } else {
        res.render('error', { message : queryResult.data });
    }
});

router.get('/position-desc', async function(req, res, next) {
    var url = 'http://localhost:3000/api/players/position-desc';
    if(process.env.NODE_ENV != 'development') {
        url = 'https://cc-fantasy-football.azurewebsites.net/api/players/position-desc';
    }

    const queryResult = await fetch(url)
    .then(response => response.json())
    .then(result => {
        return {status: 200, data: result.data};
    })
    .catch(error => {
        console.log("ERROR: ", error);
        return {status: 500, data: []};
    });

    if(queryResult.status == 200) {
        res.render('players', { title : 'Fantasy Football', players : queryResult.data });
    } else {
        res.render('error', { message : queryResult.data });
    }
});

router.get('/position-asc', async function(req, res, next) {
    var url = 'http://localhost:3000/api/players/position-asc';
    if(process.env.NODE_ENV != 'development') {
        url = 'https://cc-fantasy-football.azurewebsites.net/api/players/position-asc';
    }

    const queryResult = await fetch(url)
    .then(response => response.json())
    .then(result => {
        return {status: 200, data: result.data};
    })
    .catch(error => {
        console.log("ERROR: ", error);
        return {status: 500, data: []};
    });

    if(queryResult.status == 200) {
        res.render('players', { title : 'Fantasy Football', players : queryResult.data });
    } else {
        res.render('error', { message : queryResult.data });
    }
});

router.get('/first-desc', async function(req, res, next) {
    var url = 'http://localhost:3000/api/players/first-desc';
    if(process.env.NODE_ENV != 'development') {
        url = 'https://cc-fantasy-football.azurewebsites.net/api/players/first-desc';
    }

    const queryResult = await fetch(url)
    .then(response => response.json())
    .then(result => {
        return {status: 200, data: result.data};
    })
    .catch(error => {
        console.log("ERROR: ", error);
        return {status: 500, data: []};
    });

    if(queryResult.status == 200) {
        res.render('players', { title : 'Fantasy Football', players : queryResult.data });
    } else {
        res.render('error', { message : queryResult.data });
    }
});

router.get('/first-asc', async function(req, res, next) {
    var url = 'http://localhost:3000/api/players/first-asc';
    if(process.env.NODE_ENV != 'development') {
        url = 'https://cc-fantasy-football.azurewebsites.net/api/players/first-asc';
    }

    const queryResult = await fetch(url)
    .then(response => response.json())
    .then(result => {
        return {status: 200, data: result.data};
    })
    .catch(error => {
        console.log("ERROR: ", error);
        return {status: 500, data: []};
    });

    if(queryResult.status == 200) {
        res.render('players', { title : 'Fantasy Football', players : queryResult.data });
    } else {
        res.render('error', { message : queryResult.data });
    }
});

router.get('/last-desc', async function(req, res, next) {
    var url = 'http://localhost:3000/api/players/last-desc';
    if(process.env.NODE_ENV != 'development') {
        url = 'https://cc-fantasy-football.azurewebsites.net/api/players/last-desc';
    }

    const queryResult = await fetch(url)
    .then(response => response.json())
    .then(result => {
        return {status: 200, data: result.data};
    })
    .catch(error => {
        console.log("ERROR: ", error);
        return {status: 500, data: []};
    });

    if(queryResult.status == 200) {
        res.render('players', { title : 'Fantasy Football', players : queryResult.data });
    } else {
        res.render('error', { message : queryResult.data });
    }
});

router.get('/last-asc', async function(req, res, next) {
    var url = 'http://localhost:3000/api/players/last-asc';
    if(process.env.NODE_ENV != 'development') {
        url = 'https://cc-fantasy-football.azurewebsites.net/api/players/last-asc';
    }

    const queryResult = await fetch(url)
    .then(response => response.json())
    .then(result => {
        return {status: 200, data: result.data};
    })
    .catch(error => {
        console.log("ERROR: ", error);
        return {status: 500, data: []};
    });

    if(queryResult.status == 200) {
        res.render('players', { title : 'Fantasy Football', players : queryResult.data });
    } else {
        res.render('error', { message : queryResult.data });
    }
});

router.get('/passyrds-desc', async function(req, res, next) {
    var url = 'http://localhost:3000/api/players/passyrds-desc';
    if(process.env.NODE_ENV != 'development') {
        url = 'https://cc-fantasy-football.azurewebsites.net/api/players/passyrds-desc';
    }

    const queryResult = await fetch(url)
    .then(response => response.json())
    .then(result => {
        return {status: 200, data: result.data};
    })
    .catch(error => {
        console.log("ERROR: ", error);
        return {status: 500, data: []};
    });

    if(queryResult.status == 200) {
        res.render('players', { title : 'Fantasy Football', players : queryResult.data });
    } else {
        res.render('error', { message : queryResult.data });
    }
});

router.get('/passyrds-asc', async function(req, res, next) {
    var url = 'http://localhost:3000/api/players/passyrds-asc';
    if(process.env.NODE_ENV != 'development') {
        url = 'https://cc-fantasy-football.azurewebsites.net/api/players/passyrds-asc';
    }

    const queryResult = await fetch(url)
    .then(response => response.json())
    .then(result => {
        return {status: 200, data: result.data};
    })
    .catch(error => {
        console.log("ERROR: ", error);
        return {status: 500, data: []};
    });

    if(queryResult.status == 200) {
        res.render('players', { title : 'Fantasy Football', players : queryResult.data });
    } else {
        res.render('error', { message : queryResult.data });
    }
});

router.get('/rushyrds-desc', async function(req, res, next) {
    var url = 'http://localhost:3000/api/players/rushyrds-desc';
    if(process.env.NODE_ENV != 'development') {
        url = 'https://cc-fantasy-football.azurewebsites.net/api/players/rushyrds-desc';
    }

    const queryResult = await fetch(url)
    .then(response => response.json())
    .then(result => {
        return {status: 200, data: result.data};
    })
    .catch(error => {
        console.log("ERROR: ", error);
        return {status: 500, data: []};
    });

    if(queryResult.status == 200) {
        res.render('players', { title : 'Fantasy Football', players : queryResult.data });
    } else {
        res.render('error', { message : queryResult.data });
    }
});

router.get('/rushyrds-asc', async function(req, res, next) {
    var url = 'http://localhost:3000/api/players/rushyrds-asc';
    if(process.env.NODE_ENV != 'development') {
        url = 'https://cc-fantasy-football.azurewebsites.net/api/players/rushyrds-asc';
    }

    const queryResult = await fetch(url)
    .then(response => response.json())
    .then(result => {
        return {status: 200, data: result.data};
    })
    .catch(error => {
        console.log("ERROR: ", error);
        return {status: 500, data: []};
    });

    if(queryResult.status == 200) {
        res.render('players', { title : 'Fantasy Football', players : queryResult.data });
    } else {
        res.render('error', { message : queryResult.data });
    }
});

router.get('/rushatt-desc', async function(req, res, next) {
    var url = 'http://localhost:3000/api/players/rushatt-desc';
    if(process.env.NODE_ENV != 'development') {
        url = 'https://cc-fantasy-football.azurewebsites.net/api/players/rushatt-desc';
    }

    const queryResult = await fetch(url)
    .then(response => response.json())
    .then(result => {
        return {status: 200, data: result.data};
    })
    .catch(error => {
        console.log("ERROR: ", error);
        return {status: 500, data: []};
    });

    if(queryResult.status == 200) {
        res.render('players', { title : 'Fantasy Football', players : queryResult.data });
    } else {
        res.render('error', { message : queryResult.data });
    }
});

router.get('/rushatt-asc', async function(req, res, next) {
    var url = 'http://localhost:3000/api/players/rushatt-asc';
    if(process.env.NODE_ENV != 'development') {
        url = 'https://cc-fantasy-football.azurewebsites.net/api/players/rushatt-asc';
    }

    const queryResult = await fetch(url)
    .then(response => response.json())
    .then(result => {
        return {status: 200, data: result.data};
    })
    .catch(error => {
        console.log("ERROR: ", error);
        return {status: 500, data: []};
    });

    if(queryResult.status == 200) {
        res.render('players', { title : 'Fantasy Football', players : queryResult.data });
    } else {
        res.render('error', { message : queryResult.data });
    }
});

router.get('/rec-desc', async function(req, res, next) {
    var url = 'http://localhost:3000/api/players/rec-desc';
    if(process.env.NODE_ENV != 'development') {
        url = 'https://cc-fantasy-football.azurewebsites.net/api/players/rec-desc';
    }

    const queryResult = await fetch(url)
    .then(response => response.json())
    .then(result => {
        return {status: 200, data: result.data};
    })
    .catch(error => {
        console.log("ERROR: ", error);
        return {status: 500, data: []};
    });

    if(queryResult.status == 200) {
        res.render('players', { title : 'Fantasy Football', players : queryResult.data });
    } else {
        res.render('error', { message : queryResult.data });
    }
});

router.get('/rec-asc', async function(req, res, next) {
    var url = 'http://localhost:3000/api/players/rec-asc';
    if(process.env.NODE_ENV != 'development') {
        url = 'https://cc-fantasy-football.azurewebsites.net/api/players/rec-asc';
    }

    const queryResult = await fetch(url)
    .then(response => response.json())
    .then(result => {
        return {status: 200, data: result.data};
    })
    .catch(error => {
        console.log("ERROR: ", error);
        return {status: 500, data: []};
    });

    if(queryResult.status == 200) {
        res.render('players', { title : 'Fantasy Football', players : queryResult.data });
    } else {
        res.render('error', { message : queryResult.data });
    }
});

router.get('/recyrds-desc', async function(req, res, next) {
    var url = 'http://localhost:3000/api/players/recyrds-desc';
    if(process.env.NODE_ENV != 'development') {
        url = 'https://cc-fantasy-football.azurewebsites.net/api/players/recyrds-desc';
    }

    const queryResult = await fetch(url)
    .then(response => response.json())
    .then(result => {
        return {status: 200, data: result.data};
    })
    .catch(error => {
        console.log("ERROR: ", error);
        return {status: 500, data: []};
    });

    if(queryResult.status == 200) {
        res.render('players', { title : 'Fantasy Football', players : queryResult.data });
    } else {
        res.render('error', { message : queryResult.data });
    }
});

router.get('/recyrds-asc', async function(req, res, next) {
    var url = 'http://localhost:3000/api/players/recyrds-asc';
    if(process.env.NODE_ENV != 'development') {
        url = 'https://cc-fantasy-football.azurewebsites.net/api/players/recyrds-asc';
    }

    const queryResult = await fetch(url)
    .then(response => response.json())
    .then(result => {
        return {status: 200, data: result.data};
    })
    .catch(error => {
        console.log("ERROR: ", error);
        return {status: 500, data: []};
    });

    if(queryResult.status == 200) {
        res.render('players', { title : 'Fantasy Football', players : queryResult.data });
    } else {
        res.render('error', { message : queryResult.data });
    }
});

router.get('/tds-desc', async function(req, res, next) {
    var url = 'http://localhost:3000/api/players/tds-desc';
    if(process.env.NODE_ENV != 'development') {
        url = 'https://cc-fantasy-football.azurewebsites.net/api/players/tds-desc';
    }

    const queryResult = await fetch(url)
    .then(response => response.json())
    .then(result => {
        return {status: 200, data: result.data};
    })
    .catch(error => {
        console.log("ERROR: ", error);
        return {status: 500, data: []};
    });

    if(queryResult.status == 200) {
        res.render('players', { title : 'Fantasy Football', players : queryResult.data });
    } else {
        res.render('error', { message : queryResult.data });
    }
});

router.get('/tds-asc', async function(req, res, next) {
    var url = 'http://localhost:3000/api/players/tds-asc';
    if(process.env.NODE_ENV != 'development') {
        url = 'https://cc-fantasy-football.azurewebsites.net/api/players/tds-asc';
    }

    const queryResult = await fetch(url)
    .then(response => response.json())
    .then(result => {
        return {status: 200, data: result.data};
    })
    .catch(error => {
        console.log("ERROR: ", error);
        return {status: 500, data: []};
    });

    if(queryResult.status == 200) {
        res.render('players', { title : 'Fantasy Football', players : queryResult.data });
    } else {
        res.render('error', { message : queryResult.data });
    }
});

router.get('/cmpperc-desc', async function(req, res, next) {
    var url = 'http://localhost:3000/api/players/cmpperc-desc';
    if(process.env.NODE_ENV != 'development') {
        url = 'https://cc-fantasy-football.azurewebsites.net/api/players/cmpperc-desc';
    }

    const queryResult = await fetch(url)
    .then(response => response.json())
    .then(result => {
        return {status: 200, data: result.data};
    })
    .catch(error => {
        console.log("ERROR: ", error);
        return {status: 500, data: []};
    });

    if(queryResult.status == 200) {
        res.render('players', { title : 'Fantasy Football', players : queryResult.data });
    } else {
        res.render('error', { message : queryResult.data });
    }
});

router.get('/cmpperc-asc', async function(req, res, next) {
    var url = 'http://localhost:3000/api/players/cmpperc-asc';
    if(process.env.NODE_ENV != 'development') {
        url = 'https://cc-fantasy-football.azurewebsites.net/api/players/cmpperc-asc';
    }

    const queryResult = await fetch(url)
    .then(response => response.json())
    .then(result => {
        return {status: 200, data: result.data};
    })
    .catch(error => {
        console.log("ERROR: ", error);
        return {status: 500, data: []};
    });

    if(queryResult.status == 200) {
        res.render('players', { title : 'Fantasy Football', players : queryResult.data });
    } else {
        res.render('error', { message : queryResult.data });
    }
});

router.get('/int-desc', async function(req, res, next) {
    var url = 'http://localhost:3000/api/players/int-desc';
    if(process.env.NODE_ENV != 'development') {
        url = 'https://cc-fantasy-football.azurewebsites.net/api/players/int-desc';
    }

    const queryResult = await fetch(url)
    .then(response => response.json())
    .then(result => {
        return {status: 200, data: result.data};
    })
    .catch(error => {
        console.log("ERROR: ", error);
        return {status: 500, data: []};
    });

    if(queryResult.status == 200) {
        res.render('players', { title : 'Fantasy Football', players : queryResult.data });
    } else {
        res.render('error', { message : queryResult.data });
    }
});

router.get('/int-asc', async function(req, res, next) {
    var url = 'http://localhost:3000/api/players/int-asc';
    if(process.env.NODE_ENV != 'development') {
        url = 'https://cc-fantasy-football.azurewebsites.net/api/players/int-asc';
    }

    const queryResult = await fetch(url)
    .then(response => response.json())
    .then(result => {
        return {status: 200, data: result.data};
    })
    .catch(error => {
        console.log("ERROR: ", error);
        return {status: 500, data: []};
    });

    if(queryResult.status == 200) {
        res.render('players', { title : 'Fantasy Football', players : queryResult.data });
    } else {
        res.render('error', { message : queryResult.data });
    }
});

router.get('/gp-desc', async function(req, res, next) {
    var url = 'http://localhost:3000/api/players/gp-desc';
    if(process.env.NODE_ENV != 'development') {
        url = 'https://cc-fantasy-football.azurewebsites.net/api/players/gp-desc';
    }

    const queryResult = await fetch(url)
    .then(response => response.json())
    .then(result => {
        return {status: 200, data: result.data};
    })
    .catch(error => {
        console.log("ERROR: ", error);
        return {status: 500, data: []};
    });

    if(queryResult.status == 200) {
        res.render('players', { title : 'Fantasy Football', players : queryResult.data });
    } else {
        res.render('error', { message : queryResult.data });
    }
});

router.get('/gp-asc', async function(req, res, next) {
    var url = 'http://localhost:3000/api/players/gp-asc';
    if(process.env.NODE_ENV != 'development') {
        url = 'https://cc-fantasy-football.azurewebsites.net/api/players/gp-ascs';
    }

    const queryResult = await fetch(url)
    .then(response => response.json())
    .then(result => {
        return {status: 200, data: result.data};
    })
    .catch(error => {
        console.log("ERROR: ", error);
        return {status: 500, data: []};
    });

    if(queryResult.status == 200) {
        res.render('players', { title : 'Fantasy Football', players : queryResult.data });
    } else {
        res.render('error', { message : queryResult.data });
    }
});

module.exports = router;
