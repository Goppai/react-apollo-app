import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Dog} from './Dog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://www.apollographql.com/docs/react/recipes/testing.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Apollo
            <Dog name="Buck" />
          </a>
        </header>
      </div>
    );
  }
}

export default App;
