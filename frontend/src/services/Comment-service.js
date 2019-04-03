import axios from 'axios'
const COMMENT_ROUTE = (process.env.NODE_ENV !== 'development') ? '/comment' : 'http://localhost:3007/comment'


function getQuery(filterBy) {
    console.log(filterBy);
    if (filterBy) {
        let filterQuery = `?search=${filterBy}`
        return axios.get(`${COMMENT_ROUTE}/${filterQuery}`).then((comments) => comments.data)
    }
    return axios.get(`${COMMENT_ROUTE}`).then((comments) => comments.data)

}

function addComment(comment) {
    comment.img = `https://api.adorable.io/avatars/57/${comment.email}`
    return axios.post(`${COMMENT_ROUTE}/add`, comment).then((comment) => comment.data)
}

export default {
    addComment,
    getQuery
}