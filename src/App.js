import React, { Component } from 'react';
import './App.css';
import List from './List';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      number: 6,
      listEnabled: true
    };
  }

  addToList = () => {
    const { number } = this.state;
    this.setState({
      number: number + 1
    });
  }

  removeFromList = () => {
    const { number } = this.state;
    this.setState({
      number: number - 1
    });
  }

  toggleList = () => {
    const { listEnabled } = this.state;
    this.setState({
      listEnabled: !listEnabled
    });
  }

  render() {
    const {number, listEnabled} = this.state;
    console.log('in app render');

    return (
      <div>
        {listEnabled && <List number={number} />}
        <button onClick={this.addToList}>
          Add
        </button>
        <button onClick={this.removeFromList}>
          Delete
        </button>
        <button onClick={this.toggleList}>
          toggleList
        </button>
      </div>
      );
  }
}

export default App;
