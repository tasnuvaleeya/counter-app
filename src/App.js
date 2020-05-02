import React from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  constructor(){
    super();
    console.log("App- constructor");
    
  }

  componentDidMount(){
    console.log("ComponentDidMount")
  }
  handleIncrement = (counter) => {
    console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    console.log("App renderd");
    return (
      <React.Fragment>
        <NavBar totalCounters= {this.state.counters.filter(c=>c.value >0).length}/>
        <main className="container">
          <Counters 
            counters = {this.state.counters}
            onReset={this.handleReset} 
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            
            />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
