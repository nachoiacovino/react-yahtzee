import React, { Component } from 'react'
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    const { score, name, doScore, description } = this.props
    let check = score === undefined
    return (
      <tr className={`RuleRow RuleRow-${check ? "active" : "disabled"}`}  onClick={doScore}>
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{check ? description : score}</td>
      </tr>
    )
  }
}

export default RuleRow