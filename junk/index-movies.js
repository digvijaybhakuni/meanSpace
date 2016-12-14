var mongodb = require('mongodb');
var movies = require('./movies.data');

var uri = 'mongodb://localhost:27017/test';

mongodb.MongoClient.connect(uri, function (error, db) {
    if (error) {
        console.log('error', error);
        process.exit(1);
    }

    var insertCb = function (err, res) {

        if (err) {
            console.log('err', err);
            process.exit(1);
        }

        console.log('result', res);


    };

    /*
    db.collection('user').insert({
        name: "Pankaj"
    }, insertCb);
    */

    movies.forEach(function(m){
        db.collection('movies').insert(m, insertCb);
    });
    

    db.collection('movies').find().toArray(function (error, docs) {
        if (error) {
            console.log('error', error);
            process.exit(1);
        }

        //console.log('docs', docs);

        docs.forEach(function (doc) {

            console.log(JSON.stringify(doc))

        });

        process.exit(1);
    });
});