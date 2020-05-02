import React, { Component } from "react";

class Counter extends Component {
    state = {
        count:0
    }
    styles = {
        fontSize:30,
        fontWeight: "bold",
    }
  render() {
    return (
      <div>
        <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  formatCount () {
      const { count } = this.state;
      return count === 0 ? "Zero" : count;
    //   return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
