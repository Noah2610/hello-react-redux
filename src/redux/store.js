import { createStore, combineReducers, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'

import { ADD_TODO, TOGGLE_TODO } from './actionTypes'

class Todo {
  constructor({ id, name, completed = false }) {
    this.id = id
    this.name = name
    this.completed = completed
  }
}

const todoMock = new Todo({
  id: 0,
  name: 'Example Todo',
  completed: true,
})

class State {
  constructor({ todos = [todoMock] } = {}) {
    this.todos = todos
  }
}

const initialState = new State()
// const initialState = {
//   todos: [
//     {
//       id: 0,
//       name: 'Example Todo',
//       completed: true,
//     },
//   ],
// }

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, name } = action.payload
      return new State({
        ...state,
        todos: [].concat(state.todos, new Todo({ id, name })),
      })
      // return {
      //   ...state,
      //   todos: [].concat(state.todos, new Todo({ id, name })),
      // }
    }

    case TOGGLE_TODO: {
      const targetId = action.payload.id
      return new State({
        ...state,
        todos: state.todos.map(
          todo =>
            new Todo({
              ...todo,
              completed:
                todo.id === targetId ? !todo.completed : todo.completed,
            })
        ),
      })
      // return {
      //   ...state,
      //   todos: state.todos.map(todo => ({
      //     ...todo,
      //     completed: todo.id === targetId ? !todo.completed : todo.completed,
      //   })),
      // }
    }

    default:
      return state
  }
}

// export default createStore(combineReducers({ /* ... reducer functions ... */ }))
// export default createStore(reducer, initialState, applyMiddleware(logger))

function configureStore(state = initialState) {
  const store = createStore(
    reducer,
    state,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store
}

export default configureStore
