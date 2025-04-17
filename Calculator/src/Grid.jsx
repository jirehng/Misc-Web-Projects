
import "./App.css";
export default function Grid(props) {
  return (
    <form className="grid" onSubmit={props.handleSubmit}>
      <input type="button" />
      <input type="button" />
      <input type="button" />
      <input type="button" value="AC" onClick={() => props.handleClick("AC")} className="AC"/>
      <input type="button" value={7} onClick={() => props.handleClick(7)} />
      <input type="button" value={8} onClick={() => props.handleClick(8)} />
      <input type="button" value={9} onClick={() => props.handleClick(9)} />
      <input type="button" value="÷" onClick={() => props.handleClick("/")} className="methods"/>
      <input type="button" value={4} onClick={() => props.handleClick(4)} />
      <input type="button" value={5} onClick={() => props.handleClick(5)} />
      <input type="button" value={6} onClick={() => props.handleClick(6)} />
      <input type="button" value="x" onClick={() => props.handleClick("*")} className="methods"/>
      <input type="button" value={1} onClick={() => props.handleClick(1)} />
      <input type="button" value={2} onClick={() => props.handleClick(2)} />
      <input type="button" value={3} onClick={() => props.handleClick(3)} />
      <input type="button" value="-" onClick={() => props.handleClick("-")} className="methods"/>
      <input type="button" value={0} onClick={() => props.handleClick(0)} />
      <input type="button" value="." onClick={() => props.handleClick(".")} />
      <button className="methods">=</button>
      <input type="button" value="+" onClick={() => props.handleClick("+")} className="methods"/>
    </form>
  );
}
