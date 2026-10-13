
import { useState } from "react";

function App() {
  // TASK 1: ARRAY
  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript",
  ]);

  const addReact = () => {
    setSkills([...skills, "React"]);
  };

  const updateJavaScript = () => {
    setSkills(
      skills.map((skill) =>
        skill === "JavaScript"
          ? "Advanced JavaScript"
          : skill
      )
    );
  };

  // TASK 2: OBJECT
  const [student, setStudent] = useState({
    name: "Arun",
    age: 22,
    course: "React",
  });

  const updateCourse = () => {
    setStudent({ ...student, course: "MERN" });
  };

  const addCity = () => {
    setStudent({ ...student, city: "Chennai" });
  };

  // TASK 3: TOGGLE
  const [show, setShow] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-8 text-center text-3xl font-bold text-blue-700">
        React Simple Tasks
      </h1>

      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">

        {/* TASK 1: ARRAY */}
        <section className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-bold">
            Task 1 - Array
          </h2>

          <h3 className="mb-2 font-semibold">Skills List:</h3>

          <ul className="mb-4 list-inside list-disc space-y-2">
            {skills.map((skill, index) => (
              <li key={index} className="text-gray-700">
                {skill}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={addReact}
              className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Add React
            </button>

            <button
              onClick={updateJavaScript}
              className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
            >
              Update JavaScript
            </button>
          </div>
        </section>

        {/* TASK 2: OBJECT */}
        <section className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-bold">
            Task 2 - Object
          </h2>

          <div className="mb-4 space-y-2">
            <p>
              Name: <strong>{student.name}</strong>
            </p>
            <p>
              Age: <strong>{student.age}</strong>
            </p>
            <p>
              Course: <strong>{student.course}</strong>
            </p>
            <p>
              City: <strong>{student.city || "Not added"}</strong>
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={updateCourse}
              className="rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
            >
              Update Course
            </button>

            <button
              onClick={addCity}
              className="rounded bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
            >
              Add City
            </button>
          </div>
        </section>

        {/* TASK 3: TOGGLE */}
        <section className="rounded-xl bg-white p-6 shadow md:col-span-2">
          <h2 className="mb-4 text-xl font-bold">
            Task 3 - Toggle
          </h2>

          <button
            onClick={() => setShow((prev) => !prev)}
            className="mb-4 rounded bg-indigo-600 px-5 py-2 text-white hover:bg-indigo-700"
          >
            {show ? "Hide Details" : "Show Details"}
          </button>

          {show ? (
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
              <h3 className="mb-2 font-bold text-blue-700">
                Student Details
              </h3>
              <p>Name: Arun</p>
              <p>Age: 22</p>
              <p>Course: React</p>
            </div>
          ) : (
            <p className="text-gray-500">
              Student details are hidden.
            </p>
          )}
        </section>

      </div>
    </div>
  );
}

export default App;
