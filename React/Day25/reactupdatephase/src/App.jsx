import { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  useMemo(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div style={{ background: dark ? "blue" : "white", color: dark ? "white" : "black", padding: "20px" }}>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setDark(!dark)}>
        Change Theme
      </button>
    </div>
  );
}

export default App;