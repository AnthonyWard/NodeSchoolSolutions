/**
 * Created by Anthony on 15/01/2015.
 */

var express = require('express');
var app = express();

app.get('/home', function (req, res) {
    res.send('Hello World!');
});

app.listen(process.argv[2]);