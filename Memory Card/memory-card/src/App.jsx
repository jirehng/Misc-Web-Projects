import React from "react";
import data from "./data";
import "./App.css"

export default function Cards(props) {
  const [cards, setCards] = React.useState(data);
  const [clicked, setClicked] = React.useState([])
  const [score, setScore] = React.useState(0);
  const [bestScore, setBestScore] = React.useState(0)

  function shuffle(array) {
    let shuffledArray = []
    let usedNum = []
    while (shuffledArray.length < array.length) {
      let num = Math.floor(Math.random() * array.length)
      if (!usedNum.includes(num)) {
        usedNum.push(num)
        shuffledArray.push(array[num])
      } 
    }
    return shuffledArray
  }
  function handleClick(id) {
    setCards([])
    setCards(shuffle(data));
    if (!clicked.includes(id)) {
      setClicked(prevID => [...prevID, id])
      setScore(prevScore => prevScore+ 1)
      console.log(score)
    } else {
      score > bestScore && setBestScore(score)
      setScore(0)
      setClicked([])
    }
    
  }
  return (
    <>
    <h1>Memory game</h1>
    <p>Score: {score}</p>
    <p>Best Score: {bestScore}</p>
    <p>
      Instructions: Click on the image that you have not clicked on to gain
      points!
    </p>
    <div className="grid">
      {cards.map((item) => (
        <div className="card" key="card" onClick={() => handleClick(item.id)}>
          <img src={item.img} alt="" className="character" />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
    </>
  );
}
