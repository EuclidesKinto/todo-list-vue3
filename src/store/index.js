import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: []
  },
  mutations: {
    storeTodos(state, payload){
      state.todos = payload
    }
  },
  getters: {
  },
  actions: {
    getTodos({commit}){
      return  axios.get('http://localhost:3000/todos')
                .then((response) =>{
                  commit('storeTodos', response.data);
                });
    }
  },
  modules: {
  }
})
