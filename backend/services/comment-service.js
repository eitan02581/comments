const mongoService = require('./mongo-service.js')
const COMMENTS_COLLECTION = 'comments'

// const ObjectId = require('mongodb').ObjectId;
// 

async function getQuery(filterBy) {
    let queryToMongo = {}
    if (filterBy.search) {
        queryToMongo.message = new RegExp(filterBy.search, 'i');

        return mongoService.connect()
            .then(db => db.collection(COMMENTS_COLLECTION).find(queryToMongo).toArray())
    }
    return mongoService.connect()
        .then(db => db.collection(COMMENTS_COLLECTION).find({}).toArray())
}

async function addComment(comment) {

    var db = await mongoService.connect()
    db.collection(COMMENTS_COLLECTION).insertOne(comment)
    return comment
}


module.exports = {
    addComment,
    getQuery
} 