function PrimitiveData() {
  const studentName = "Arun";
  const age = 22;
  const course = "React";
  const fees = 15000;

  return (
    <div className="bg-blue-100 p-6 mb-5 rounded-lg">
      <h2 className="text-2xl font-bold text-blue-700">
        {studentName}
      </h2>

      <p>Age: {age}</p>
      <p>Course: {course}</p>
      <p>Fees: ₹{fees}</p>
    </div>
  );
}

export default PrimitiveData;