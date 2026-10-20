import { useState } from "react";

const useCounter = (initialValue, step) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
};

const App = () => {
  const counter1 = useCounter(0, 10);

  console.log("Counter 1:", counter1.count);

  const counter2 = useCounter(100, 10);

  
  console.log("Counter 2:", counter2.count);

  return (
    <div>
      <h2>Counter 1: {counter1.count}</h2>
      <button onClick={counter1.increment}>Increment</button>
      <button onClick={counter1.decrement}>Decrement</button>
      <button onClick={counter1.reset}>Reset</button>

      <h2>Counter 2: {counter2.count}</h2>
      <button onClick={counter2.increment}>Increment</button>
      <button onClick={counter2.decrement}>Decrement</button>
      <button onClick={counter2.reset}>Reset</button>
    </div>
  );
};

export default App;