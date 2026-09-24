import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import HomeProducts from "./components/HomeProducts";

function App() {
  return (
    <div>

      {/* TASK 1 */}
      <Header />

      <hr />

      {/* TASK 2 */}
      <Navbar />
      <Home />
      <About />
      <Footer />

      <hr />

      {/* TASK 3 */}
      <HomeProducts />

    </div>
  );
}

export default App;