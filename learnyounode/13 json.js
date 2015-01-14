/**
 * Created by anthony on 14/01/15.
 */

var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    var u = url.parse(res.url, true);

    if (u.pathname == '/api/parsetime') {

    }

    if (u.pathname == '/api/parsetime' && u.query.iso) {

    }
});

server.listen(process.argv[2]);