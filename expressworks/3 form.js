/**
 * Created by Anthony on 15/01/2015.
 */

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/form', function (req, res) {
    res.end(req.body.str.split('').reverse().join(''));
});

app.listen(process.argv[2]);