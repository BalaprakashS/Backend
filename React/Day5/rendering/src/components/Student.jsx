function Student() {
  const student = {
    name: "Priya",
    age: 21,
    course: "MERN Stack",
    city: "Chennai"
  };

  return (
    <div className="bg-yellow-100 p-6 mb-5 rounded-lg">

      <h2 className="text-2xl font-bold text-yellow-700 mb-3">
        Student Details
      </h2>

      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
      <p>City: {student.city}</p>

    </div>
  );
}

export default Student;