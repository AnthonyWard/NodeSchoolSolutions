/**
 * Created by Anthony on 06/01/2015.
 */
var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(dir, function (err, files) {
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        if (path.extname(file) == ext)
        {
            console.log(file);
        }
    }
});