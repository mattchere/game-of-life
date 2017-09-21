import React, { Component } from 'react';
import '../App.css';

class GenerationBar extends Component {
  render() {
    return (
      <div className="generation">
        <p>Generation: {this.props.gen}</p>
      </div>
    );
  }
}

export default GenerationBar;
