import React, { Component } from "react";
import Tasks from "./Tasks";
import AddTask from "./AddTask";
import Clock from "./Clock";

class App extends Component {
  state = {
    tasks: []
  };
  deleteTask = id => {
    const tasks = this.state.tasks.filter(task => {
      return task.id !== id;
    });
    this.setState({
      tasks
    });
  };
  addTask = task => {
    task.id = Math.random();
    let tasks = [...this.state.tasks, task];
    this.setState({
      tasks
    });
  };
  render() {
    return (
      <div className="App container">
        <h1>Tasks</h1>
        <Clock clock />
        <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} />
        <AddTask addTask={this.addTask} />
      </div>
    );
  }
}

export default App;