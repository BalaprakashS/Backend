
import { useState } from "react";

function App() {
  // TASK 1: Student Name List
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);

  function handleStudentChange(e) {
    setStudentName(e.target.value);
  }

  function handleAddStudent() {
    if (studentName.trim() === "") return;

    setStudents([...students, studentName.trim()]);
    setStudentName("");
  }

  // TASK 2: Course List
  const [courseName, setCourseName] = useState("");
  const [courses, setCourses] = useState([]);

  function handleCourseChange(e) {
    setCourseName(e.target.value);
  }

  function handleAddCourse() {
    if (courseName.trim() === "") return;

    setCourses([...courses, courseName.trim()]);
    setCourseName("");
  }

  function handleDeleteCourse(index) {
    setCourses(courses.filter((course, i) => i !== index));
  }

  // TASK 3: Number List
  const [number, setNumber] = useState("");
  const [numbers, setNumbers] = useState([]);

  function handleNumberChange(e) {
    setNumber(e.target.value);
  }

  function handleAddNumber() {
    if (number.trim() === "") return;

    setNumbers([...numbers, Number(number)]);
    setNumber("");
  }

  // TASK 4: Fruit List Update
  const [fruitName, setFruitName] = useState("");
  const [fruits, setFruits] = useState([]);
  const [fruitEditIndex, setFruitEditIndex] = useState(null);

  function handleFruitChange(e) {
    setFruitName(e.target.value);
  }

  function handleAddFruit() {
    if (fruitName.trim() === "") return;

    setFruits([...fruits, fruitName.trim()]);
    setFruitName("");
  }

  function handleSelectFruit(index) {
    setFruitName(fruits[index]);
    setFruitEditIndex(index);
  }

  function handleUpdateFruit() {
    if (fruitName.trim() === "" || fruitEditIndex === null) return;

    setFruits(
      fruits.map((fruit, i) =>
        i === fruitEditIndex ? fruitName.trim() : fruit
      )
    );

    setFruitName("");
    setFruitEditIndex(null);
  }

  // TASK 5: Employee List
  const [employeeName, setEmployeeName] = useState("");
  const [employees, setEmployees] = useState([]);
  const [employeeEditIndex, setEmployeeEditIndex] = useState(null);

  function handleEmployeeChange(e) {
    setEmployeeName(e.target.value);
  }

  function handleAddEmployee(e) {
    e.preventDefault();

    if (employeeName.trim() === "") return;

    setEmployees([...employees, employeeName.trim()]);
    setEmployeeName("");
  }

  function handleEditEmployee(index) {
    setEmployeeName(employees[index]);
    setEmployeeEditIndex(index);
  }

  function handleUpdateEmployee(e) {
    e.preventDefault();

    if (
      employeeName.trim() === "" ||
      employeeEditIndex === null
    ) {
      return;
    }

    setEmployees(
      employees.map((employee, i) =>
        i === employeeEditIndex
          ? employeeName.trim()
          : employee
      )
    );

    setEmployeeName("");
    setEmployeeEditIndex(null);
  }

  function handleDeleteEmployee(index) {
    setEmployees(employees.filter((employee, i) => i !== index));

    if (employeeEditIndex === index) {
      setEmployeeName("");
      setEmployeeEditIndex(null);
    } else if (
      employeeEditIndex !== null &&
      employeeEditIndex > index
    ) {
      setEmployeeEditIndex(employeeEditIndex - 1);
    }
  }

  function handleEmployeeSubmit(e) {
    if (employeeEditIndex === null) {
      handleAddEmployee(e);
    } else {
      handleUpdateEmployee(e);
    }
  }

  // Common Tailwind CSS styles
  const inputStyle =
    "w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  const addButton =
    "rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700";

  const editButton =
    "rounded-md bg-amber-500 px-3 py-1 text-white hover:bg-amber-600";

  const deleteButton =
    "rounded-md bg-red-600 px-3 py-1 text-white hover:bg-red-700";

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-6xl">

        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            React Form Handling
          </h1>
          <p className="mt-2 text-gray-600">
            Five Tasks Using React and Tailwind CSS
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {/* TASK 1: STUDENTS */}
          <section className="rounded-xl bg-white p-5 shadow">
            <h2 className="mb-4 text-xl font-bold">
              1. Student Name List
            </h2>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                className={inputStyle}
                value={studentName}
                onChange={handleStudentChange}
                placeholder="Enter student name"
              />

              <button
                className={addButton}
                onClick={handleAddStudent}
              >
                Add Student
              </button>
            </div>

            <ul className="mt-4 space-y-2">
              {students.map((student, index) => (
                <li
                  key={index}
                  className="rounded-lg bg-blue-50 p-3"
                >
                  {index + 1}. {student}
                </li>
              ))}
            </ul>
          </section>

          {/* TASK 2: COURSES */}
          <section className="rounded-xl bg-white p-5 shadow">
            <h2 className="mb-4 text-xl font-bold">
              2. Course Management
            </h2>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                className={inputStyle}
                value={courseName}
                onChange={handleCourseChange}
                placeholder="Enter course name"
              />

              <button
                className={addButton}
                onClick={handleAddCourse}
              >
                Add Course
              </button>
            </div>

            <ul className="mt-4 space-y-2">
              {courses.map((course, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between gap-3 rounded-lg bg-gray-50 p-3"
                >
                  <span className="break-words">{course}</span>

                  <button
                    className={deleteButton}
                    onClick={() => handleDeleteCourse(index)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </section>

          {/* TASK 3: NUMBERS */}
          <section className="rounded-xl bg-white p-5 shadow">
            <h2 className="mb-4 text-xl font-bold">
              3. Number Storage
            </h2>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="number"
                className={inputStyle}
                value={number}
                onChange={handleNumberChange}
                placeholder="Enter a number"
              />

              <button
                className={addButton}
                onClick={handleAddNumber}
              >
                Add Number
              </button>
            </div>

            <ul className="mt-4 space-y-2">
              {numbers.map((num, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between rounded-lg bg-gray-50 p-3"
                >
                  <span>{num}</span>

                  <span
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${
                      num % 2 === 0
                        ? "bg-green-100 text-green-700"
                        : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {num % 2 === 0 ? "Even" : "Odd"}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* TASK 4: FRUITS */}
          <section className="rounded-xl bg-white p-5 shadow">
            <h2 className="mb-4 text-xl font-bold">
              4. Fruit List Update
            </h2>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                className={inputStyle}
                value={fruitName}
                onChange={handleFruitChange}
                placeholder="Enter fruit name"
              />

              {fruitEditIndex === null ? (
                <button
                  className={addButton}
                  onClick={handleAddFruit}
                >
                  Add Fruit
                </button>
              ) : (
                <button
                  className="rounded-lg bg-green-600 px-4 py-2 font-medium text-white hover:bg-green-700"
                  onClick={handleUpdateFruit}
                >
                  Save
                </button>
              )}
            </div>

            <ul className="mt-4 space-y-2">
              {fruits.map((fruit, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between gap-3 rounded-lg bg-orange-50 p-3"
                >
                  <span>{fruit}</span>

                  <button
                    className={editButton}
                    onClick={() => handleSelectFruit(index)}
                  >
                    Update
                  </button>
                </li>
              ))}
            </ul>
          </section>

          {/* TASK 5: EMPLOYEES */}
          <section className="rounded-xl bg-white p-5 shadow md:col-span-2">
            <h2 className="mb-4 text-xl font-bold">
              5. Employee Management
            </h2>

            <form
              className="flex flex-col gap-3 sm:flex-row"
              onSubmit={handleEmployeeSubmit}
            >
              <input
                className={inputStyle}
                value={employeeName}
                onChange={handleEmployeeChange}
                placeholder="Enter employee name"
              />

              <button
                type="submit"
                className={
                  employeeEditIndex === null
                    ? addButton
                    : "rounded-lg bg-green-600 px-4 py-2 font-medium text-white hover:bg-green-700"
                }
              >
                {employeeEditIndex === null
                  ? "Add Employee"
                  : "Save"}
              </button>
            </form>

            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {employees.map((employee, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between gap-3 rounded-lg border p-3"
                >
                  <span className="break-words">
                    {index + 1}. {employee}
                  </span>

                  <div className="flex shrink-0 gap-2">
                    <button
                      type="button"
                      className={editButton}
                      onClick={() => handleEditEmployee(index)}
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      className={deleteButton}
                      onClick={() => handleDeleteEmployee(index)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </section>

        </div>

        <footer className="mt-8 text-center text-sm text-gray-500">
          Built with React useState, map(), filter() and Tailwind CSS
        </footer>
      </div>
    </main>
  );
}

export default App;
