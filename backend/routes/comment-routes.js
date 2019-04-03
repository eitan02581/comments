const commentService = require('../services/comment-service.js')

function addCommentRoutes(app) {

    // get all comments
    app.get('/comment', (req, res) => {
        let filterBy = req.query
        commentService.getQuery(filterBy).then((comments) => {
            res.json(comments)
        })
    })


    // add comment
    app.post('/comment/add', (req, res) => {
        let comment = req.body
        commentService.addComment(comment).then((comment) => {
            res.json(comment)
        })
    })
}

module.exports = addCommentRoutes

