import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  /********************************************Type 1 ******************************/

  // constructor() {
  //   super();
  //   console.log(this);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement() {
  //   console.log("Increment Clicking", this); //w/o binding
  //   console.log("Increment Clicking", this.state.count);
  // }

  /********************************************Type 2 ******************************/
  handleIncrement = (product) => {
    console.log(product);
    console.log("Increment Clicking", this.state.count);
    this.state.count++;
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getSpanClasses()}>
          {this.formatCount()}
        </span>
        <button
          // onClick={this.handleIncrement}//w/o arguments
          onClick={() => this.handleIncrement("product")} //with arguments
          className="btn btn-default btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
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
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
