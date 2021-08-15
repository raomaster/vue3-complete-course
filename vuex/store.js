import { createStore } from "vuex";
import { testPosts } from '../microblog/testPosts.js'

const delay = () => new Promise(res => setTimeout(res, 100))

//modules

const posts = {
    namespaced: true,
    state() {
        return {
            postId: null,
            posts: []
        }
    },
    mutations: {
        setPostId(state, postId) {
            state.postId = postId
            console.log(state.postId)
        },
        setPosts(state, posts) {
            state.posts = posts
        }

    },
    actions: {
        async fetchPosts(ctx, payload) {
            await delay()
            ctx.commit('setPosts', testPosts)
            console.log('LOG')
        }
    },

    getters: {
        currentPost(state) {
            return state.posts.find(x => {
              return x.id === state.postId
            })
          }
    }
}

export const store = createStore({
    modules: {
        posts
    }
})