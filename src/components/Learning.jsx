import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return { name: state.navigation.currentMain }
}

class Learning extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const element = <h1>Hello, {this.props.name}</h1>
    return element
  }
}

export default connect(
  mapStateToProps,
  null
)(Learning)
