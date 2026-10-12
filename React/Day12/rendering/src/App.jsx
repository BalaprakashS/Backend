import { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Bala" },
    { id: 2, name: "Arun" }
  ]);

  const handleClick = () => {
    setUsers([
      ...users,
      { id: 3, name: "Rahul" }
    ]);
  };

  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}

      <button onClick={handleClick}>
        Add User
      </button>
    </div>
  );
}

export default App;