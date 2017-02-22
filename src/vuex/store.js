import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const STORAGE_KEY = 'vue-js-todo-P7oZi9sL'
const store = new Vuex.Store({
  state: {
    todos: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[{title: ""}]')
  },
  actions: {
    LOAD_TODO_LIST: ({ commit }) => {
        commit('SET_TODO_LIST', JSON.parse(localStorage.getItem(STORAGE_KEY) || '[{"title": ""}]'))
    },

    ADD_TODO: ({commit}, todo) => {
      commit('ADD_TODO', todo)
    },

    DELETE_TODO: ({commit}, todo) => {
      commit('DELETE_TODO', todo)
    }
  },
  mutations: {
    SET_TODO_LIST: (state, list) => {
      state.todos = list
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos))
    },

    ADD_TODO: (state, todo) => {
      state.todos[state.todos.length - 1] = {
        title: todo
      }
      state.todos.push({
        title: ''
      })
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos))
    },

    DELETE_TODO: (state, todo) => {
      state.todos = state.todos.filter(function(v){
        return v.title !== todo
      })
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos))
    }
  },
  getters: {
      todos: (state) => {
        return state.todos;
    }
  }
})

export default store
