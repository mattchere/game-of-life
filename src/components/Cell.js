import React, { Component } from 'react';
import '../App.css';

class Cell extends Component {
  render() {
    return (
      <div className={this.props.show ? 'cell show' : 'cell'}>
      </div>
    );
  }
}

export default Cell;
