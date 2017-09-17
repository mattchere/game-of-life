import React, { Component } from 'react';
import '../App.css';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.change(event.target);
  }

  render() {
    return (
      <div 
        className={this.props.show ? 'cell show' : 'cell'} 
        id={this.props.id}
        onClick={this.handleClick}
      >
      </div>
    );
  }
}

export default Cell;
