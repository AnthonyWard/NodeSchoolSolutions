/**
 * Created by anthony on 14/01/15.
 */

var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'application/json'});

    var u = url.parse(req.url.toString(), true);
    var d = new Date();
    var result = {};

    if (u.pathname == '/api/parsetime') {

        d = new Date(u.query.iso);

        result = JSON.stringify({
            hour: d.getHours(),
            minute: d.getMinutes(),
            second: d.getSeconds()
        });

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(result);

    }

    else if (u.pathname == '/api/unixtime') {

        d = new Date(u.query.iso);

        result = JSON.stringify({
            unixtime: d.getTime()
        });

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(result);

    }

    else {

        res.writeHead(404);
        res.end();

    }
});

//console.info('Started on port ' + process.argv[2]);
server.listen(process.argv[2]);