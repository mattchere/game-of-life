import React, { Component } from 'react';
import '../App.css';

class PlayBar extends Component {
  render() {
    return (
      <div className="playbar">
        <ul className="buttonbar">
          <li><button onClick={this.props.start}>Run</button></li>
          <li><button onClick={this.props.pause}>Pause</button></li>
          <li><button onClick={this.props.clear}>Clear</button></li>
          <li><button onClick={this.props.random}>Random</button></li>
        </ul>
      </div>
    );
  }
}

export default PlayBar;
