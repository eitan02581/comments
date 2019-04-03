var dbConn = null;

function connectToMongo() {
    if (dbConn) return Promise.resolve(dbConn);
    const MongoClient = require('mongodb').MongoClient;

    const url = 'mongodb+srv://yovelbecker:spotifood123@cluster0-blpj2.mongodb.net/test?retryWrites=true';
    const dbName = 'interview-comment';

    const client = new MongoClient(url, { useNewUrlParser: true });

    return client.connect()
        .then(client => {
            client.on('close', () => {
                dbConn = null;
            })
            dbConn = client.db(dbName)
            return dbConn;
        })
}

module.exports = {
    connect: connectToMongo
}
