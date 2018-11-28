import React, { Component } from "react";
import "./App.css";
import NewTask from "./NewTask";
import List from "./List";
import Todo from "./Todo";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: []
    };
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(task) {
    let newList = this.state.list.slice();
    newList.push(task);
    this.setState({
      list: newList
    });
  }

  render() {
    let list = this.state.list.map((el, i) => {
      return <Todo key={i} />;
    });
    return (
      <div className="App">
        <h1>My To Do List</h1>
        <NewTask add={this.handleAddTask} />
        <List tasks={this.state.list} />
      </div>
    );
  }
}

export default App;
