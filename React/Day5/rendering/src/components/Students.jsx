function Students() {
  const students = [
    {
      id: 1,
      name: "Arun",
      course: "React"
    },
    {
      id: 2,
      name: "Priya",
      course: "Node"
    },
    {
      id: 3,
      name: "Kumar",
      course: "MongoDB"
    }
  ];

  return (
    <div className="bg-purple-100 p-6 rounded-lg">

      <h2 className="text-2xl font-bold text-purple-700 mb-3">
        Students
      </h2>

      {students.map((student) => (
        <div
          key={student.id}
          className="bg-white p-4 mb-3 rounded shadow"
        >
          <p>Name: {student.name}</p>
          <p>Course: {student.course}</p>
        </div>
      ))}

    </div>
  );
}

export default Students;