import React from 'react'
import { connect } from 'react-redux'

import { toggleTodo } from '../../redux/actions'
import Todo from './Todo.jsx'

class TodoEntries extends React.Component {
  constructor(props) {
    super(props)
    this.onTodoClick = this.onTodoClick.bind(this)
  }

  onTodoClick(event, todoId) {
    this.props.toggleTodo(todoId)
  }

  render() {
    const { todos } = this.props
    return (
      <ul>
        {todos && todos.length > 0
          ? todos.map(todo => {
              const { id, name, completed } = todo
              return (
                <li key={id}>
                  <Todo
                    id={id}
                    name={name}
                    completed={completed}
                    onClick={e => this.onTodoClick(e, id)}
                  />
                </li>
              )
            })
          : 'No todos!'}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: todoId => dispatch(toggleTodo(todoId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoEntries)
