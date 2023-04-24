import vuex, { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      {
        id: 1,
        title: 'One',
        done: false,
        searched: true
      },
      {
        id: 2,
        title: 'Two',
        done: false,
        searched: true
      },
      {
        id: 3,
        title: 'Three',
        done: false,
        searched: true
      },
    ]
  },
  getters: {
    allTodos :(state)=> state.todos,
  },
  actions: {
    addTodo({commit}, todo) {
      commit('add_todo', todo);
    },
    deleteTodo({commit}, id) {
      commit('delete_todo', id);
    },
    toggleTodo({commit}, id) {
      commit('toggle_todo', id);
    },
    searchTodo({commit}, search) {
      commit('search_todo', search);
    }
  },
  mutations: {
    add_todo(state,todo) {
      state.todos.push(todo);
    },
    delete_todo(state, id) {
      state.todos = state.todos.filter(todo=> todo.id !== id)
    },
    toggle_todo(state, id) {
      const checkedTodo = state.todos.find(todo => todo.id === id)
      checkedTodo.done = checkedTodo.done === false;
    },
    search_todo(state, search) {
      const filtered = state.todos.filter(todo => {
        return todo.title.toLowerCase().includes(search.toLowerCase())

      })
      state.todos.forEach(todo => todo.searched = false)
      filtered.forEach(todo => todo.searched = true);
    }
  },
  modules: {
  }
})
