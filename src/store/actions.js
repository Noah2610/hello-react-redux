import { State, Todo } from './state'

export const ACTION_RUN_FUNCTION_NAME = 'run'

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
