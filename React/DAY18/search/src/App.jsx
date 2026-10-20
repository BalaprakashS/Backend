
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=30")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter((user) =>
    user.firstName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>User Search</h1>

      <input
        type="text"
        placeholder="Search by first name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p>Loading users...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
        <h3>Showing {filteredUsers.length} users</h3>
      )}

      <div>
        {filteredUsers.map((user) => (
          <div key={user.id}>
            <h3>First Name: {user.firstName}</h3>
            <p>City: {user.address.city}</p>
            <p>
              Address: {user.address.address}, {user.address.state}
            </p>

            <a
              href={`https://dummyjson.com/users/${user.id}`}
              target="_blank"
              rel="noreferrer"
            >
              View User
            </a>

            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
