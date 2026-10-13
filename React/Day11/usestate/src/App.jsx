
import { useState } from "react";

function App() {
  // Task 1: Primitive State - Employee Salary
  const [employeeName] = useState("Arun");
  const [salary, setSalary] = useState(25000);

  // Task 2: Array - Course List
  const [courses, setCourses] = useState([
    "HTML",
    "CSS",
    "JavaScript",
  ]);

  // Task 3: Object - Product Details
  const [product, setProduct] = useState({
    name: "Laptop",
    price: 45000,
    stock: 10,
  });

  // Task 4: Array of Objects - Employee List
  const [employees, setEmployees] = useState([
    { id: 1, name: "Arun", salary: 25000 },
    { id: 2, name: "Priya", salary: 30000 },
    { id: 3, name: "Kumar", salary: 28000 },
  ]);

  // Task 5: Boolean State - Show/Hide Password
  const [showPassword, setShowPassword] = useState(false);
  const password = "react123";

  // Add React
  const addReact = () => {
    setCourses([...courses, "React"]);
  };

  // Update CSS using map()
  const updateCSS = () => {
    setCourses(
      courses.map((course) =>
        course === "CSS" ? "Advanced CSS" : course
      )
    );
  };

  // Update Product Price
  const updatePrice = () => {
    setProduct({ ...product, price: 50000 });
  };

  // Add Brand
  const addBrand = () => {
    setProduct({ ...product, brand: "Dell" });
  };

  // Add Employee
  const addEmployee = () => {
    setEmployees([
      ...employees,
      { id: 4, name: "Bala", salary: 32000 },
    ]);
  };

  // Update Priya's salary using map()
  const updateSalary = () => {
    setEmployees(
      employees.map((employee) =>
        employee.id === 2
          ? { ...employee, salary: 35000 }
          : employee
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5 md:p-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-blue-700">
        React useState Practice Tasks
      </h1>

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">

        {/* TASK 1 */}
        <section className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-bold">
            Task 1 - Employee Salary
          </h2>

          <p className="mb-2">
            Employee Name: <strong>{employeeName}</strong>
          </p>

          <p className="mb-4 text-lg">
            Salary:{" "}
            <strong className="text-green-600">
              ₹{salary.toLocaleString("en-IN")}
            </strong>
          </p>

          <button
            onClick={() => setSalary((prev) => prev + 5000)}
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Increase Salary (+₹5,000)
          </button>
        </section>

        {/* TASK 2 */}
        <section className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-bold">
            Task 2 - Course List
          </h2>

          <ul className="mb-4 list-inside list-disc space-y-2">
            {courses.map((course, index) => (
              <li key={index}>{course}</li>
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
              onClick={updateCSS}
              className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
            >
              Update CSS
            </button>
          </div>
        </section>

        {/* TASK 3 */}
        <section className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-bold">
            Task 3 - Product Details
          </h2>

          <div className="mb-4 space-y-2">
            <p>
              Product: <strong>{product.name}</strong>
            </p>
            <p>
              Price: <strong>₹{product.price.toLocaleString("en-IN")}</strong>
            </p>
            <p>
              Stock: <strong>{product.stock}</strong>
            </p>
            <p>
              Brand: <strong>{product.brand || "Not added"}</strong>
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={updatePrice}
              className="rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
            >
              Update Price
            </button>

            <button
              onClick={addBrand}
              className="rounded bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
            >
              Add Brand
            </button>
          </div>
        </section>

        {/* TASK 4 */}
        <section className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-bold">
            Task 4 - Employee List
          </h2>

          <div className="mb-4 overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-blue-100">
                  <th className="border p-2">ID</th>
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Salary</th>
                </tr>
              </thead>

              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td className="border p-2">{employee.id}</td>
                    <td className="border p-2">{employee.name}</td>
                    <td className="border p-2">
                      ₹{employee.salary.toLocaleString("en-IN")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={addEmployee}
              disabled={employees.some((employee) => employee.id === 4)}
              className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Add Employee
            </button>

            <button
              onClick={updateSalary}
              className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
            >
              Update Salary
            </button>
          </div>
        </section>

        {/* TASK 5 */}
        <section className="rounded-xl bg-white p-6 shadow md:col-span-2">
          <h2 className="mb-4 text-xl font-bold">
            Task 5 - Show / Hide Password
          </h2>

          <div className="mb-4 rounded border bg-gray-50 p-4">
            <p className="text-lg">
              {" "}
              <strong>
                {showPassword ? password : "••••••••"}
              </strong>
            </p>
          </div>

          <button
            onClick={() => setShowPassword((prev) => !prev)}
            className="rounded bg-indigo-600 px-5 py-2 text-white hover:bg-indigo-700"
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </button>
        </section>

      </div>
    </div>
  );
}

export default App;
