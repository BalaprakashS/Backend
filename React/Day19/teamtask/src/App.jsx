
import { useState } from "react";

const assignment = [
  {
    level: "Easy", type: "JavaScript", no: 1,
    title: "Find Second Largest Number",
    question: "Find the second largest distinct number without sort().",
    expected: "30",
    code: `const arr = [10,45,20,45,30];
let max = -Infinity, second = -Infinity;
for (const n of arr) {
  if (n > max) {
    second = max;
    max = n;
  } else if (n < max && n > second) second = n;
}
console.log(second);`
  },
  {
    level: "Easy", type: "JavaScript", no: 2,
    title: "Remove Duplicate Numbers",
    question: "Remove duplicates without using Set.",
    expected: "[1, 2, 3, 4, 5]",
    code: `const arr = [1,2,2,3,4,4,5];
const result = [];
for (const n of arr) {
  if (!result.includes(n)) result.push(n);
}
console.log(result);`
  },
  {
    level: "Easy", type: "JavaScript", no: 3,
    title: "Count Character Frequency",
    question: "Count each character in banana.",
    expected: "{ b: 1, a: 3, n: 2 }",
    code: `const str = "banana";
const frequency = {};
for (const ch of str) {
  frequency[ch] = (frequency[ch] || 0) + 1;
}
console.log(frequency);`
  },
  {
    level: "Easy", type: "JavaScript", no: 4,
    title: "Employee Salary Filter",
    question: "Filter employees earning above ₹30,000 and calculate total salary.",
    expected: "Total: ₹75,000",
    code: `const employees = [
  {name:"Arun",salary:25000},
  {name:"Bala",salary:40000},
  {name:"Ravi",salary:35000}
];
const result = employees.filter(e => e.salary > 30000);
const total = result.reduce((sum,e) => sum + e.salary, 0);
console.log(result, total);`
  },
  {
    level: "Easy", type: "JavaScript", no: 5,
    title: "Reverse Words Without reverse()",
    question: "Reverse the order of words.",
    expected: "JavaScript love I",
    code: `const words = "I love JavaScript".split(" ");
let result = "";
for (let i = words.length - 1; i >= 0; i--) {
  result += words[i] + (i > 0 ? " " : "");
}
console.log(result);`
  },
  {
    level: "Easy", type: "React", no: 6,
    title: "State Update Prediction",
    question: "Call setCount(count + 1) three times in one handler.",
    expected: "1; functional updates produce 3",
    code: `const [count, setCount] = useState(0);

function handleClick() {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
}

// Correct way to increment by 3:
function incrementThree() {
  setCount(p => p + 1);
  setCount(p => p + 1);
  setCount(p => p + 1);
}`
  },
  {
    level: "Easy", type: "React", no: 7,
    title: "Form Handling",
    question: "Use one object state for Name, Email and Age.",
    expected: "Display the submitted object",
    code: `const [form, setForm] = useState({
  name: "", email: "", age: ""
});
const [result, setResult] = useState(null);
const [error, setError] = useState("");

function handleChange(e) {
  setForm({...form, [e.target.name]: e.target.value});
}

function handleSubmit(e) {
  e.preventDefault();
  if (!form.name.trim() || !form.email.trim() || !form.age.trim()) {
    setError("Fill all fields");
    return;
  }
  setError("");
  setResult({...form});
}

// Inputs: name="name", name="email", name="age"
// Each input uses value={form[field]} and onChange={handleChange}.
// Render result with: <pre>{JSON.stringify(result, null, 2)}</pre>`
  },
  {
    level: "Easy", type: "React", no: 8,
    title: "Array Add and Delete",
    question: "Add and delete student names without mutating state.",
    expected: "Updated student list",
    code: `const [students, setStudents] = useState([]);
const [name, setName] = useState("");

function addStudent() {
  if (!name.trim()) return;
  setStudents(prev => [...prev, name.trim()]);
  setName("");
}

function deleteStudent(index) {
  setStudents(prev => prev.filter((_, i) => i !== index));
}

// Render students.map((s, i) => ...)
// Add: onClick={addStudent}
// Delete: onClick={() => deleteStudent(i)}`
  },
  {
    level: "Easy", type: "React", no: 9,
    title: "Fetch API Search",
    question: "Fetch users and search names without case sensitivity.",
    expected: "Matching user names",
    code: `const [users, setUsers] = useState([]);
const [search, setSearch] = useState("");

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(r => {
      if (!r.ok) throw new Error("Fetch failed");
      return r.json();
    })
    .then(setUsers)
    .catch(console.error);
}, []);

const result = users.filter(u =>
  u.name.toLowerCase().includes(search.toLowerCase())
);

// Render result.map(u => <p key={u.id}>{u.name}</p>)`
  },
  {
    level: "Easy", type: "React", no: 10,
    title: "Timer with Cleanup",
    question: "Show a welcome message after three seconds.",
    expected: "Welcome to React!",
    code: `const [message, setMessage] = useState("Please Wait...");
const [restart, setRestart] = useState(0);

useEffect(() => {
  const timer = setTimeout(() => {
    setMessage("Welcome to React!");
  }, 3000);
  return () => clearTimeout(timer);
}, [restart]);

function handleRestart() {
  setMessage("Please Wait...");
  setRestart(p => p + 1);
}`
  },
  {
    level: "Medium", type: "JavaScript", no: 1,
    title: "First Non-Repeating Character",
    question: "Find the first unique character without indexOf() or lastIndexOf().",
    expected: "e",
    code: `const str = "aabbcdecd";
const freq = {};
for (const ch of str) {
  freq[ch] = (freq[ch] || 0) + 1;
}
let result = "";
for (const ch of str) {
  if (freq[ch] === 1) {
    result = ch;
    break;
  }
}
console.log(result);`
  },
  {
    level: "Medium", type: "JavaScript", no: 2,
    title: "Group Employees by Department",
    question: "Group employees and calculate each department's total salary.",
    expected: "IT: ₹90,000; HR: ₹65,000",
    code: `const employees = [
  {name:"Arun",department:"IT",salary:40000},
  {name:"Bala",department:"HR",salary:30000},
  {name:"Ravi",department:"IT",salary:50000},
  {name:"Priya",department:"HR",salary:35000}
];
const result = {};
for (const e of employees) {
  if (!result[e.department]) {
    result[e.department] = {employees: [], totalSalary: 0};
  }
  result[e.department].employees.push(e.name);
  result[e.department].totalSalary += e.salary;
}
console.log(result);`
  },
  {
    level: "Medium", type: "JavaScript", no: 3,
    title: "Shopping Cart Business Logic",
    question: "Validate quantity and stock; apply 10% discount above ₹5,000.",
    expected: "Accepted items, rejected items and final total",
    code: `const cart = [
  {name:"Phone",price:4000,quantity:1,stock:5},
  {name:"Headphones",price:1500,quantity:2,stock:4},
  {name:"Mouse",price:500,quantity:0,stock:3}
];
let subtotal = 0;
const accepted = [], rejected = [];

for (const item of cart) {
  if (!Number.isInteger(item.quantity) || item.quantity <= 0) {
    rejected.push({...item, reason:"Invalid quantity"});
  } else if (item.quantity > item.stock) {
    rejected.push({...item, reason:"Insufficient stock"});
  } else {
    accepted.push(item);
    subtotal += item.price * item.quantity;
  }
}
const discount = subtotal > 5000 ? subtotal * 0.1 : 0;
console.log({accepted, rejected, subtotal, discount, total: subtotal-discount});`
  },
  {
    level: "Medium", type: "JavaScript", no: 4,
    title: "Flatten Nested Array",
    question: "Flatten an array without using flat().",
    expected: "[1, 2, 3, 4, 5, 6]",
    code: `const arr = [1,[2,3],[4,[5,6]]];
const result = [];

function flatten(array) {
  for (const item of array) {
    if (Array.isArray(item)) flatten(item);
    else result.push(item);
  }
}
flatten(arr);
console.log(result);`
  },
  {
    level: "Medium", type: "JavaScript", no: 5,
    title: "Find Missing Number",
    question: "Find the missing number without sorting.",
    expected: "4",
    code: `const arr = [1,2,3,5,6,7];
const n = arr.length + 1;
const expected = n * (n + 1) / 2;
let actual = 0;
for (const num of arr) actual += num;
console.log(expected - actual);`
  },
  {
    level: "Medium", type: "React", no: 6,
    title: "State Snapshot Prediction",
    question: "Explain why console.log prints the old array after setState.",
    expected: "State is a snapshot of the current render",
    code: `const [students, setStudents] = useState(["Arun"]);

function addStudent() {
  const updated = [...students, "Bala"];
  setStudents(updated);
  console.log(students); // Old array
  console.log(updated);  // New array
}

useEffect(() => {
  console.log(students); // After render
}, [students]);`
  },
  {
    level: "Medium", type: "React", no: 7,
    title: "Combined Search, Filter and Sort",
    question: "Fetch users; search by name, filter by city and sort by ID.",
    expected: "Filtered and sorted users",
    code: `const [users, setUsers] = useState([]);
const [search, setSearch] = useState("");
const [city, setCity] = useState("All");
const [order, setOrder] = useState("asc");

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(r => r.json()).then(setUsers).catch(console.error);
}, []);

const cities = [...new Set(users.map(u => u.address.city))];
let result = users.filter(u =>
  u.name.toLowerCase().includes(search.toLowerCase())
);
if (city !== "All") {
  result = result.filter(u => u.address.city === city);
}
result = [...result].sort((a,b) =>
  order === "asc" ? a.id-b.id : b.id-a.id
);

// Add search input, city select and sort button.
// Render result.map(u => <p key={u.id}>{u.name}</p>)`
  },
  {
    level: "Medium", type: "React", no: 8,
    title: "Employee CRUD with localStorage",
    question: "Add, edit, delete and restore employees after refresh.",
    expected: "Persistent employee list",
    code: `const KEY = "employees";
const [employees, setEmployees] = useState(() => {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  } catch {
    return [];
  }
});
const [name, setName] = useState("");
const [salary, setSalary] = useState("");
const [editId, setEditId] = useState(null);

function save(updated) {
  localStorage.setItem(KEY, JSON.stringify(updated));
  setEmployees(updated);
}
function submit(e) {
  e.preventDefault();
  if (!name.trim() || salary === "" || Number(salary) < 0) return;
  const updated = editId !== null
    ? employees.map(emp => emp.id === editId
        ? {...emp, name: name.trim(), salary: Number(salary)} : emp)
    : [...employees, {id: Date.now(), name: name.trim(), salary: Number(salary)}];
  save(updated);
  setName(""); setSalary(""); setEditId(null);
}
function edit(emp) {
  setName(emp.name); setSalary(String(emp.salary)); setEditId(emp.id);
}
function remove(id) {
  save(employees.filter(emp => emp.id !== id));
}

// Form onSubmit={submit}; Edit button calls edit(emp).
// Delete button calls remove(emp.id).`
  },
  {
    level: "Medium", type: "React", no: 9,
    title: "useEffect Dependency Problem",
    question: "Fix an interval that keeps setting count to 1.",
    expected: "Count increases every second",
    code: `const [count, setCount] = useState(0);

useEffect(() => {
  const timer = setInterval(() => {
    setCount(prev => prev + 1);
  }, 1000);

  return () => clearInterval(timer);
}, []);`
  },
  {
    level: "Medium", type: "React", no: 10,
    title: "Debounced API Search",
    question: "Wait 500 ms after typing stops and cancel old requests.",
    expected: "Only current search results",
    code: `const [query, setQuery] = useState("");
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(false);

useEffect(() => {
  const controller = new AbortController();
  const timer = setTimeout(async () => {
    if (!query.trim()) {
      setUsers([]); setLoading(false); return;
    }
    setLoading(true);
    try {
      const r = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {signal: controller.signal}
      );
      if (!r.ok) throw new Error("Fetch failed");
      const data = await r.json();
      setUsers(data.filter(u =>
        u.name.toLowerCase().includes(query.toLowerCase())
      ));
    } catch (e) {
      if (e.name !== "AbortError") console.error(e);
    } finally {
      if (!controller.signal.aborted) setLoading(false);
    }
  }, 500);
  return () => {
    clearTimeout(timer);
    controller.abort();
  };
}, [query]);`
  },
  {
    level: "Hard", type: "JavaScript", no: 1,
    title: "Minimum Meeting Rooms",
    question: "Find rooms needed for overlapping meetings.",
    expected: "2 rooms",
    code: `const meetings = [[9,10],[9.5,11],[10,12],[11,13]];
const starts = meetings.map(m => m[0]).sort((a,b) => a-b);
const ends = meetings.map(m => m[1]).sort((a,b) => a-b);
let rooms = 0, maxRooms = 0, i = 0, j = 0;

while (i < starts.length) {
  if (starts[i] < ends[j]) {
    rooms++;
    maxRooms = Math.max(maxRooms, rooms);
    i++;
  } else {
    rooms--;
    j++;
  }
}
console.log(maxRooms);`
  },
  {
    level: "Hard", type: "JavaScript", no: 2,
    title: "Bank Transaction Validation",
    question: "Start at ₹5,000; reject debits exceeding balance.",
    expected: "Rejected transactions and final balance",
    code: `const transactions = [
  {type:"debit",amount:3000,timestamp:1},
  {type:"credit",amount:2000,timestamp:2},
  {type:"debit",amount:6000,timestamp:3},
  {type:"debit",amount:1000,timestamp:4}
];
let balance = 5000;
const rejected = [], accepted = [];
transactions.sort((a,b) => a.timestamp-b.timestamp);

for (const tx of transactions) {
  if (!Number.isFinite(tx.amount) || tx.amount <= 0) {
    rejected.push({...tx, reason:"Invalid amount"}); continue;
  }
  if (tx.type === "debit") {
    if (tx.amount > balance) {
      rejected.push({...tx, reason:"Insufficient balance"}); continue;
    }
    balance -= tx.amount;
  } else if (tx.type === "credit") {
    balance += tx.amount;
  } else {
    rejected.push({...tx, reason:"Invalid type"}); continue;
  }
  accepted.push({...tx, balanceAfter:balance});
}
console.log({accepted, rejected, balance});`
  },
  {
    level: "Hard", type: "JavaScript", no: 3,
    title: "Longest Substring Without Repeating Characters",
    question: "Find the longest unique-character substring efficiently.",
    expected: "abc, length 3",
    code: `const str = "abcabcbb";
let left = 0, longest = "";
const lastSeen = new Map();

for (let right = 0; right < str.length; right++) {
  const ch = str[right];
  if (lastSeen.has(ch) && lastSeen.get(ch) >= left) {
    left = lastSeen.get(ch) + 1;
  }
  lastSeen.set(ch, right);
  if (right - left + 1 > longest.length) {
    longest = str.slice(left, right + 1);
  }
}
console.log(longest, longest.length);`
  },
  {
    level: "Hard", type: "JavaScript", no: 4,
    title: "Inventory Order Allocation",
    question: "Process orders sequentially and reject orders exceeding stock.",
    expected: "Updated stock and order report",
    code: `const inventory = {phone:5, laptop:2, mouse:10};
const stock = {...inventory};
const orders = [
  {id:1,item:"phone",quantity:3},
  {id:2,item:"laptop",quantity:3},
  {id:3,item:"mouse",quantity:5},
  {id:4,item:"phone",quantity:2}
];
const report = [];

for (const o of orders) {
  if (!Number.isInteger(o.quantity) || o.quantity <= 0) {
    report.push({...o,status:"Rejected: Invalid quantity"});
  } else if (!Object.hasOwn(stock, o.item)) {
    report.push({...o,status:"Rejected: Unknown item"});
  } else if (o.quantity > stock[o.item]) {
    report.push({...o,status:"Rejected: Insufficient stock"});
  } else {
    stock[o.item] -= o.quantity;
    report.push({...o,status:"Accepted"});
  }
}
console.log({stock, report});`
  },
  {
    level: "Hard", type: "JavaScript", no: 5,
    title: "Loan Eligibility Rules Engine",
    question: "Calculate EMI, DTI and configurable eligibility rules.",
    expected: "EMI, DTI and rejection reasons",
    code: `function checkLoan({income, existingEMI, loan, annualRate, years}) {
  const r = annualRate / 1200;
  const n = years * 12;
  const emi = r === 0 ? loan/n :
    loan*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
  const dti = (existingEMI + emi) / income * 100;

  const rules = [
    [income >= 25000, "Income must be at least ₹25,000"],
    [loan > 0, "Loan must be positive"],
    [existingEMI >= 0, "Existing EMI cannot be negative"],
    [years > 0, "Tenure must be positive"],
    [annualRate >= 0, "Interest rate cannot be negative"],
    [Number.isFinite(dti) && dti <= 40, "DTI exceeds 40%"]
  ];
  const rejectedReasons = rules.filter(r => !r[0]).map(r => r[1]);
  return {
    emi: Number.isFinite(emi) ? +emi.toFixed(2) : null,
    dti: Number.isFinite(dti) ? +dti.toFixed(2) : null,
    eligible: rejectedReasons.length === 0,
    rejectedReasons
  };
}
console.log(checkLoan({
  income:50000, existingEMI:5000, loan:500000,
  annualRate:12, years:5
}));`
  },
  {
    level: "Hard", type: "React", no: 6,
    title: "Multi-Step Loan Application",
    question: "Create Personal, Employment, Loan and Review steps.",
    expected: "One validated application object",
    code: `const steps = ["Personal","Employment","Loan","Review"];
const [step, setStep] = useState(0);
const [form, setForm] = useState({
  name:"", email:"", income:"", company:"", amount:""
});
const [error, setError] = useState("");
const [submitted, setSubmitted] = useState(null);

function updateField(e) {
  setForm({...form, [e.target.name]:e.target.value});
}
function validate() {
  if (step === 0 && (!form.name.trim() || !form.email.trim()))
    return "Enter name and email";
  if (step === 1 && (!form.company.trim() || Number(form.income) <= 0))
    return "Enter company and valid income";
  if (step === 2 && Number(form.amount) <= 0)
    return "Enter a valid loan amount";
  return "";
}
function nextStep() {
  const message = validate();
  if (message) { setError(message); return; }
  setError("");
  setStep(p => Math.min(p + 1, 3));
}
function submitApplication() {
  setSubmitted({...form});
}

// Render fields for the current step.
// Back: setStep(p => p - 1)
// Review: JSON.stringify(form, null, 2)
// Submit: onClick={submitApplication}`
  },
  {
    level: "Hard", type: "React", no: 7,
    title: "API Pagination with Search and Sorting",
    question: "Search, filter by category, sort price and paginate products.",
    expected: "Filtered products in pages",
    code: `const [products, setProducts] = useState([]);
const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");
const [sort, setSort] = useState("asc");
const [page, setPage] = useState(1);
const pageSize = 5;

useEffect(() => {
  fetch("https://dummyjson.com/products?limit=0")
    .then(r => r.json()).then(d => setProducts(d.products))
    .catch(console.error);
}, []);

useEffect(() => { setPage(1); }, [search, category, sort]);

const categories = [...new Set(products.map(p => p.category))];
let result = products.filter(p =>
  p.title.toLowerCase().includes(search.toLowerCase())
);
if (category !== "All") {
  result = result.filter(p => p.category === category);
}
result = [...result].sort((a,b) =>
  sort === "asc" ? a.price-b.price : b.price-a.price
);
const pages = Math.ceil(result.length / pageSize);
const visible = result.slice((page-1)*pageSize, page*pageSize);

// Render visible products and Previous/Next buttons.
// Disable Previous at page 1 and Next at page >= pages.`
  },
  {
    level: "Hard", type: "React", no: 8,
    title: "Optimistic CRUD and Rollback",
    question: "Update immediately and roll back on failure.",
    expected: "Optimistic UI with stale rollback protection",
    code: `const [tasks, setTasks] = useState([
  {id:1,title:"Learn React",done:false}
]);
const versions = useRef({});

async function toggleTask(id) {
  const previous = tasks;
  const next = tasks.map(t =>
    t.id === id ? {...t, done:!t.done} : t
  );
  const version = (versions.current[id] || 0) + 1;
  versions.current[id] = version;
  setTasks(next);

  try {
    const response = await fetch("/api/tasks/" + id, {
      method:"PATCH",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(next.find(t => t.id === id))
    });
    if (!response.ok) throw new Error("Update failed");
  } catch {
    if (versions.current[id] === version) {
      const old = previous.find(t => t.id === id);
      setTasks(current => current.map(t =>
        t.id === id && old ? old : t
      ));
    }
  }
}

// useRef must be imported from React.
// Replace /api/tasks with your actual backend endpoint.`
  },
  {
    level: "Hard", type: "React", no: 9,
    title: "OTP Timer and Verification",
    question: "Implement a 60-second practice OTP, resend and attempt limit.",
    expected: "Expiry, verification and cleanup",
    code: `const [otp, setOtp] = useState("");
const [entered, setEntered] = useState("");
const [seconds, setSeconds] = useState(60);
const [attempts, setAttempts] = useState(0);
const [message, setMessage] = useState("");
const [generation, setGeneration] = useState(0);
const codeRef = useRef("");

useEffect(() => {
  codeRef.current = String(Math.floor(100000 + Math.random()*900000));
  setOtp(codeRef.current);
  setEntered(""); setAttempts(0); setSeconds(60); setMessage("");

  const timer = setInterval(() => {
    setSeconds(p => {
      if (p <= 1) {
        clearInterval(timer);
        codeRef.current = "";
        setOtp("");
        return 0;
      }
      return p - 1;
    });
  }, 1000);

  return () => {
    clearInterval(timer);
    codeRef.current = "";
  };
}, [generation]);

function verifyOTP() {
  if (seconds <= 0 || !codeRef.current) setMessage("OTP expired");
  else if (attempts >= 3) setMessage("Attempt limit reached");
  else if (entered === codeRef.current) {
    setMessage("Verified");
    codeRef.current = "";
    setOtp("");
  } else {
    const n = attempts + 1;
    setAttempts(n);
    setMessage(n >= 3 ? "Attempt limit reached" : "Invalid OTP");
  }
}
function resendOTP() { setGeneration(p => p + 1); }

// Practice only: a real OTP must be generated and verified server-side.
// Import useRef from React.`
  },
  {
    level: "Hard", type: "React", no: 10,
    title: "Race Condition in useEffect",
    question: "Prevent older API requests from overwriting newer search results.",
    expected: "Only the current query's results",
    code: `const [query, setQuery] = useState("");
const [users, setUsers] = useState([]);
const [error, setError] = useState("");

useEffect(() => {
  const controller = new AbortController();

  async function fetchUsers() {
    try {
      const r = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {signal: controller.signal}
      );
      if (!r.ok) throw new Error("Fetch failed");
      const data = await r.json();
      const result = data.filter(u =>
        u.name.toLowerCase().includes(query.toLowerCase())
      );
      if (!controller.signal.aborted) {
        setUsers(result);
        setError("");
      }
    } catch (e) {
      if (e.name !== "AbortError") setError("Unable to load users");
    }
  }

  fetchUsers();
  return () => controller.abort();
}, [query]);

// Render input controlled by query and list users by id.`
  }
];

