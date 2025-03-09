import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [result, setResult] = useState(0);
  const [number, setNumber] = useState("");

  const handleInput = (e) => {
    setNumber(e.target.value);
  };

  const add = () => {
    setResult(result+Number(number));
    setNumber("");
  };

  const subtract = () => {
    setResult(result-Number(number));
    setNumber("");
  };

  const multiply =()=> {
    setResult(result*Number(number));
    setNumber("");
  };

  const divide = () => {
    if (Number(number) !== 0) {
      setResult(result / Number(number));
    } else {
      alert("Cannot divide by zero!");
    }
    setNumber("");
  };

  const resetInput = () => {
    setNumber("");
  };

  const resetResult = () => {
    setResult(0);
  };

  return (
    <div className="calculator">
      <h1>SIMPLEST CALCULATOR</h1>
      <div className="result">
        <p>Result: {result}</p>
      </div>

      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={handleInput}
      />

      <div className="buttons">
        <button onClick={add}> Add </button>
        <button onClick={subtract}> Subtract </button>
        <button onClick={multiply}> Multiply </button>
        <button onClick={divide}> Divide </button>
      </div>

      <div className="reset-buttons">
        <button onClick={resetInput}>Reset Input</button>
        <button className="reset-result" onClick={resetResult}>
          Reset Result
        </button>
      </div>
    </div>
  );
}

export default Calculator;
