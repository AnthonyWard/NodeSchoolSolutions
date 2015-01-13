/**
 * Created by Anthony on 13/01/2015.
 */
var http = require('http');

var url = process.argv[2];

http.get(url, function(res) {

    res.setEncoding('utf8');
    res.on("data", console.log);
    res.on("error", console.error);

}).on('error', console.error);