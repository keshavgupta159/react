import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
// import logo from './logo.svg';
import "./App.css";

/*
Phases:
Mount: //starting of app
  constructor(props){
    super(props);
    //this.setState(); // this will give error
    this.state = this.props.something; //valid to initialise the state
  }
  render(){
    return(
      jsx statements/html
    )
  }
  componentDidMount(){
    //ajax call
    this.setState({});
  }
Update: //in case of update
  render(){
    return(
      jsx statements/html
    )
  }
  componentDidUpdate(prevProps,prevState){
    if(prevProps.counter.value!== this.props.counter.value){
      //Ajax call and  get new data from the server
    }
  }
Unmount: //in case of delete
  componentWillUnmount(){
    //called just before removing the element and then run componentDidUpdate()
  }
*/

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 6 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };

  handleDelete = (id) => {
    console.log("Delete Method", id);
    const counters = this.state.counters.filter((c) => c.id !== id);
    this.setState({ counters });
  };

  handleIncrement = (objCounter) => {
    // console.log("Handle Increment", objCounter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(objCounter);
    counters[index] = { ...objCounter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (objCounter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(objCounter);
    counters[index] = { ...objCounter };
    counters[index].value--;
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
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
