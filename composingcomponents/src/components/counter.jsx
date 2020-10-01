import React, { Component } from "react";

class Counter extends Component {
  //   state = {
  //     count: this.props.counter.value,
  //   };

  //   handleIncrement = () => {
  //     this.setState({ count: this.state.count + 1 });
  //   };

  render() {
    return (
      <div className="col-sm-3">
        <div className="row">
          {/* {this.props.children} */}
          <div className="col-1 text-center align-middle">
            <span className={this.getSpanClasses()}>{this.formatCount()}</span>
          </div>
          <div className="col text-center align-middle">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary m-2"
            >
              +
            </button>
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className="btn btn-secondary m-2"
              disabled={this.props.counter.value <= 0 ? true : false}
            >
              -
            </button>
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger m-2"
            >
              X
            </button>
          </div>
        </div>
      </div>
    );
  }

  getSpanClasses() {
    let spanClasslist = ["badge", "m-2", "p-2"];
    spanClasslist =
      this.props.counter.value === 0
        ? [...spanClasslist, "badge-warning"]
        : [...spanClasslist, "badge-primary"];
    let spanClasses = spanClasslist.join(" ");
    return spanClasses;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  renderDecrement() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
