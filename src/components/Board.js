import React, { Component } from 'react';
import '../App.css';
import Cell from './Cell';

class Board extends Component {
  render() {
    return (
      <div className="board">
        {
          this.props.board.map((e, i1) =>
           e.map((c, i2) => <Cell key={Number(String(i1) + String(i2))} show={false} />))
        }

        
      </div>
    );
  }
}

export default Board;
