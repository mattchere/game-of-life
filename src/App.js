import React, { Component } from 'react';
import './App.css';
import PlayBar from './components/PlayBar';
import Board from './components/Board';
import SettingsBar from './components/SettingsBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Array(70).fill(new Array(50).fill(false))
    }
  }
  render() {
    return (
      <div className="App">
        <PlayBar />
        <Board board={this.state.board} />
        <SettingsBar />
      </div>
    );
  }
}

export default App;
