import React from 'react'

import AddTodo from './AddTodo.jsx'
import TodoEntries from './TodoEntries.jsx'

function TodoApp(props) {
  return (
    <div>
      <h1>TodoApp!</h1>
      <AddTodo />
      <TodoEntries />
    </div>
  )
}

export default TodoApp
