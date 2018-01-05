// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// var obj = new ObjectID();

// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos')
    //     .find({
    //         _id: new ObjectID('5a4dd3d44812fa1ce094085f')
    //     })
    //     .toArray()
    //     .then((docs) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined, 4));
    //     }, (err) => {
    //         console.log('Unable to fetch todos > ', err)
    //     });

    // db.collection('Todos')
    //     .find()
    //     .count()
    //     .then((count) => {
    //         console.log(`Todos count : ${count}`);
    //     }, (err) => {
    //         console.log('Unable to fetch todos > ', err)
    //     });

    db.collection('Users')
        .find({
            location: 'Ismailia'
        })
        .count()
        .then((count) => {
            console.log(`Users from Ismailia are : ${count}`);
        }, (err) => {
            console.log('Unable to fetch users > ', err)
        })

    //db.close();
});