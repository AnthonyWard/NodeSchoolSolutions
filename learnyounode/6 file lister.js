/**
 * Created by Anthony on 13/01/2015.
 */

var fs = require('fs');
var path = require('path');

module.exports = function (directory, extension, callback) {

    var filteredFiles = [];

    fs.readdir(directory, function (err, files) {

        if (err) return callback(err);

        filteredFiles = files.filter(function(file) {
            return path.extname(file) === '.' + extension;
        });

        return callback(null, filteredFiles);
    });
};
