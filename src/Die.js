import React, { Component } from "react"
import "./Die.css"

class Die extends Component {
  static defaultProps = {
    numberWords: ["one", "two", "three", "four", "five", "six"],
    val: 5
  }

  handleClick = _ => {
    this.props.handleClick(this.props.idx)
  }

  render() {
    const { numberWords, locked, val, disabled, rolling } = this.props
    let classes = `Die fas fa-5x fa-dice-${numberWords[val - 1]} ${locked && "Die-locked"} ${rolling && "Die-rolling"}`
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
