/**
 * Created by Anthony on 13/01/2015.
 */

var http = require('http');

var url = process.argv[2];
var data = '';

http.get(url, function(res) {

    res.setEncoding('utf8');
    res.on("data", function (chunk) {
        data += chunk;
    });
    res.on("end", function () {
        console.log(data.length);
        console.log(data);
    });
    res.on("error", console.error);

}).on('error', console.error);