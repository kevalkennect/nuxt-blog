import Vuex from "vuex";
import axios from "axios";
const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
    },
    actions: {
      nuxtServerInit(vueXcontext, context) {
        return axios
          .get("https://nuxt-blog-5d708-default-rtdb.firebaseio.com/posts.json")
          .then((res) => {
            const postArr = [];
            for (const key in res.data) {
              postArr.push({
                ...res.data[key],
                id: key,
              });
            }
            vueXcontext.commit("setPosts", postArr);
          })
          .catch((err) => {
            context.error(err);
          });
      },
      setPosts(vueXcontext, posts) {
        vueXcontext.commit("setPosts", posts);
      },
    },
    getters: {
      loadedPost(state) {
        return state.loadedPosts;
      },
    },
  });
};

export default createStore;