const css = `
* { box-sizing: border-box; }
body { margin: 0; background: #f3f5f9; font-family: Arial, sans-serif; }
button, input, select { font: inherit; }
button { cursor: pointer; }
.page { max-width: 1150px; margin: auto; padding: 24px 16px 60px; color: #172033; }
.hero { background: #182747; color: white; padding: 30px; border-radius: 18px; }
.hero h1 { margin: 0 0 10px; font-size: 30px; }
.hero p { line-height: 1.6; color: #dce5f7; }
.stats { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 22px; }
.stat { background: #ffffff18; padding: 12px 16px; border-radius: 10px; }
.toolbar { display: flex; gap: 10px; flex-wrap: wrap; margin: 22px 0; }
.toolbar input, .toolbar select { padding: 11px; border: 1px solid #ccd4e0; border-radius: 9px; background: white; }
.toolbar input { flex: 1; min-width: 180px; }
.filters { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 18px; }
.filters button { border: 1px solid #cbd3df; border-radius: 22px; padding: 9px 15px; background: white; color: #26354e; }
.filters button.active { background: #263d69; color: white; border-color: #263d69; }
.section-title { margin: 30px 0 14px; font-size: 23px; }
.card { background: white; border: 1px solid #e1e6ee; border-radius: 14px; margin: 12px 0; overflow: hidden; box-shadow: 0 2px 7px #14223b08; }
.card-head { padding: 17px; display: flex; gap: 12px; align-items: flex-start; cursor: pointer; }
.number { background: #e9eef8; color: #243d6b; min-width: 34px; height: 34px; display: grid; place-items: center; border-radius: 9px; font-weight: bold; }
.card-title { flex: 1; }
.card-title h3 { margin: 2px 0 8px; font-size: 17px; }
.card-title p { margin: 0; color: #586579; line-height: 1.5; }
.badges { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 8px; }
.badge { font-size: 11px; border-radius: 20px; padding: 5px 9px; background: #edf1f7; color: #394a65; }
.arrow { font-size: 20px; color: #53627a; }
.solution { border-top: 1px solid #e7ebf1; padding: 18px; }
.expected { margin-bottom: 14px; color: #315c47; background: #edf8f0; padding: 10px 12px; border-radius: 8px; }
pre { margin: 0; padding: 16px; overflow: auto; background: #111827; color: #e5edf8; border-radius: 10px; font-size: 13px; line-height: 1.65; white-space: pre; }
.copy { margin: 12px 0 0; background: #263d69; border: 0; color: white; border-radius: 8px; padding: 9px 13px; }
.footer { text-align: center; color: #6b7688; margin-top: 36px; line-height: 1.8; }
@media(max-width:600px) { .hero { padding: 22px; } .hero h1 { font-size: 24px; } .page { padding: 12px; } }
`;

