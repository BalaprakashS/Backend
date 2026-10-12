import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/dashboard");
  }

  return (
    <div className="mx-auto max-w-md rounded-xl bg-white p-6 shadow">
      <h2 className="mb-4 text-2xl font-bold">Login</h2>

      <input
        type="email"
        placeholder="Enter email"
        className="mb-4 w-full rounded border p-3"
      />

      <input
        type="password"
        placeholder="Enter password"
        className="mb-4 w-full rounded border p-3"
      />

      <button
        onClick={handleLogin}
        className="w-full rounded bg-blue-600 p-3 text-white hover:bg-blue-700"
      >
        Login
      </button>
    </div>
  );
}

export default Login;