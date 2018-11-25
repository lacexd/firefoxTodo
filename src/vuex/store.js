import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import uniqid from 'uniqid'

Vue.use(Vuex)

const STORAGE_KEY = 'vue-js-todo-P7oZi9sL'
const initObject = [{
    name: 'Work todos',
    id: uniqid(),
    todos: [{
      title: '',
      id: uniqid()
    }]
  }, {
    name: 'Household chores',
    id: uniqid(),
    todos: [{
      title: '',
      id: uniqid()
    }]
}]
const store = new Vuex.Store({
  state: {
    todos: localStorage.getItem(STORAGE_KEY) ? JSON.parse(localStorage.getItem(STORAGE_KEY)) : JSON.parse(JSON.stringify(initObject))
  },
  actions: {
    LOAD_TODO_LIST: ({ commit }) => {
        commit('SET_TODO_LIST', localStorage.getItem(STORAGE_KEY) ? JSON.parse(localStorage.getItem(STORAGE_KEY)) : JSON.parse(JSON.stringify(initObject)))
    },

    ADD_TASK: ({commit}, todo) => {
      commit('ADD_TASK', todo)
    },

    DELETE_TASK: ({commit}, taskAndTodo) => {
      commit('DELETE_TODO', taskAndTodo)
    },


  },
  mutations: {
    SET_TODO_LIST: (state, list) => {
      state.todos = list
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos))
    },

    ADD_TASK: (state, todo) => {
      const foundTodo = state.todos.find((el) => {
        return todo.id === el.id;
      });
      if(foundTodo){
        foundTodo.todos.push({
          title: '',
          id: uniqid()
        })
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos))
    },

    DELETE_TASK: (state, taskAndTodo) => {
      const foundTodo = state.todos.find((el) => {
        return taskAndTodo.todo.id === el.id;
      });
      foundTodo.todos = foundTodo.todos.filter(function(v){
        return v.id !== taskAndTodo.task.id
      })

      if(foundTodo.todos.length === 0) {
        foundTodo.todos.push(initObject)
      }
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
