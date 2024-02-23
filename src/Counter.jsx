import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

// Create a context
const CounterContext = createContext();

// Create a parent component
function Counter({ children }) {
  const [count, setCount] = useState(0);
  function increse() {
    setCount((c) => c + 1);
  }
  function decrese() {
    setCount((c) => c - 1);
  }
  return (
    <CounterContext.Provider value={{ count, decrese, increse }}>
      {children}
    </CounterContext.Provider>
  );
}

// Create child component to help implementing the common task

function Count() {
  const { count } = useContext(CounterContext);
  console.log(count);
  return <span>{count}</span>;
}

function Label({ children }) {
  return <span>{children}</span>;
}

function Increse({ icon }) {
  const { increse } = useContext(CounterContext);
  return <button onClick={increse}>{icon}</button>;
}

function Decrese({ icon }) {
  const { decrese } = useContext(CounterContext);
  return <button onClick={decrese}>{icon}</button>;
}

//Add child components as properties to parent component

Counter.Count = Count;
Counter.Label = Label;
Counter.Increse = Increse;
Counter.Decrese = Decrese;

export default Counter;
