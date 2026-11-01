import { useReducer, useEffect } from "react";

// ==========================================
// TASK 1 - Counter Application
// ==========================================

const counterReducer = (state, action) => {

  switch (action.type) {

    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    case "RESET":
      return 0;

    default:
      return state;
  }
};


// ==========================================
// TASK 2 - Increment by Custom Value
// ==========================================

const customReducer = (state, action) => {

  switch (action.type) {

    case "ADD":
      return state + action.payload;

    case "SUBTRACT":
      return state - action.payload;

    case "RESET":
      return 10;

    default:
      return state;
  }
};


// ==========================================
// TASK 3 - Show / Hide Password
// ==========================================

const passwordReducer = (state, action) => {

  switch (action.type) {

    case "SHOW":
      return true;

    case "HIDE":
      return false;

    default:
      return state;
  }
};


// ==========================================
// TASK 4 - Student Form
// ==========================================

const initialStudent = {
  name: "",
  email: "",
  course: ""
};

const studentReducer = (state, action) => {

  switch (action.type) {

    case "UPDATE":
      return {
        ...state,
        [action.field]: action.payload
      };

    case "RESET":
      return initialStudent;

    default:
      return state;
  }
};


// ==========================================
// TASK 5 - API Fetch Users
// ==========================================

const initialUsers = {
  users: [],
  loading: true,
  error: ""
};

const usersReducer = (state, action) => {

  switch (action.type) {

    case "FETCH_START":
      return {
        ...state,
        loading: true,
        error: ""
      };

    case "FETCH_SUCCESS":
      return {
        users: action.payload,
        loading: false,
        error: ""
      };

    case "FETCH_ERROR":
      return {
        users: [],
        loading: false,
        error: "Something went wrong!"
      };

    default:
      return state;
  }
};


// ==========================================
// TASK 6 - Fetch Users with Search
// ==========================================

const searchReducer = (state, action) => {

  switch (action.type) {

    case "SET_USERS":
      return {
        ...state,
        users: action.payload
      };

    case "SEARCH":
      return {
        ...state,
        search: action.payload
      };

    default:
      return state;
  }
};


// ==========================================
// TASK 7 - Todo Application
// ==========================================

const todoReducer = (state, action) => {

  switch (action.type) {

    case "ADD":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false
        }
      ];

    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);

    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    default:
      return state;
  }
};


// ==========================================
// MAIN APP
// ==========================================

