function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node"
  ];

  return (
    <div className="bg-green-100 p-6 mb-5 rounded-lg">

      <h2 className="text-2xl font-bold text-green-700 mb-3">
        My Skills
      </h2>

      <ul className="list-disc pl-6">
        {skills.map((skill, index) => (
          <li key={index}>
            {skill}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Skills;