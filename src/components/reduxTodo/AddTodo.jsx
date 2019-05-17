import React from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../../store/actions'

class AddTodo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <h2>Add a new todo entry...</h2>
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo)
