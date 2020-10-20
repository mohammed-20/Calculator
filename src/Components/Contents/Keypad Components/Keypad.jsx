import React, { Component } from "react";
import "./Style.css";
class Keypad extends Component {
  addToInput = (e) => {
    this.props.addToInput(e.target.name);
  };
  plusBtn = (e) => {
    this.props.plusBtn(e.target.name);
  };
  addZeroToInput = (e) => {
    this.props.addZeroToInput(e.target.name);
  };
  evaluate = (e) => {
    this.props.evaluate(e.target.name);
  };
  rest = (e) => {
    this.props.rest(e.target.name);
  };
  persent = (e) => {
    this.props.persent(e.target.name);
  };
  divide = (e) => {
    this.props.divide(e.target.name);
  };
  minus = (e) => {
    this.props.minus(e.target.name);
  };
  multiply = (e) => {
    this.props.multiply(e.target.name);
  };
  subtract = (e) => {
    this.props.subtract(e.target.name);
  };
  render() {
    return (
      <div className="container">
        <button name="AC" className="ColorWearBlue TextBtn" onClick={this.rest}>
          AC
        </button>
        <button
          name="+/-"
          className="ColorWearBlue TextBtn"
          onClick={this.minus}
        >
          +/-
        </button>
        <button
          name="%"
          className="ColorWearBlue TextBtn"
          onClick={this.persent}
        >
          %
        </button>
        <button name="/" className="ColorMath" onClick={this.divide}>
          ÷
        </button>
        <button name="7" className="ColorNumber" onClick={this.addToInput}>
          7
        </button>
        <button name="8" className="ColorNumber" onClick={this.addToInput}>
          8
        </button>
        <button name="9" className="ColorNumber" onClick={this.addToInput}>
          9
        </button>
        <button name="*" className="ColorMath" onClick={this.multiply}>
          x
        </button>
        <button name="4" className="ColorNumber" onClick={this.addToInput}>
          4
        </button>
        <button name="5" className="ColorNumber" onClick={this.addToInput}>
          5
        </button>
        <button name="6" className="ColorNumber" onClick={this.addToInput}>
          6
        </button>
        <button name="-" className="ColorMath" onClick={this.subtract}>
          -
        </button>
        <button name="1" className="ColorNumber" onClick={this.addToInput}>
          1
        </button>
        <button name="2" className="ColorNumber" onClick={this.addToInput}>
          2
        </button>
        <button name="3" className="ColorNumber" onClick={this.addToInput}>
          3
        </button>
        <button name="+" className="ColorMath" onClick={this.plusBtn}>
          +
        </button>
        <button
          name="0"
          className="zero ColorNumber"
          onClick={this.addZeroToInput}
        >
          0
        </button>
        <button name="." className="ColorNumber" onClick={this.addToInput}>
          .
        </button>
        <button name="=" className="ColorMath" onClick={this.evaluate}>
          =
        </button>
      </div>
    );
  }
}

export default Keypad;
