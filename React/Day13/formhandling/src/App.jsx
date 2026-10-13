
import { useState } from "react";

function App() {
  // Task 1: Toggle True / False
  const [isOn, setIsOn] = useState(false);

  // Task 2: Like Button
  const [isLiked, setIsLiked] = useState(false);

  // Task 3: Update an Object
  const [user, setUser] = useState({
    name: "Rahul",
    age: 22,
    city: "Chennai",
  });

  // Task 4: Update an Object Inside an Array
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 50000, inStock: true },
    { id: 2, name: "Phone", price: 20000, inStock: false },
    { id: 3, name: "Tablet", price: 15000, inStock: true },
  ]);

  // Task 5: Student Management
  const [students, setStudents] = useState([
    { id: 1, name: "Ravi", marks: 75, isPassed: true },
    { id: 2, name: "Priya", marks: 35, isPassed: false },
    { id: 3, name: "Kumar", marks: 90, isPassed: true },
  ]);

  // Product stock toggle
  const toggleStock = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, inStock: !product.inStock }
          : product
      )
    );
  };

  // Increase student marks
  const increaseMarks = (id) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id
          ? { ...student, marks: student.marks + 5 }
          : student
      )
    );
  };

  // Toggle student result
  const toggleResult = (id) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id
          ? { ...student, isPassed: !student.isPassed }
          : student
      )
    );
  };

  // Delete student
  const deleteStudent = (id) => {
    setStudents((prev) =>
      prev.filter((student) => student.id !== id)
    );
  };

  const cardStyle = "rounded-xl bg-white p-6 shadow";
  const headingStyle = "mb-4 text-xl font-bold text-blue-700";
  const buttonStyle =
    "rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700";
  const greenButton =
    "rounded bg-green-600 px-3 py-2 text-white hover:bg-green-700";
  const redButton =
    "rounded bg-red-600 px-3 py-2 text-white hover:bg-red-700";

  return (
    <div className="min-h-screen bg-gray-100 p-5 md:p-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-blue-800">
        React useState Practice Tasks
      </h1>

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">

        {/* TASK 1: BOOLEAN TOGGLE */}
        <section className={cardStyle}>
          <h2 className={headingStyle}>Task 1: Toggle True / False</h2>

          <p className="mb-4 text-lg">
            Status:{" "}
            <strong className={isOn ? "text-green-600" : "text-red-600"}>
              {isOn ? "ON" : "OFF"}
            </strong>
          </p>

          <button
            onClick={() => setIsOn((prev) => !prev)}
            className={buttonStyle}
          >
            {isOn ? "Turn OFF" : "Turn ON"}
          </button>
        </section>

        {/* TASK 2: LIKE BUTTON */}
        <section className={cardStyle}>
          <h2 className={headingStyle}>Task 2: Like Button</h2>

          <h3 className="mb-2 text-lg font-semibold">My Post</h3>
          <p className="mb-4 text-gray-600">Click the Like button!</p>

          <button
            onClick={() => setIsLiked((prev) => !prev)}
            className={
              isLiked
                ? "rounded bg-pink-600 px-4 py-2 text-white"
                : buttonStyle
            }
          >
            {isLiked ? "Liked" : "Like"}
          </button>

          {isLiked && (
            <p className="mt-4 font-semibold text-pink-600">
              You liked this post!
            </p>
          )}
        </section>

        {/* TASK 3: OBJECT UPDATE */}
        <section className={cardStyle}>
          <h2 className={headingStyle}>Task 3: Update an Object</h2>

          <div className="mb-4 space-y-2">
            <p>Name: <strong>{user.name}</strong></p>
            <p>Age: <strong>{user.age}</strong></p>
            <p>City: <strong>{user.city}</strong></p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() =>
                setUser((prev) => ({ ...prev, name: "Arjun" }))
              }
              className={buttonStyle}
            >
              Change Name
            </button>

            <button
              onClick={() =>
                setUser((prev) => ({ ...prev, age: prev.age + 1 }))
              }
              className={greenButton}
            >
              Increase Age
            </button>

            <button
              onClick={() =>
                setUser((prev) => ({ ...prev, city: "Bangalore" }))
              }
              className="rounded bg-purple-600 px-3 py-2 text-white hover:bg-purple-700"
            >
              Change City
            </button>
          </div>
        </section>

        {/* TASK 4: PRODUCTS ARRAY */}
        <section className={cardStyle}>
          <h2 className={headingStyle}>
            Task 4: Product Stock
          </h2>

          <div className="space-y-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="rounded-lg border border-gray-200 p-4"
              >
                <h3 className="font-bold">{product.name}</h3>

                <p className="my-1">
                  Price: ₹{product.price.toLocaleString("en-IN")}
                </p>

                <p
                  className={
                    product.inStock
                      ? "mb-3 font-semibold text-green-600"
                      : "mb-3 font-semibold text-red-600"
                  }
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </p>

                <button
                  onClick={() => toggleStock(product.id)}
                  className={buttonStyle}
                >
                  Toggle Stock
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* TASK 5: STUDENT MANAGEMENT */}
        <section className={`${cardStyle} md:col-span-2`}>
          <h2 className={headingStyle}>Task 5: Student Management App</h2>

          {students.length === 0 ? (
            <p className="text-gray-500">No students remaining.</p>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {students.map((student) => (
                <div
                  key={student.id}
                  className="rounded-lg border border-gray-200 p-4"
                >
                  <h3 className="mb-2 text-lg font-bold">
                    {student.name}
                  </h3>

                  <p className="mb-2">
                    Marks: <strong>{student.marks}</strong>
                  </p>

                  <p
                    className={
                      student.isPassed
                        ? "mb-4 font-semibold text-green-600"
                        : "mb-4 font-semibold text-red-600"
                    }
                  >
                    Result: {student.isPassed ? "Pass" : "Fail"}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => increaseMarks(student.id)}
                      className={greenButton}
                    >
                      Increase Marks
                    </button>

                    <button
                      onClick={() => toggleResult(student.id)}
                      className="rounded bg-purple-600 px-3 py-2 text-white hover:bg-purple-700"
                    >
                      Toggle Result
                    </button>

                    <button
                      onClick={() => deleteStudent(student.id)}
                      className={redButton}
                    >
                      Delete Student
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

      </div>
    </div>
  );
}

export default App;
