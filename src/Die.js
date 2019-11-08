import React, { Component } from "react"
import "./Die.css"

class Die extends Component {
  static defaultProps = {
    numberWords: ["one", "two", "three", "four", "five", "six"]
  }

  handleClick = _ => {
    this.props.handleClick(this.props.idx)
  }

  render() {
    const { numberWords, locked, val, disabled } = this.props
    let classes = `Die fas fa-5x fa-dice-${numberWords[val - 1]} ${locked && "Die-locked"}`
    return (
      <i
        className={classes}
        onClick={this.handleClick}
        disabled={disabled}
      >
      </i>
    )
  }
}

export default Die
