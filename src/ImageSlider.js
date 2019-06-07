// your ImageSlider code here!
import React from 'react'

export default class ImageSlider extends React.Component {
  state = { //set initial state
    currentSlideIndex: 0
  }
  render() {
    return(
      <div>
        <h1>I am on slide {this.state.currentSlideIndex}</h1>
      </div>
    )
  }
}
