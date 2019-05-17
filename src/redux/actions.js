// import { ADD_TODO, TOGGLE_TODO } from './actionTypes'
import { ACTION_RUN_FUNCTION_NAME, State, Todo } from './index'

// let nextTodoId = 0

export const addTodo = todoName => ({
  type: 'ADD_TODO',
  [ACTION_RUN_FUNCTION_NAME]: state => {
    const nextId = state.todos.reduce((highestId = 0, todo) =>
      todo.id > highestId ? todo.id : highestId
    )
    return {
      todos: [].concat(state.todos, new Todo({ id: nextId, name: todoName })),
    }
  },
})
// type: ADD_TODO,
// payload: {
//   id: ++nextTodoId,
//   name: todoName,
// },

export const toggleTodo = targetId => ({
  type: 'TOGGLE_TODO',
  [ACTION_RUN_FUNCTION_NAME]: state => {
    return {
      todos: state.todos.map(
        todo =>
          new Todo({
            ...todo,
            completed: todo.id === targetId ? !todo.completed : todo.completed,
          })
      ),
    }
  },
})
// type: TOGGLE_TODO,
// payload: {
//   id: todoId,
// },
