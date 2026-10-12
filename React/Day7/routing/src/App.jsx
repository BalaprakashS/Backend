import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";

function App() {
  const location = useLocation();

  // Hide Navbar and Footer on Login page
  const hideLayout = location.pathname === "/login";

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">

      {!hideLayout && <Navbar />}

      <main className="mx-auto w-full max-w-6xl flex-1 p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />

          <Route path="/dashboard" element={<Dashboard />}>
            <Route
              index
              element={<p>Welcome to your dashboard!</p>}
            />
            <Route
              path="profile"
              element={<p>Your Profile</p>}
            />
            <Route
              path="settings"
              element={<p>Your Settings</p>}
            />
          </Route>

          <Route path="/user/:id" element={<User />} />

          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </main>

      {!hideLayout && <Footer />}

    </div>
  );
}

export default App;