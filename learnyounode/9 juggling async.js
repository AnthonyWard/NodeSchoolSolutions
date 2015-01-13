/**
 * Created by Anthony on 13/01/2015.
 */

var http = require('http');
//var async = require('async');

var leResults = [];

var inputs = [process.argv[2], process.argv[3], process.argv[4]],
    action = function (url, callback) {

        http.get(url, function (res) {

            var fullResponse = '';

            res.setEncoding('utf8');
            res.on("data", function (chunk) {
                fullResponse += chunk;
            });
            res.on("end", function () {
                callback(null, fullResponse);
            });
            res.on("error", callback);

        }).on('error', callback);
    },
    finished = function (err, result) {

        if (err) console.log(result);

        result.forEach(function (res) {
            console.log(res)
        });
    };

for (var i = 0; i < inputs.length; i++) {

    console.log()

    action(inputs[i], function (err, res) {
        leResults[i] = res;
        if (i = inputs.length - 1) finished(null, leResults);
    });
}


//async.map(inputs, action, finished);