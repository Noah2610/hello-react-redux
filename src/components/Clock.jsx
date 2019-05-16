import React from 'react'

export class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({ date: new Date() })
  }

  render() {
    return (
      <h2>
        It is <FormattedDate date={this.state.date} />
      </h2>
    )
  }
}

export function FormattedDate(props) {
  return props.date.toLocaleTimeString()
}
