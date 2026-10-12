import { NavLink } from "react-router-dom";

function Navbar() {
  const linkStyle = ({ isActive }) =>
    `rounded px-3 py-2 ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-200 hover:bg-gray-700"
    }`;

  return (
    <nav className="flex flex-wrap items-center justify-between gap-4 bg-gray-900 p-4">
      <h1 className="text-xl font-bold text-white">
        React Router App
      </h1>

      <div className="flex flex-wrap gap-2">
        <NavLink to="/" end className={linkStyle}>
          Home
        </NavLink>

        <NavLink to="/about" className={linkStyle}>
          About
        </NavLink>

        <NavLink to="/contact" className={linkStyle}>
          Contact
        </NavLink>

        <NavLink to="/login" className={linkStyle}>
          Login
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;