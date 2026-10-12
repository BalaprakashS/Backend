import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2 className="mb-4 text-3xl font-bold text-blue-600">
        Dashboard
      </h2>

      <div className="flex gap-4">
        <Link
          to="profile"
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          Profile
        </Link>

        <Link
          to="settings"
          className="rounded bg-green-600 px-4 py-2 text-white"
        >
          Settings
        </Link>
      </div>

      <div className="mt-6 rounded border p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;