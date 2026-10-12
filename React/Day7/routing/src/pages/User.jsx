import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-600">
        User Details
      </h2>

      <p className="mt-2">User ID: {id}</p>
    </div>
  );
}

export default User;