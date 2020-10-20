import React, { Component } from "react";
import Keypad from "../Contents/Keypad Components/Keypad";
import Result from "../Contents/Resulte Components/Result";

class Evaluate extends Component {
  state = {
    input: "",
    firstNum: "",
    secNun: "",
    operator: "",
  };

  addToInput = (val) => {
    if (this.state.operator) {
      this.setState({
        input: this.state.input + val,
        secNun: this.state.secNun + val,
      });
    } else {
      this.setState({
        input: this.state.input + val,
        firstNum: this.state.firstNum + val,
      });
    }
  };

  plusBtn = (val) => {
    if (this.state.input !== "") {
      this.setState({
        input: this.state.input + val,
        operator: this.state.operator + val,
      });
    }
  };

  subtract = (val) => {
    if (this.state.input !== "") {
      this.setState({
        input: this.state.input + val,
        operator: this.state.operator + val,
      });
    }
  };

  multiply = (val) => {
    if (this.state.input !== "") {
      this.setState({
        input: this.state.input + val,
        operator: this.state.operator + val,
      });
    }
  };

  divide = (val) => {
    if (this.state.input !== "") {
      this.setState({
        input: this.state.input + val,
        operator: this.state.operator + val,
      });
    }
  };

  addZeroToInput = (val) => {
    if (this.state.input !== "") {
      if (this.state.operator) {
        this.setState({
          input: this.state.input + val,
          secNun: this.state.secNun + val,
        });
      } else {
        this.setState({
          input: this.state.input + val,
          firstNum: this.state.firstNum + val,
        });
      }
    }
  };
  persent = (val) => {
    if (this.state.input !== "") {
      if (val === "%") {
        this.setState({ input: this.state.input / 100 });
      }
    }
  };
  minus = (val) => {
    if (this.state.input === "") {
      this.setState({
        input: this.state.input + "-",
      });
    } else this.setState({ input: this.state.input * -1 });
  };
  rest = () => {
    this.setState({
      input: "",
      firstNum: "",
      secNun: "",
      operator: "",
    });
  };

  evaluate = () => {
    if (this.state.operator === "+") {
      this.setState({
        input: parseFloat(this.state.firstNum) + parseFloat(this.state.secNun),
      });
    } else if (this.state.operator === "-") {
      console.log(this.state);
      this.setState({
        input: parseFloat(this.state.firstNum) - parseFloat(this.state.secNun),
      });
    } else if (this.state.operator === "*") {
      this.setState({
        input: parseFloat(this.state.firstNum) * parseFloat(this.state.secNun),
      });
    } else if (this.state.operator === "/") {
      this.setState({
        input: parseFloat(this.state.firstNum) / parseFloat(this.state.secNun),
      });
    }
  };

  render() {
    return (
      <>
        <Result input={this.state.input} />
        <Keypad
          evaluate={this.evaluate}
          addToInput={this.addToInput}
          rest={this.rest}
          minus={this.minus}
          persent={this.persent}
          addZeroToInput={this.addZeroToInput}
          divide={this.divide}
          multiply={this.multiply}
          subtract={this.subtract}
          plusBtn={this.plusBtn}
        />
      </>
    );
  }
}

export default Evaluate;
