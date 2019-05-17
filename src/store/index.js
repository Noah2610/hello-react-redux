import { createStore, combineReducers, applyMiddleware } from 'redux'

import { State, Todo } from './state'
import { ACTION_RUN_FUNCTION_NAME } from './actions'

function reducer(state, action) {
  if (
    action.hasOwnProperty(ACTION_RUN_FUNCTION_NAME) &&
    typeof action[ACTION_RUN_FUNCTION_NAME] === 'function'
  ) {
    return new State({ ...state, ...action[ACTION_RUN_FUNCTION_NAME](state) })
  } else {
    return state
  }
}

function configureStore(state = new State()) {
  const store = createStore(
    reducer,
    state,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store
}

export { ACTION_RUN_FUNCTION_NAME, configureStore }
