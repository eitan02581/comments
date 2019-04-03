const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

const addCommentRoute = require('./routes/comment-routes.js')


app.use(express.static('public'))
app.use(cors({
    origin: ['http://localhost:8080'],
    credentials: true // enable set cookie
}));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

addCommentRoute(app)


const PORT = process.env.PORT || 3007;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))