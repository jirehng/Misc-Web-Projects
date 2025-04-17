import "./App.css";
export default function Win(props) {
  return (
    <div className="winning_screen">
      <div>
        <h1>Congradulations!!!</h1>
        <h2>{props.win != undefined ? `${props.win} win!` : ""}</h2>
        <button onClick={props.clearWin}>Again</button>
      </div>
    </div>
  );
}
