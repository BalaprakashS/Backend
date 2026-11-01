import { useRef, useEffect } from "react";

function App() {

  // TASK 1 - Input Focus and Clear
  const nameRef = useRef();
  const emailRef = useRef();

  const focusName = () => {
    nameRef.current.focus();
  };

  const focusEmail = () => {
    emailRef.current.focus();
  };

  const clearInputs = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
  };

  const submitForm = () => {
    alert(
      "Name: " + nameRef.current.value +
      "\nEmail: " + emailRef.current.value
    );
  };


  // TASK 2 - Password Show / Hide
  const passwordRef = useRef();

  const showPassword = () => {
    passwordRef.current.type = "text";
  };

  const hidePassword = () => {
    passwordRef.current.type = "password";
  };


  // TASK 3 - Single Page Navigation
  const homeRef = useRef();
  const aboutRef = useRef();
  const servicesRef = useRef();
  const contactRef = useRef();

  const goToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({
      behavior: "smooth"
    });
  };


  // TASK 4 - Stopwatch
  const timerRef = useRef(null);
  const secondsRef = useRef(0);
  const displayRef = useRef();

  const startTimer = () => {
    if (timerRef.current !== null) return;

    timerRef.current = setInterval(() => {
      secondsRef.current++;

      displayRef.current.innerText = secondsRef.current + " Seconds";
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;

    secondsRef.current = 0;
    displayRef.current.innerText = "0 Seconds";
  };

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);


  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>

      <h1>React useRef - Practical Tasks</h1>

      <hr />

      {/* TASK 1 */}
      <h2>Task 1 - Input Focus and Clear</h2>

      <input ref={nameRef} type="text" placeholder="Enter Name" />
      <br /><br />

      <input ref={emailRef} type="email" placeholder="Enter Email" />
      <br /><br />

      <button onClick={focusName}>Focus Name</button>{" "}
      <button onClick={focusEmail}>Focus Email</button>{" "}
      <button onClick={clearInputs}>Clear</button>{" "}
      <button onClick={submitForm}>Submit</button>

      <hr />

      {/* TASK 2 */}
      <h2>Task 2 - Password Show / Hide</h2>

      <input
        ref={passwordRef}
        type="password"
        placeholder="Enter Password"
      />

      <br /><br />

      <button onClick={showPassword}>Show</button>{" "}
      <button onClick={hidePassword}>Hide</button>

      <hr />

      {/* TASK 3 */}
      <h2>Task 3 - Single Page Navigation</h2>

      <button onClick={() => goToSection(homeRef)}>Home</button>{" "}
      <button onClick={() => goToSection(aboutRef)}>About</button>{" "}
      <button onClick={() => goToSection(servicesRef)}>Services</button>{" "}
      <button onClick={() => goToSection(contactRef)}>Contact</button>

      <div ref={homeRef} style={{ height: "400px", background: "lightblue", padding: "20px", marginTop: "20px" }}>
        <h2>Home Section</h2>
        <p>Welcome to Home Page</p>
      </div>

      <div ref={aboutRef} style={{ height: "400px", background: "lightgreen", padding: "20px" }}>
        <h2>About Section</h2>
        <p>About Our Website</p>
      </div>

      <div ref={servicesRef} style={{ height: "400px", background: "lightyellow", padding: "20px" }}>
        <h2>Services Section</h2>
        <p>Our Services</p>
      </div>

      <div ref={contactRef} style={{ height: "400px", background: "lightpink", padding: "20px" }}>
        <h2>Contact Section</h2>
        <p>Contact Us</p>
      </div>

      <hr />

      {/* TASK 4 */}
      <h2>Task 4 - Stopwatch</h2>

      <h1 ref={displayRef}>0 Seconds</h1>

      <button onClick={startTimer}>Start</button>{" "}
      <button onClick={stopTimer}>Stop</button>{" "}
      <button onClick={resetTimer}>Reset</button>

    </div>
  );
}

export default App;