function App() {

  // TASK 1
  const [count, dispatch] = useReducer(counterReducer, 0);


  // TASK 2
  const [number, customDispatch] = useReducer(customReducer, 10);


  // TASK 3
  const [visible, passwordDispatch] = useReducer(passwordReducer, false);


  // TASK 4
  const [student, studentDispatch] = useReducer(
    studentReducer,
    initialStudent
  );


  // TASK 5
  const [userData, userDispatch] = useReducer(
    usersReducer,
    initialUsers
  );


  // TASK 6
  const [searchData, searchDispatch] = useReducer(
    searchReducer,
    {
      users: [],
      search: ""
    }
  );


  // TASK 7
  const [todos, todoDispatch] = useReducer(todoReducer, []);

  const [todoInput, setTodoInput] = useReducer(
    (state, action) => action,
    ""
  );


  // TASK 5 - Fetch Users
  useEffect(() => {

    const fetchUsers = async () => {

      userDispatch({ type: "FETCH_START" });

      try {

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("API Error");
        }

        const data = await response.json();

        userDispatch({
          type: "FETCH_SUCCESS",
          payload: data
        });

      } catch (error) {

        userDispatch({ type: "FETCH_ERROR" });

      }

    };

    fetchUsers();

  }, []);


  // TASK 6 - Fetch Users with Search
  useEffect(() => {

    const fetchUsers = async () => {

      try {

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("API Error");
        }

        const data = await response.json();

        searchDispatch({
          type: "SET_USERS",
          payload: data
        });

      } catch (error) {

        console.log("Unable to fetch users");

      }

    };

    fetchUsers();

  }, []);


  // TASK 6 - Filter Users
  const filteredUsers = searchData.users.filter((user) =>
    user.name.toLowerCase().includes(searchData.search.toLowerCase())
  );


  // TASK 7 - Add Todo
  const addTodo = () => {

    if (todoInput.trim() === "") return;

    todoDispatch({
      type: "ADD",
      payload: todoInput
    });

    setTodoInput("");
  };


  return (

    <div style={{
      padding: "20px",
      fontFamily: "Arial"
    }}>

      <h1>React useReducer - 7 Practical Tasks</h1>

      <hr />


      {/* TASK 1 */}
      <h2>Task 1 - Counter Application</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment
      </button>{" "}

      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>{" "}

      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>


      <hr />


      {/* TASK 2 */}
      <h2>Task 2 - Increment by Custom Value</h2>

      <h3>Count: {number}</h3>

      <button onClick={() => customDispatch({
        type: "ADD",
        payload: 5
      })}>
        Add 5
      </button>{" "}

      <button onClick={() => customDispatch({
        type: "ADD",
        payload: 10
      })}>
        Add 10
      </button>{" "}

      <button onClick={() => customDispatch({
        type: "SUBTRACT",
        payload: 5
      })}>
        Subtract 5
      </button>{" "}

      <button onClick={() => customDispatch({
        type: "RESET"
      })}>
        Reset
      </button>


      <hr />


      {/* TASK 3 */}
      <h2>Task 3 - Show / Hide Password</h2>

      <input
        type={visible ? "text" : "password"}
        placeholder="Enter Password"
      />{" "}

      <button onClick={() => passwordDispatch({
        type: "SHOW"
      })}>
        Show Password
      </button>{" "}

      <button onClick={() => passwordDispatch({
        type: "HIDE"
      })}>
        Hide Password
      </button>


      <hr />


      {/* TASK 4 */}
      <h2>Task 4 - Student Form</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={student.name}
        onChange={(e) => studentDispatch({
          type: "UPDATE",
          field: "name",
          payload: e.target.value
        })}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Enter Email"
        value={student.email}
        onChange={(e) => studentDispatch({
          type: "UPDATE",
          field: "email",
          payload: e.target.value
        })}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Enter Course"
        value={student.course}
        onChange={(e) => studentDispatch({
          type: "UPDATE",
          field: "course",
          payload: e.target.value
        })}
      />

      <br /><br />

      <button onClick={() => studentDispatch({
        type: "RESET"
      })}>
        Reset
      </button>

      <h3>Student Details</h3>

      <p>Name: {student.name}</p>
      <p>Email: {student.email}</p>
      <p>Course: {student.course}</p>


      <hr />


      {/* TASK 5 */}
      <h2>Task 5 - API Fetch Users</h2>

      {userData.loading && <p>Loading...</p>}

      {userData.error && <p>{userData.error}</p>}

      {userData.users.map((user) => (

        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <hr />
        </div>

      ))}


      <hr />


      {/* TASK 6 */}
      <h2>Task 6 - Fetch Users with Search</h2>

      <input
        type="text"
        placeholder="Search User"
        value={searchData.search}
        onChange={(e) => searchDispatch({
          type: "SEARCH",
          payload: e.target.value
        })}
      />

      {filteredUsers.length > 0 ? (

        filteredUsers.map((user) => (

          <div key={user.id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>

        ))

      ) : (

        <p>No Users Found</p>

      )}


      <hr />


      {/* TASK 7 */}
      <h2>Task 7 - Todo Application</h2>

      <input
        type="text"
        placeholder="Enter Task"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />{" "}

      <button onClick={addTodo}>
        Add Task
      </button>

      <h3>Total Tasks: {todos.length}</h3>

      {todos.map((todo) => (

        <div key={todo.id}>

          <span style={{
            textDecoration: todo.completed ? "line-through" : "none"
          }}>
            {todo.text}
          </span>{" "}

          <button onClick={() => todoDispatch({
            type: "TOGGLE",
            payload: todo.id
          })}>
            {todo.completed ? "Pending" : "Complete"}
          </button>{" "}

          <button onClick={() => todoDispatch({
            type: "DELETE",
            payload: todo.id
          })}>
            Delete
          </button>

        </div>

      ))}

    </div>

  );
}

export default App;