export default function App() {
  const [level, setLevel] = useState("All");
  const [type, setType] = useState("All");
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState({});
  const [expandedAll, setExpandedAll] = useState(false);

  const filtered = assignment.filter(q =>
    (level === "All" || q.level === level) &&
    (type === "All" || q.type === type) &&
    (q.title + " " + q.question + " " + q.code)
      .toLowerCase().includes(search.toLowerCase())
  );

  function toggle(id) {
    setOpen(prev => ({ ...prev, [id]: !prev[id] }));
  }

  async function copyCode(code) {
    try {
      await navigator.clipboard.writeText(code);
      alert("Code copied!");
    } catch {
      alert("Copy failed. Please select and copy the code manually.");
    }
  }

  return (
    <>
      <style>{css}</style>
      <main className="page">
        <header className="hero">
          <h1>JavaScript + React</h1>
          <h2>30 Interview Questions & Solutions</h2>
          <p>
            Practice assignment covering JavaScript fundamentals, React hooks,
            state management, API calls, algorithms and real-world logic.
          </p>
          <div className="stats">
            <div className="stat"><strong>30</strong><br />Questions</div>
            <div className="stat"><strong>10</strong><br />Easy</div>
            <div className="stat"><strong>10</strong><br />Medium</div>
            <div className="stat"><strong>10</strong><br />Hard</div>
          </div>
        </header>

        <section className="toolbar">
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search questions or concepts..."
          />
          <select value={level} onChange={e => setLevel(e.target.value)}>
            <option>All</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
          <select value={type} onChange={e => setType(e.target.value)}>
            <option>All</option>
            <option>JavaScript</option>
            <option>React</option>
          </select>
        </section>

        <div className="filters">
          {["All", "Easy", "Medium", "Hard"].map(item => (
            <button
              key={item}
              className={level === item ? "active" : ""}
              onClick={() => setLevel(item)}
            >
              {item === "All" ? "All Levels" : item}
            </button>
          ))}
          <button onClick={() => setExpandedAll(p => !p)}>
            {expandedAll ? "Collapse All" : "Expand All"}
          </button>
        </div>

        <p>Showing <strong>{filtered.length}</strong> of 30 questions</p>

        {["Easy", "Medium", "Hard"].map(section => {
          const items = filtered.filter(q => q.level === section);
          if (!items.length) return null;

          return (
            <section key={section}>
              <h2 className="section-title">{section} Level ({items.length})</h2>
              {items.map(q => {
                const id = q.level + "-" + q.type + "-" + q.no;
                const isOpen = expandedAll || !!open[id];

                return (
                  <article className="card" key={id}>
                    <div className="card-head" onClick={() => toggle(id)}>
                      <div className="number">{q.no}</div>
                      <div className="card-title">
                        <div className="badges">
                          <span className="badge">{q.type}</span>
                          <span className="badge">{q.level}</span>
                        </div>
                        <h3>{q.title}</h3>
                        <p>{q.question}</p>
                      </div>
                      <span className="arrow">{isOpen ? "−" : "+"}</span>
                    </div>

                    {isOpen && (
                      <div className="solution">
                        <div className="expected">
                          <strong>Expected result:</strong> {q.expected}
                        </div>
                        <pre><code>{q.code}</code></pre>
                        <button className="copy" onClick={() => copyCode(q.code)}>
                          Copy Solution
                        </button>
                      </div>
                    )}
                  </article>
                );
              })}
            </section>
          );
        })}

        {filtered.length === 0 && <p>No matching questions found.</p>}

        <footer className="footer">
          <h3>JavaScript + React Practice Assignment</h3>
          <p>30 questions • 3 difficulty levels • Code solutions</p>
          <p>Built with React, useState and reusable data-driven rendering.</p>
        </footer>
      </main>
    </>
  );
}
