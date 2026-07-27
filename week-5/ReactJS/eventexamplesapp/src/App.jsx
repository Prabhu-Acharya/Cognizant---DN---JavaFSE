import { useState } from "react";
import CurrencyConvertor from "./components/CurrencyConvertor";

function App() {

  const [count, setCount] = useState(0);

  // Increment Counter
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement Counter
  const decrement = () => {
    setCount(count - 1);
  };

  // Static Message
  const sayHello = () => {
    alert("Hello! Have a Nice Day.");
  };

  // Multiple Methods
  const handleIncrement = () => {
    increment();
    sayHello();
  };

  // Welcome Message
  const sayWelcome = (message) => {
    alert(message);
  };

  // Synthetic Event
  const handleClick = (e) => {
    alert("I was clicked");
    console.log(e);
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>React Event Examples</h1>

      <h2>Counter : {count}</h2>

      <button onClick={handleIncrement}>
        Increment
      </button>

      <button onClick={decrement} style={{ marginLeft: "10px" }}>
        Decrement
      </button>

      <br /><br />

      <button onClick={() => sayWelcome("Welcome")}>
        Say Welcome
      </button>

      <br /><br />

      <button onClick={handleClick}>
        OnPress
      </button>

      <hr />

      <CurrencyConvertor />

    </div>
  );
}

export default App;