import React, { Component } from 'react';
import Header from './Components/Header.js'
import Form from './Components/Form.js';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="container pure-g">
            <Form ></Form>
        </div>
      </div>
    );
  }
}

export default App;
