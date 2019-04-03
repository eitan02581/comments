import Vue from 'vue'
import Vuex from 'vuex'
import CommentService from './services/Comment-service.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    comments: [],
  },
  getters: {
    comments(state) {
      return state.comments
    }
  },
  mutations: {
    setComments(state, { comments }) {
      state.comments = comments
    },
    addComment(state, { comment }) {
      state.comments.push(comment)
    }
  },
  actions: {
    getComments({ commit }, { filterBy }) {
      CommentService.getQuery(filterBy).then((comments) => {
        console.log('hett', comments);
        commit({ type: 'setComments', comments })

      })
    },
    addNewComment({ commit }, { comment }) {
      CommentService.addComment(comment).then((comment) => {
        commit({ type: 'addComment', comment })
      })
    }
  }
})
