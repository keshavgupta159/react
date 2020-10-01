import React, { Component } from "react";

//Input: Liked: boolean
//Output: onClick

class Like extends Component {
  render() {
    let classes =
      this.props.movie.liked === false ? "fa fa-heart-o" : "fa fa-heart";
    return (
      <i
        onClick={() => this.props.onClick(this.props.movie)}
        style={{ cursor: "pointer" }}
        className={classes}
        aria-hidden="true"
      ></i>
    );
  }
}

export default Like;
