import { createStore, combineReducers, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'

import { ADD_TODO, TOGGLE_TODO } from './actionTypes'

const initialState = {
  todos: [
    {
      id: 0,
      name: 'Example Todo',
      completed: true,
    },
  ],
}

/*
a todo object looks like this:
  {
    id: 0,
    name: 'My Todo',
    completed: false,
  }
*/

function reducer(state = initialState, action) {
  const newState = { ...state }

  switch (action.type) {
    case ADD_TODO: {
      const { id, name } = action.payload
      newState.todos.push({
        id,
        name,
        completed: false,
      })
      break
    }

    case TOGGLE_TODO: {
      const targetId = action.payload.id
      const targetTodo = newState.todos.find(todo => {
        return todo.id === targetId
      })
      // targetTodo.completed = !targecTodo.completed
      newState.todos.push(targetTodo)
      break
    }
  }

  return newState
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
