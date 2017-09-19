import React, { Component } from 'react';
import '../App.css';

class PlayBar extends Component {
  render() {
    return (
      <div className="playbar">
        <ul className="buttonbar">
          <li><button onClick={this.props.start}>Run</button></li>
          <li><button>Pause</button></li>
          <li><button>Clear</button></li>
        </ul>
      </div>
    );
  }
}

export default PlayBar;
