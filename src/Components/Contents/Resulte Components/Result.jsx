import React, { Component } from "react";

import "./Style.css";
class Result extends Component {
  render() {
    return (
      <div className="result">
        <input type="text" value={this.props.input} />
      </div>
    );
  }
}

export default Result;
