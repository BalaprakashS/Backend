
import { useState } from "react";

export default function App() {
  const [page, setPage] = useState(() =>
    localStorage.getItem("loggedIn") === "true"
      ? "dashboard"
      : localStorage.getItem("registeredUser")
      ? "login"
      : "register"
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleRegister(e) {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("registeredUser"));

    if (user && user.email === email) {
      setMessage("Email already registered. Please login.");
      return;
    }

    localStorage.setItem(
      "registeredUser",
      JSON.stringify({ name, email, password })
    );

    setMessage("Registration successful! Please login.");
    setName("");
    setEmail("");
    setPassword("");
    setPage("login");
  }

  function handleLogin(e) {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("registeredUser"));

    if (user && user.email === email && user.password === password) {
      localStorage.setItem("loggedIn", "true");
      setMessage("");
      setPage("dashboard");
    } else {
      setMessage("Invalid email or password!");
    }
  }

  function handleLogout() {
    localStorage.removeItem("loggedIn");
    setEmail("");
    setPassword("");
    setMessage("Logged out successfully!");
    setPage("login");
  }

  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#eef2ff",
      fontFamily: "Arial, sans-serif",
      padding: 20
    },
    card: {
      background: "white",
      padding: 30,
      borderRadius: 14,
      width: "100%",
      maxWidth: 380,
      boxShadow: "0 5px 25px #00000015"
    },
    input: {
      width: "100%",
      padding: 12,
      margin: "8px 0",
      boxSizing: "border-box",
      border: "1px solid #ccc",
      borderRadius: 7
    },
    button: {
      width: "100%",
      padding: 12,
      marginTop: 12,
      background: "#4338ca",
      color: "white",
      border: 0,
      borderRadius: 7,
      cursor: "pointer"
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {page === "register" && (
          <>
            <h2>Create Account</h2>
            <p>Register to access your dashboard.</p>

            <form onSubmit={handleRegister}>
              <input
                style={styles.input}
                placeholder="Full Name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />

              <input
                style={styles.input}
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />

              <input
                style={styles.input}
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                minLength={6}
                required
              />

              <button style={styles.button}>Register</button>
            </form>

            <p>
              Already registered?{" "}
              <button onClick={() => {
                setMessage("");
                setPage("login");
              }}>
                Login
              </button>
            </p>
          </>
        )}

        {page === "login" && (
          <>
            <h2>Login</h2>
            <p>Enter your registered credentials.</p>

            <form onSubmit={handleLogin}>
              <input
                style={styles.input}
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />

              <input
                style={styles.input}
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />

              <button style={styles.button}>Login</button>
            </form>

            <p>
              New user?{" "}
              <button onClick={() => {
                setMessage("");
                setPage("register");
              }}>
                Register
              </button>
            </p>
          </>
        )}

        {page === "dashboard" && (
          <>
            <h1>Welcome to Dashboard!</h1>
            <p>
              Hello, {
                JSON.parse(localStorage.getItem("registeredUser"))?.name
              }
            </p>
            <p>You have successfully logged in.</p>

            <button style={styles.button} onClick={handleLogout}>
              Logout
            </button>
          </>
        )}

        {message && (
          <p style={{ color: "#4338ca", marginTop: 15 }}>{message}</p>
        )}
      </div>
    </div>
  );
}
