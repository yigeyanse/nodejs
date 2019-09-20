const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'student';

// Create a new MongoClient
const client = new MongoClient(url,{ useNewUrlParser: true, useUnifiedTopology: true});

// Use connect method to connect to the Server
client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName)

    insertDocuments(db, function() {
        findDocuments(db, function() {
            client.close();
        });
    });
});

const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('class');
    // Insert some documents
    collection.insertMany([
        {name : 1}, {name : 2}, {name : 3}
    ], function(err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });
}

const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('class');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs)
        callback(docs);
    });
}
