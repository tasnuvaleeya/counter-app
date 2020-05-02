import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  styles = {
      fontSize:50,
       fontWeight: "bold",   
  }

  handleIncrement = (product) => {
    console.log(product);

    // console.log("Increment Clicked!", this);

    this.setState({ count: this.state.count + 1 });
  };

  doHandleIncrement = () => {

    this.handleIncrement({ id: 1 });
  };
  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.doHandleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()} */}
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
