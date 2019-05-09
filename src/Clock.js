import React, { Component } from "react";

class Clock extends Component {
  state = {
    date: new Date()
  };
  componentDidMount() {
    this.timerID = setInterval(() => this.updateClock(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  updateClock() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <h3>{this.state.date.toLocaleTimeString()}</h3>
      </div>
    );
  }
}
export default Clock;