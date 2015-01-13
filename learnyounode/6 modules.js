/**
 * Created by Anthony on 06/01/2015.
 */

var fileLister = require('./6 file lister');

fileLister(process.argv[2], process.argv[3], fileListerResult);

function fileListerResult(err, filteredFiles) {
    if (err) {
        console.log(err);
    }
    else {
        for (var i = 0; i < filteredFiles.length; i++) {
            console.log(filteredFiles[i]);
        }
    }
}