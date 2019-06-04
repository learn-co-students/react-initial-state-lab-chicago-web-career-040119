// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
    
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    // countDown = (init) => {
    //     let count = init
    //     do {
    //         setTimeout(
    //             this.setState({
    //                 secondsLeft: count -1
    //             }),
    //             1000
    //         )
    //     } while (count > 0)

    // }

    // render() {
    //     let explode = (time) => {
    //         if (time === 0) {
    //             return true
    //         } else {
    //             return false
    //         }
    //     }

    //     return (
    //       <div onClick={this.countDown(this.props.initialCount)}>
    //         {explode(this.state.secondsLeft) ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`}
    //       </div>
    //     )
    // }

    render() {
        const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
        
        return (
            <div>{message}</div>
        )
    }


}