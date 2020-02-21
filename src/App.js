import React, { Component } from 'react'

const App = props => <Box title='click' />

class Box extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: this.props.title,
      color: [0, 0, 0]
    }

    this.ClickButton = this.ClickButton.bind(this)
  }

  ClickButton () {
    const new_color = [
      Math.floor(Math.random() * 55 + 200),
      Math.floor(Math.random() * 55 + 200),
      Math.floor(Math.random() * 55 + 200)
    ]

    this.setState({
      color: new_color
    })
  }

  render () {
    const title = this.state.title
    const color = this.state.color
    const style = {
      background: `rgb(${color[0]},${color[1]},${color[2]}`
    }

    return (
      <div style={style}>
        <button onClick={this.ClickButton}>{title}</button>
      </div>
    )
  }
}

export default App
