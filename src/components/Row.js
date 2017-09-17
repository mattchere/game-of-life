import React, { Component } from 'react';
import '../App.css';
import Cell from './Cell';

class Row extends Component {
  render() {
    return (
      <div className="row">
        {this.props.row.map((c, i) => 
          <Cell 
            key={i}
            id={String(this.props.id) + ',' + String(i)}
            show={c}
            change={this.props.change}
          />)}
      </div>
    );
  }
}

export default Row;
