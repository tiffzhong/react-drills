import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleUserName(name){
    this.setState({
        username: name
    })
  }

  handlePassword(pass){
    this.setState({
        password: pass
    })
  }

  handleLogin(){
    alert(`Username: ${this.state.username} Password: ${this.state.password}`)
  }

  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.handleUserName(e.target.value)} type="text" />
        <input onChange={(e) => this.handlePassword(e.target.value)} type="text" />
        <button onClick={(e) => this.handleLogin(e.target.value) }>Login</button>
      </div>
    );
  }
}

export default App;
