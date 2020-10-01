import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onIncrement,
      onDelete,
      onDecrement,
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((c) => (
          <Counter
            key={c.id}
            counter={c}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          >
            <h4>Counter #{c.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
