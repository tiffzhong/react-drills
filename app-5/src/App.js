import React, { Component } from 'react';
import './App.css';
import Image from './Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={"https://http.cat/404"} />
      </div>
    );
  }
}

export default App;
