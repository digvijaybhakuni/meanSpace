var mongodb = require('mongodb');

var uri = 'mongodb://localhost:27017/test';

mongodb.MongoClient.connect(uri, function (error, db) {
    if (error) {
        console.log('error', error);
        process.exit(1);
    }

    db.collection('user').insert({
        name: "Pankaj"
    }, function (err, res) {

        if (err) {
            console.log('err', err);
            process.exit(1);
        }

        console.log('result', res);


    });

    db.collection('user').find().toArray(function (error, docs) {
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