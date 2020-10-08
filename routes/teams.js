var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  const environment = process.env.NODE_ENV || 'development';
  console.log("ENV: ", environment);
  var url = 'http://cc-fantasy-football.azurewebsites.net/api/teams';
  if(environment == 'development') url = 'https://cc-fantasy-football.azurewebsites.net/api/teams';

  request(url, function (err, response, body) {
    if (err || response.statusCode !== 200) {
      return res.render('error', { title: 'Fantasy Football', message: JSON.stringify(response)});
    }

    res.render('teams', { title : 'Fantasy Football', teams : JSON.parse(body).data });
  });

  // fetch(url)
	// .then(result => {
  //   console.log("RESULT: ", result);
  //   return result.json()
  // })
	// .then(data=> {
  //   console.log("DATA: ", data);
	//   res.render('teams', { title : 'Fantasy Football', teams : JSON.parse(data).data });
	// })
	// .catch(err => {
	// 	res.render('error', { title: 'Fantasy Football', message: 'message'});
	// });
});

module.exports = router;
