/**
 * Created by anthony on 14/01/15.
 */

var http = require('http');
var map = require('through2-map');

var server = http.createServer(function (req, res) {
    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res);
});

server.listen(process.argv[2]);