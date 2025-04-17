import React from "react";
import "./App.css";
import Win from "./Win";

export default function App() {
  const [turns, setTurns] = React.useState(true);
  const [x, setX] = React.useState([]);
  const [y, setY] = React.useState([]);
  const [selected, setSelected] = React.useState([]);
  const [win, setWin] = React.useState();
  // True = X, false = Y
  const [tiles, setTiles] = React.useState(["", "", "", "", "", "", "", ""]);
  const winConditions = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
  ];
  function clear() {
    setTiles([])
    setSelected([])
    setX([])
    setY([])
    setTurns(true)
  }
  function checkWin() {
    for (let i = 0; i < winConditions.length; i++) {
      if (winConditions[i].every((v) => x.includes(v))) {
        setWin("X");
        clear()
        return;
      }
      if (winConditions[i].every((v) => y.includes(v))) {
        setWin("Y");
        clear()
        return;
      }
    }
  }

  function clearWin() {
  }

  function handleClick(id) {
    if (turns) {
      if (!selected.includes(id)) {
        setX((p) => [...p, id]);
        setTurns((prevTurn) => !prevTurn);
        const newTiles = [...tiles];
        newTiles[id] = "X";
        setTiles(newTiles);
      }
    } else {
      if (!selected.includes(id)) {
        setY((p) => [...p, id]);
        setTurns((prevTurn) => !prevTurn);
        const newTiles = [...tiles];
        newTiles[id] = "O";
        setTiles(newTiles);
      }
    }
    setSelected((p) => [...p, id]);
  }


  React.useEffect(() => {
    checkWin();
  }, [x, y]);

  return (
    <div>
      <div className={!win ? "appear" : "hidden"}>
        <h1>Tic Tac Toe</h1>
        <div className="grid">
          <div onClick={() => handleClick(0)}>{tiles[0]}</div>
          <div onClick={() => handleClick(1)}>{tiles[1]}</div>
          <div onClick={() => handleClick(2)}>{tiles[2]}</div>
          <div onClick={() => handleClick(3)}>{tiles[3]}</div>
          <div onClick={() => handleClick(4)}>{tiles[4]}</div>
          <div onClick={() => handleClick(5)}>{tiles[5]}</div>
          <div onClick={() => handleClick(6)}>{tiles[6]}</div>
          <div onClick={() => handleClick(7)}>{tiles[7]}</div>
          <div onClick={() => handleClick(8)}>{tiles[8]}</div>
        </div>
        <h2>Now: {turns ? "X" : "O"}</h2>
      </div>
      {win != undefined && <Win win={win} clearWin={() => setWin(undefined)}/>}
    </div>
  );
}
