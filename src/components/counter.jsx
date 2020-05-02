import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };
  styles = {
    fontSize: 50,
    fontWeight: "bold",
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value  + 1 });
  };

  render() {
    //   console.log(this.props);
      
    return (        
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm" >
            Increment

        </button>
        <button onClick={this.props.onDelete} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
