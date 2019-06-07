// your Bomb code here!
import React from 'react'

export default class Bomb extends React.Component {
  constructor(props) {
    super()
    this.state = {
      secondsLeft: props.initialCount //the initial state set based on by passing props in the constructor
    }
  }
  render() {

    const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

    return(
      <div>
        {message}
      </div>
    )
  }
}
