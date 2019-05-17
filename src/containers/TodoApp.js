import React from 'react'
import styled from 'styled-components'

import TodoApp from '../components/TodoApp.jsx'
import Box from '../components/Box.jsx'

function TodoAppContainer(props) {
  return (
    <Box>
      <div className="App-header">Todo List</div>
      <TodoApp />
    </Box>
  )
}

export default TodoAppContainer
