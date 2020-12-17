import React, { Component } from "react";

import "./App.css";
import Evaluate from "./Components/Evaluate/Evaluate";

class App extends Component {
  render() {
    return (
      <div className="row">
        <Evaluate />
      </div>
    );
  }
}

export default App;
