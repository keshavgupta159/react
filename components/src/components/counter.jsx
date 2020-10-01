import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    // count: 0,
    // imageUrl: "https://picsum.photos/200",
    // address: {
    //     street: ''
    // }
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  render() {
    // let spanClasses = this.getSpanClasses();

    // React.createElement() is used to create the following line
    // return (
    //     <div>
    //         <h1>Hello World</h1>
    //         <button>Increment</button>
    //     </div>
    // );
    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt=""/> */}
        {/* <span style={{fontSize: 50}} className="badge badge-primary m-2">{this.formatCount()}</span> */}
        {/* <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span> */}
        <span style={this.styles} className={this.getSpanClasses()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-default btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  getSpanClasses() {
    let spanClasslist = ["badge", "m-2"];
    spanClasslist =
      this.state.count === 0
        ? [...spanClasslist, "badge-warning"]
        : [...spanClasslist, "badge-primary"];
    let spanClasses = spanClasslist.join(" ");
    return spanClasses;
  }

  formatCount() {
    // return this.state.count === 0 ? 'Zero' : this.state.count;
    const { count } = this.state; // Destructuring Concept
    // return count === 0 ? <h1>Zero</h1> : count;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
