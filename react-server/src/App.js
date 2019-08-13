import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { hi: ""}

  onButtonClick() {
    var request = axios.get('/hello');
    request.then(({data, status}) => {
      if (status === 200) {
        console.log(data);
      }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React with the
          </a>
          <button onClick={() => this.onButtonClick()}>Click the {this.state.hi}</button>
        </header>
      </div>
    );
  }
}

export default App;
