/**
 * Created by anthony on 13/01/15.
 */

var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function (socket) {
    socket.end(strftime('%F %R', new Date()));
});

server.listen(process.argv[2]);