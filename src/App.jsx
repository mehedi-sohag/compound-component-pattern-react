import Counter from "./Counter";

function App() {
  return (
    <Counter>
      <Counter.Decrese icon="-" />
      <Counter.Count />
      <Counter.Increse icon="+" />
      <Counter.Label>Counter</Counter.Label>
    </Counter>
  );
}

export default App;
