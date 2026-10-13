
import { useState } from "react";

const App = () => {
  const [activeTask, setActiveTask] = useState("employee");

  // Employee
  const [employee, setEmployee] = useState({
    name: "",
    department: "",
    salary: "",
  });
  const [employees, setEmployees] = useState([]);
  const [editEmployee, setEditEmployee] = useState(null);

  // Product
  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: "",
  });
  const [products, setProducts] = useState([]);

  // Course
  const [course, setCourse] = useState({
    name: "",
    trainer: "",
    duration: "",
  });
  const [courses, setCourses] = useState([]);

  // Expense
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    category: "",
  });
  const [expenses, setExpenses] = useState([]);
  const [editExpense, setEditExpense] = useState(null);

  // Student Marks
  const [student, setStudent] = useState({
    name: "",
    tamil: "",
    english: "",
    maths: "",
  });
  const [students, setStudents] = useState([]);

  const inputStyle = "border rounded p-2 w-full mb-3";
  const buttonStyle =
    "bg-blue-600 text-white px-4 py-2 rounded mr-2 mb-2";
  const deleteStyle =
    "bg-red-600 text-white px-3 py-1 rounded";
  const editStyle =
    "bg-green-600 text-white px-3 py-1 rounded mr-2";

  // Reusable input handler
  const handleChange = (e, setter, data) => {
    const { name, value } = e.target;
    setter({ ...data, [name]: value });
  };

  // 1. Employee Form
  const saveEmployee = (e) => {
    e.preventDefault();

    if (!employee.name.trim() ||
        !employee.department.trim() ||
        employee.salary === "") {
      alert("Fill all employee fields");
      return;
    }

    if (editEmployee !== null) {
      setEmployees(
        employees.map((item, index) =>
          index === editEmployee ? { ...employee } : item
        )
      );
      setEditEmployee(null);
    } else {
      setEmployees([...employees, { ...employee }]);
    }

    setEmployee({ name: "", department: "", salary: "" });
  };

  const startEmployeeEdit = (item, index) => {
    setEmployee({ ...item });
    setEditEmployee(index);
  };

  const deleteEmployee = (index) => {
    setEmployees(employees.filter((_, i) => i !== index));
    if (editEmployee === index) {
      setEmployee({ name: "", department: "", salary: "" });
      setEditEmployee(null);
    }
  };

  // 2. Product Form
  const addProduct = (e) => {
    e.preventDefault();

    if (!product.name.trim() ||
        product.price === "" ||
        product.quantity === "") {
      alert("Fill all product fields");
      return;
    }

    setProducts([...products, { ...product }]);
    setProduct({ name: "", price: "", quantity: "" });
  };

  const updateProduct = (index) => {
    const newPrice = prompt("Enter updated price:", products[index].price);
    if (newPrice === null || newPrice.trim() === "") return;

    const newQuantity = prompt(
      "Enter updated quantity:",
      products[index].quantity
    );
    if (newQuantity === null || newQuantity.trim() === "") return;

    setProducts(
      products.map((item, i) =>
        i === index
          ? { ...item, price: newPrice, quantity: newQuantity }
          : item
      )
    );
  };

  // 3. Course Form
  const addCourse = (e) => {
    e.preventDefault();

    if (!course.name.trim() ||
        !course.trainer.trim() ||
        !course.duration.trim()) {
      alert("Fill all course fields");
      return;
    }

    setCourses([...courses, { ...course }]);
    setCourse({ name: "", trainer: "", duration: "" });
  };

  // 4. Expense Form
  const saveExpense = (e) => {
    e.preventDefault();

    if (!expense.title.trim() ||
        expense.amount === "" ||
        !expense.category.trim()) {
      alert("Fill all expense fields");
      return;
    }

    if (editExpense !== null) {
      setExpenses(
        expenses.map((item, index) =>
          index === editExpense ? { ...expense } : item
        )
      );
      setEditExpense(null);
    } else {
      setExpenses([...expenses, { ...expense }]);
    }

    setExpense({ title: "", amount: "", category: "" });
  };

  const startExpenseEdit = (item, index) => {
    setExpense({ ...item });
    setEditExpense(index);
  };

  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
    if (editExpense === index) {
      setExpense({ title: "", amount: "", category: "" });
      setEditExpense(null);
    }
  };

  // 5. Student Marks Form
  const addStudent = (e) => {
    e.preventDefault();

    if (
      !student.name.trim() ||
      student.tamil === "" ||
      student.english === "" ||
      student.maths === ""
    ) {
      alert("Fill all student fields");
      return;
    }

    const marks = [
      Number(student.tamil),
      Number(student.english),
      Number(student.maths),
    ];

    if (marks.some((mark) => mark < 0 || mark > 100)) {
      alert("Marks must be between 0 and 100");
      return;
    }

    setStudents([...students, { ...student }]);
    setStudent({ name: "", tamil: "", english: "", maths: "" });
  };

  const totalMarks = (item) =>
    Number(item.tamil) +
    Number(item.english) +
    Number(item.maths);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        React Practice Tasks
      </h1>

      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {[
          ["employee", "Employee"],
          ["product", "Product"],
          ["course", "Course"],
          ["expense", "Expense"],
          ["student", "Student Marks"],
        ].map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveTask(key)}
            className={`px-4 py-2 rounded ${
              activeTask === key
                ? "bg-blue-700 text-white"
                : "bg-white border"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow p-5 max-w-4xl mx-auto">
        {/* EMPLOYEE */}
        {activeTask === "employee" && (
          <>
            <h2 className="text-xl font-bold mb-4">Employee Form</h2>

            <form onSubmit={saveEmployee}>
              <input
                className={inputStyle}
                name="name"
                placeholder="Employee Name"
                value={employee.name}
                onChange={(e) => handleChange(e, setEmployee, employee)}
              />
              <input
                className={inputStyle}
                name="department"
                placeholder="Department"
                value={employee.department}
                onChange={(e) => handleChange(e, setEmployee, employee)}
              />
              <input
                className={inputStyle}
                type="number"
                min="0"
                name="salary"
                placeholder="Salary"
                value={employee.salary}
                onChange={(e) => handleChange(e, setEmployee, employee)}
              />
              <button className={buttonStyle} type="submit">
                {editEmployee !== null ? "Update Employee" : "Add Employee"}
              </button>
            </form>

            {employees.map((item, index) => (
              <div key={index} className="border rounded p-3 mb-3">
                <p>Name: {item.name}</p>
                <p>Department: {item.department}</p>
                <p>Salary: ₹{item.salary}</p>
                <button
                  className={editStyle}
                  onClick={() => startEmployeeEdit(item, index)}
                >
                  Edit
                </button>
                <button
                  className={deleteStyle}
                  onClick={() => deleteEmployee(index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </>
        )}

        {/* PRODUCT */}
        {activeTask === "product" && (
          <>
            <h2 className="text-xl font-bold mb-4">Product Form</h2>

            <form onSubmit={addProduct}>
              <input
                className={inputStyle}
                name="name"
                placeholder="Product Name"
                value={product.name}
                onChange={(e) => handleChange(e, setProduct, product)}
              />
              <input
                className={inputStyle}
                type="number"
                min="0"
                name="price"
                placeholder="Price"
                value={product.price}
                onChange={(e) => handleChange(e, setProduct, product)}
              />
              <input
                className={inputStyle}
                type="number"
                min="0"
                name="quantity"
                placeholder="Quantity"
                value={product.quantity}
                onChange={(e) => handleChange(e, setProduct, product)}
              />
              <button className={buttonStyle} type="submit">
                Add Product
              </button>
            </form>

            {products.map((item, index) => (
              <div key={index} className="border rounded p-3 mb-3">
                <p>Name: {item.name}</p>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button
                  className={editStyle}
                  onClick={() => updateProduct(index)}
                >
                  Update Price / Quantity
                </button>
              </div>
            ))}
          </>
        )}

        {/* COURSE */}
        {activeTask === "course" && (
          <>
            <h2 className="text-xl font-bold mb-4">Course Form</h2>

            <form onSubmit={addCourse}>
              <input
                className={inputStyle}
                name="name"
                placeholder="Course Name"
                value={course.name}
                onChange={(e) => handleChange(e, setCourse, course)}
              />
              <input
                className={inputStyle}
                name="trainer"
                placeholder="Trainer Name"
                value={course.trainer}
                onChange={(e) => handleChange(e, setCourse, course)}
              />
              <input
                className={inputStyle}
                name="duration"
                placeholder="Duration (e.g. 3 months)"
                value={course.duration}
                onChange={(e) => handleChange(e, setCourse, course)}
              />
              <button className={buttonStyle} type="submit">
                Add Course
              </button>
            </form>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse mt-4">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border p-2">Course</th>
                    <th className="border p-2">Trainer</th>
                    <th className="border p-2">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((item, index) => (
                    <tr key={index}>
                      <td className="border p-2">{item.name}</td>
                      <td className="border p-2">{item.trainer}</td>
                      <td className="border p-2">{item.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* EXPENSE */}
        {activeTask === "expense" && (
          <>
            <h2 className="text-xl font-bold mb-4">Expense Form</h2>

            <form onSubmit={saveExpense}>
              <input
                className={inputStyle}
                name="title"
                placeholder="Expense Title"
                value={expense.title}
                onChange={(e) => handleChange(e, setExpense, expense)}
              />
              <input
                className={inputStyle}
                type="number"
                min="0"
                name="amount"
                placeholder="Amount"
                value={expense.amount}
                onChange={(e) => handleChange(e, setExpense, expense)}
              />
              <input
                className={inputStyle}
                name="category"
                placeholder="Category"
                value={expense.category}
                onChange={(e) => handleChange(e, setExpense, expense)}
              />
              <button className={buttonStyle} type="submit">
                {editExpense !== null ? "Update Expense" : "Add Expense"}
              </button>
            </form>

            {expenses.map((item, index) => (
              <div key={index} className="border rounded p-3 mb-3">
                <p>Title: {item.title}</p>
                <p>Amount: ₹{item.amount}</p>
                <p>Category: {item.category}</p>
                <button
                  className={editStyle}
                  onClick={() => startExpenseEdit(item, index)}
                >
                  Edit
                </button>
                <button
                  className={deleteStyle}
                  onClick={() => deleteExpense(index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </>
        )}

        {/* STUDENT MARKS */}
        {activeTask === "student" && (
          <>
            <h2 className="text-xl font-bold mb-4">Student Marks Form</h2>

            <form onSubmit={addStudent}>
              <input
                className={inputStyle}
                name="name"
                placeholder="Student Name"
                value={student.name}
                onChange={(e) => handleChange(e, setStudent, student)}
              />
              <input
                className={inputStyle}
                type="number"
                min="0"
                max="100"
                name="tamil"
                placeholder="Tamil Marks"
                value={student.tamil}
                onChange={(e) => handleChange(e, setStudent, student)}
              />
              <input
                className={inputStyle}
                type="number"
                min="0"
                max="100"
                name="english"
                placeholder="English Marks"
                value={student.english}
                onChange={(e) => handleChange(e, setStudent, student)}
              />
              <input
                className={inputStyle}
                type="number"
                min="0"
                max="100"
                name="maths"
                placeholder="Maths Marks"
                value={student.maths}
                onChange={(e) => handleChange(e, setStudent, student)}
              />
              <button className={buttonStyle} type="submit">
                Add Student
              </button>
            </form>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse mt-4">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border p-2">Name</th>
                    <th className="border p-2">Tamil</th>
                    <th className="border p-2">English</th>
                    <th className="border p-2">Maths</th>
                    <th className="border p-2">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((item, index) => (
                    <tr key={index}>
                      <td className="border p-2">{item.name}</td>
                      <td className="border p-2">{item.tamil}</td>
                      <td className="border p-2">{item.english}</td>
                      <td className="border p-2">{item.maths}</td>
                      <td className="border p-2 font-bold">
                        {totalMarks(item)} / 300
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
