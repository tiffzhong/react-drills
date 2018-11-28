import React, { Component } from "react";
import "./App.css";
import Todo from "./Todo";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      input: ""
    };
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleInputChange(value) {
    this.setState({
      input: value
    });
  }

  handleAddTask() {
    let newList = this.state.list.slice();
    newList.push(this.state.input);
    this.setState({
      list: newList,
      input: ""
    });
  }

  render() {
    let list = this.state.list.map((el, i) => {
      return <Todo key={i} task={el} />;
    });

    return (
      <div className="App">
        <h1>My To Do List</h1>
        <div>
          <input
            value={this.state.input}
            placeholder="New Task"
            onChange={e => this.handleInputChange(e.target.value)}
          />
          <button onClick={this.handleAddTask}>Add</button>
        </div>
        <br />
        {list}
      </div>
    );
  }
}

export default App;
