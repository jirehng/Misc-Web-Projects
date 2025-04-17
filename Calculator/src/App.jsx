import React from "react";
import Grid from "./Grid";
import "./App.css";
export default function App() {
  const [display, setDisplay] = React.useState(0);
  const [result, setResult] = React.useState();
  const [currentDisplay, setCurrentDisplay] = React.useState(true);
  // True = display, false = result
  const validKeys = "0123456789+-*/."

  function handleClick(id) {
    display == 0 && setDisplay("")
    setCurrentDisplay(true);
    if (validKeys.includes(id)) {
      setDisplay((p) => p + "" + id);
    } else if (id === "AC") {
      setDisplay(0)
      setResult()
      setCurrentDisplay(true)
    }

  }

  function handleSubmit(event) {
    if (event) event.preventDefault();
    try {
      setCurrentDisplay(false);
      setResult(eval(display));
      setDisplay(eval(display));
    } catch (error) {
      setCurrentDisplay(true);
      setDisplay("Error");
      
    }
  }

  return (
    <>
      <div className="calculator">
        <h1 className="result">{currentDisplay ? display : result}</h1>
        <Grid handleClick={handleClick} handleSubmit={handleSubmit} />
      </div>
    </>
  );
}
