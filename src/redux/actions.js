import { ADD_TODO, TOGGLE_TODO } from './actionTypes'

let nextTodoId = 0
export const addTodo = todoName => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    name: todoName,
  },
})

export const toggleTodo = todoId => ({
  type: TOGGLE_TODO,
  payload: {
    id: todoId,
  },
})
