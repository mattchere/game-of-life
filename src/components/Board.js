import React, { Component } from 'react';
import '../App.css';
import Row from './Row';

class Board extends Component {
  render() {
    return (
      <div className="board">
        {this.props.board.map((row, i) => 
          <Row key={i} row={row} id={i} change={this.props.change} />)}
      </div>
    );
  }
}

export default Board;
