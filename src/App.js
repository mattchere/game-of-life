import React, { Component } from 'react';
import './App.css';
import PlayBar from './components/PlayBar';
import Board from './components/Board';
import SettingsBar from './components/SettingsBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PlayBar />
        <Board />
        <SettingsBar />
      </div>
    );
  }
}

export default App;
