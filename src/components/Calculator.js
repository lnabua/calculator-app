import React, { useState, useEffect } from "react";

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState();
  const [secondNumber, setSecondNumber] = useState();
  const [result, setResult] = useState();
  const [color, setColor] = useState();

  useEffect(() => {
    const red = Math.random() * 256;
    const green = Math.random() * 256;
    const blue = Math.random() * 256;
    setColor(`rgb(${red},${green},${blue})`);
  }, [result]);

  const handleFirstNumberChange = (e) => {
    setFirstNumber(e.target.value);
  };

  const handleSecondNumberChange = (e) => {
    setSecondNumber(e.target.value);
  };

  const computeResult = (e) => {
    setResult(Number(firstNumber) + Number(secondNumber));
  };

  return (
    <div style={{ backgroundColor: color }}>
      <h1>Add with React!</h1>
      <input
        type="number"
        value={firstNumber}
        onChange={handleFirstNumberChange}
      ></input>
      <span>+</span>
      <input
        type="number"
        value={secondNumber}
        onChange={handleSecondNumberChange}
      ></input>
      <button onClick={computeResult}>=</button>
      <h3>Output: {result} </h3>
    </div>
  );
};

export default Calculator;
