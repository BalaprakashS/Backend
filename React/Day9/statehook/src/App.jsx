
import { useState } from "react";

function App() {
  // Task 1: Name Change
  const [name, setName] = useState("Arun");

  // Task 2: Counter
  const [count, setCount] = useState(0);

  // Task 3: Show / Hide
  const [show, setShow] = useState(false);

  // Task 4: Input Name
  const [inputName, setInputName] = useState("");

  // Task 5: Like Button
  const [likes, setLikes] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-8 text-center text-3xl font-bold text-blue-700">
        React useState Practice Tasks
      </h1>

      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">

        {/* Task 1: Name Change */}
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-3 text-xl font-bold">Task 1: Name Change</h2>

          <p className="mb-4">
            Name: <span className="font-semibold text-blue-600">{name}</span>
          </p>

          <button
            onClick={() => setName("Kumar")}
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Change Name
          </button>
        </div>

        {/* Task 2: Counter */}
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-3 text-xl font-bold">Task 2: Counter</h2>

          <p className="mb-4 text-3xl font-bold text-blue-600">{count}</p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setCount(count + 1)}
              className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
            >
              Increase
            </button>

            <button
              onClick={() => setCount(count - 1)}
              className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            >
              Decrease
            </button>

            <button
              onClick={() => setCount(0)}
              className="rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Task 3: Show / Hide */}
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-3 text-xl font-bold">Task 3: Show / Hide</h2>

          <button
            onClick={() => setShow(!show)}
            className="mb-4 rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
          >
            {show ? "Hide Text" : "Show Text"}
          </button>

          {show && (
            <p className="font-semibold text-purple-700">
              Welcome to React
            </p>
          )}
        </div>

        {/* Task 4: Input Name */}
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-3 text-xl font-bold">Task 4: Input Name</h2>

          <input
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            placeholder="Enter your name"
            className="mb-4 w-full rounded border border-gray-300 p-3 outline-none focus:border-blue-500"
          />

          <p>
            Entered Name:{" "}
            <span className="font-semibold text-blue-600">
              {inputName || "No name entered"}
            </span>
          </p>
        </div>

        {/* Task 5: Like Button */}
        <div className="rounded-xl bg-white p-6 shadow md:col-span-2">
          <h2 className="mb-3 text-xl font-bold">Task 5: Like Button</h2>

          <p className="mb-4 text-lg">
            Likes: <span className="font-bold text-pink-600">{likes}</span>
          </p>

          <button
            onClick={() => setLikes(likes + 1)}
            className="rounded bg-pink-600 px-5 py-2 text-white hover:bg-pink-700"
          >
            Like
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;
