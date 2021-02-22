import React, { Component } from 'react'
import "../Row/Row.css";
import Cell from '../Cell/Cell';
class Row extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="row">
        <Cell id={this.props.id1} gameState={this.props.gameState} currentPlayer={this.props.currentPlayer} clickedDiv={this.props.clickedDiv} play={this.props.play} />
        <Cell id={this.props.id2} gameState={this.props.gameState} currentPlayer={this.props.currentPlayer} clickedDiv={this.props.clickedDiv} play={this.props.play} />
        <Cell id={this.props.id3} gameState={this.props.gameState} currentPlayer={this.props.currentPlayer} clickedDiv={this.props.clickedDiv} play={this.props.play} />
      </div>
    )
  }
}

export default Row;
