/**
 * Created by Anthony on 13/01/2015.
 */

var http = require('http');
var async = require('async');
var bl = require('bl');

var inputs = [process.argv[2], process.argv[3], process.argv[4]];

async.map(inputs, transform, logResults);

function transform(url, callback) {
    http.get(url, function (res) {
        res.pipe(bl(function (err, data) {
            callback(null, data.toString());
        }));
    });
}

function logResults(err, result) {
    if (err) console.error(result);
    result.forEach(function (res) {
        console.log(res)
    });
}
