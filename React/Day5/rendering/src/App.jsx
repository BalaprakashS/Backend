import PrimitiveData from "./components/PrimitiveData";
import Skills from "./components/Skills";
import Student from "./components/Student";
import Students from "./components/Students";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen p-5">

      <h1 className="text-4xl font-bold text-center mb-8">
        React Rendering Tasks
      </h1>

      {/* TASK 1 */}
      <PrimitiveData />

      {/* TASK 2 */}
      <Skills />

      {/* TASK 3 */}
      <Student />

      {/* TASK 4 */}
      <Students />

    </div>
  );
}

export default App;