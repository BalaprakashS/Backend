
import { useState, useEffect } from "react";

function App() {
  // Task 1: Digital Timer
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [running]);

  function startTimer() {
    setRunning(true);
  }

  function stopTimer() {
    setRunning(false);
  }

  function resetTimer() {
    setRunning(false);
    setSeconds(0);
  }

  // Task 2: Automatic Welcome Message
  const [message, setMessage] = useState("Please Wait...");
  const [restart, setRestart] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessage("Welcome to React!");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [restart]);

  function restartWelcome() {
    setMessage("Please Wait...");
    setRestart((prev) => prev + 1);
  }

  // Task 3: Store Name, Age and Email
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });

  function saveUser(e) {
    e.preventDefault();

    const newUser = { name, age, email };
    const updatedUsers = [...users, newUser];

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);

    setName("");
    setAge("");
    setEmail("");
  }

  function deleteUser(index) {
    const updatedUsers = users.filter((_, i) => i !== index);

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Practice Tasks</h1>

      <hr />

      <h2>Task 1: Digital Timer</h2>
      <h3>{seconds} seconds</h3>

      <button onClick={startTimer} disabled={running}>
        Start
      </button>{" "}
      <button onClick={stopTimer} disabled={!running}>
        Stop
      </button>{" "}
      <button onClick={resetTimer}>Reset</button>

      <hr />

      <h2>Task 2: Automatic Welcome Message</h2>
      <h3>{message}</h3>
      <button onClick={restartWelcome}>Restart</button>

      <hr />

      <h2>Task 3: Save User Details</h2>

      <form onSubmit={saveUser}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Save Details</button>
      </form>

      <h3>Saved Users</h3>

      {users.length === 0 ? (
        <p>No users saved.</p>
      ) : (
        users.map((user, index) => (
          <div key={index}>
            <p>
              Name: {user.name} | Age: {user.age} | Email: {user.email}
              {" "}
              <button onClick={() => deleteUser(index)}>
                Delete
              </button>
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
