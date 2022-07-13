const request = require('request');
var data = require('./data.json');

data.forEach(json => {

    request.post({
        headers: { 'content-type': 'application/json' },
        url: 'http://localhost:8000/teams',
        body: json,
        json: true
    }, function (error, response, body) {
        console.log(body);
    });

});