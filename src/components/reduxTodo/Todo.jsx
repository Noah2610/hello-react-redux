import React from 'react'
import styled from 'styled-components'

const TodoRow = styled.span`
  :hover {
    text-decoration: underline;
  }
  .is-completed {
    text-decoration: strike-through;
    color: red;
  }
`

function Todo(props) {
  const { id, name, completed, onClick } = props
  return (
    <TodoRow className={completed && 'is-completed'} onClick={onClick}>
      {name}
      {completed ? 'is completed' : 'NOT completed'}
    </TodoRow>
  )
}

export default Todo
