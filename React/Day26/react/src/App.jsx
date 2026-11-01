import { useState, useMemo } from "react";

// TASK 1 - Number Multiplication

const calculateDouble = (number) => {
  console.log("Calculating Double...");

  let result = number * 2;

  // Expensive calculation
  for (let i = 0; i < 1000000; i++) {
    result += 0;
  }

  return result;
};


// TASK 2 - Product Search

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Keyboard", price: 1500 },
  { id: 4, name: "Mouse", price: 800 },
  { id: 5, name: "Monitor", price: 12000 }
];

const filterProducts = (products, search) => {
  console.log("Filtering Products...");

  return products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
};


// TASK 3 - Shopping Cart

const initialCart = [
  { id: 1, name: "Laptop", price: 50000, quantity: 1 },
  { id: 2, name: "Mobile", price: 20000, quantity: 2 },
  { id: 3, name: "Mouse", price: 800, quantity: 1 }
];

const calculateTotal = (cart) => {
  console.log("Calculating Cart Total...");

  return cart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
};


// MAIN APP

function App() {

  // TASK 1 STATES
  const [number, setNumber] = useState(0);
  const [theme1, setTheme1] = useState(false);

  const double = useMemo(() => {
    return calculateDouble(Number(number));
  }, [number]);


  // TASK 2 STATES
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const filteredProducts = useMemo(() => {
    return filterProducts(products, search);
  }, [search]);


  // TASK 3 STATES
  const [cart, setCart] = useState(initialCart);
  const [theme3, setTheme3] = useState(false);

  const total = useMemo(() => {
    return calculateTotal(cart);
  }, [cart]);


  // Update Quantity
  const updateQuantity = (id, value) => {

    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: Math.max(0, product.quantity + value)
            }
          : product
      )
    );

  };


  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>

      <h1>React useMemo Practical Tasks</h1>

      <hr />

      {/* TASK 1 */}

      <h2>Task 1 - Number Multiplication</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter Number"
      />

      <h3>Double: {double}</h3>

      <button onClick={() => setTheme1(!theme1)}>
        Change Theme
      </button>

      <div style={{
        background: theme1 ? "black" : "white",
        color: theme1 ? "white" : "black",
        padding: "15px",
        marginTop: "10px"
      }}>
        Current Theme: {theme1 ? "Dark" : "Light"}
      </div>


      <hr />


      {/* TASK 2 */}

      <h2>Task 2 - Product Search</h2>

      <input
        type="text"
        placeholder="Search Product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h3>Product List</h3>

      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <p key={product.id}>
            {product.name} - ₹{product.price}
          </p>
        ))
      ) : (
        <p>No Products Found</p>
      )}

      <h3>Counter: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>


      <hr />


      {/* TASK 3 */}

      <h2>Task 3 - Shopping Cart Total</h2>

      {cart.map((product) => (
        <div key={product.id} style={{ marginBottom: "15px" }}>

          <h3>{product.name}</h3>

          <p>Price: ₹{product.price}</p>

          <p>Quantity: {product.quantity}</p>

          <button
            onClick={() => updateQuantity(product.id, 1)}
          >
            +
          </button>{" "}

          <button
            onClick={() => updateQuantity(product.id, -1)}
            disabled={product.quantity === 0}
          >
            -
          </button>

        </div>
      ))}

      <h2>Total Amount: ₹{total}</h2>

      <button onClick={() => setTheme3(!theme3)}>
        Change Theme
      </button>

      <div style={{
        background: theme3 ? "black" : "white",
        color: theme3 ? "white" : "black",
        padding: "15px",
        marginTop: "10px"
      }}>
        Current Theme: {theme3 ? "Dark" : "Light"}
      </div>

    </div>
  );
}

export default App;