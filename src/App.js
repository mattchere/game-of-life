import React, { Component } from 'react';
import './App.css';
import PlayBar from './components/PlayBar';
import Board from './components/Board';
import SettingsBar from './components/SettingsBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Array(50).fill(undefined).map(v => new Array(70).fill(false))
    }
    this.change = this.change.bind(this);
  }

  change(target) {
    const loc = target.id.split(',');
    const newBoard = this.state.board;
    newBoard[Number(loc[0])][Number([loc[1]])] = true;
    this.setState({
      board: newBoard
    })
  }

  render() {
    return (
      <div className="App">
        <PlayBar />
        <Board board={this.state.board} change={this.change} />
        <SettingsBar />
      </div>
    );
  }
}

export default App;
