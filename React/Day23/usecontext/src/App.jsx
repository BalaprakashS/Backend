import { createContext, useContext, useState } from "react";

// Creating Contexts
const UserContext = createContext();
const ThemeContext = createContext();
const AuthContext = createContext();


// TASK 1 - User Context

const UserProvider = ({ children }) => {

  const user = {
    name: "Bala",
    role: "Developer"
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

const Profile = () => {

  const user = useContext(UserContext);

  return (
    <div>
      <h3>User Profile</h3>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
    </div>
  );
};


// TASK 2 - Theme Switcher

const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState("Light");

  const toggleTheme = () => {
    setTheme(theme === "Light" ? "Dark" : "Light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeComponent = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{
      backgroundColor: theme === "Light" ? "white" : "black",
      color: theme === "Light" ? "black" : "white",
      padding: "20px"
    }}>
      <h3>Theme Switcher</h3>

      <h4>Current Theme: {theme}</h4>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};


// TASK 3 - Login Context

const AuthProvider = ({ children }) => {

  const [auth, setAuth] = useState({
    isLoggedIn: false,
    username: "Bala"
  });

  const login = () => {
    setAuth({ ...auth, isLoggedIn: true });
  };

  const logout = () => {
    setAuth({ ...auth, isLoggedIn: false });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const LoginComponent = () => {

  const { auth, login, logout } = useContext(AuthContext);

  return (
    <div>
      <h3>Login Context</h3>

      {auth.isLoggedIn ? (
        <>
          <h4>Welcome {auth.username}</h4>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h4>Please Login</h4>
          <button onClick={login}>Login</button>
        </>
      )}
    </div>
  );
};


// MAIN APP

function App() {

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>

      <h1>React Context API Tasks</h1>

      {/* TASK 1 */}
      <UserProvider>
        <Profile />
      </UserProvider>

      <hr />

      {/* TASK 2 */}
      <ThemeProvider>
        <ThemeComponent />
      </ThemeProvider>

      <hr />

      {/* TASK 3 */}
      <AuthProvider>
        <LoginComponent />
      </AuthProvider>

    </div>
  );
}

export default App;