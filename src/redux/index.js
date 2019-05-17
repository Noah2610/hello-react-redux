import { createStore, combineReducers, applyMiddleware } from 'redux'

const ACTION_RUN_FUNCTION_NAME = 'run'

class Todo {
  constructor({ id, name, completed = false }) {
    this.id = id
    this.name = name
    this.completed = completed
  }
}

// TODO
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

function reducer(state, action) {
  if (
    action.hasOwnProperty(ACTION_RUN_FUNCTION_NAME) &&
    typeof action[ACTION_RUN_FUNCTION_NAME] === 'function'
  ) {
    return new State({ ...state, ...action[ACTION_RUN_FUNCTION_NAME](state) })
  } else {
    return state
  }

  // switch (typeof action) {
  //   case 'function':
  //     return new State({ ...state, ...action(state) })
  //   default: {
  //     console.log(typeof action)
  //     return state
  //   }
  // }
}

function configureStore(state = initialState) {
  const store = createStore(
    reducer,
    state,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store
}

export { ACTION_RUN_FUNCTION_NAME, configureStore, State, Todo }
