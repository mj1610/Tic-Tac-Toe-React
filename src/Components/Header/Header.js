import React, { Component } from 'react'

export class Header extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
      <h2>Tic Tac Toe</h2>
      <h3>Current Player: <span id="current-player" >{this.props.currentPlayer}</span></h3>
      </div>
    )
  }
}

export default Header
