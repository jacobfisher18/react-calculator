import React, { Component } from 'react';
import Calculator from './Components/Calculator';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Calculator</h1>
        <Calculator />
      </div>
    );
  }
}

export default App;
