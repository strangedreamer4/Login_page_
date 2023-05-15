// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBCBUGoKQecD5R-uWc9CLs3TNa5ll9jA4M",

  authDomain: "vip-95a43.firebaseapp.com",

  databaseURL: "https://vip-95a43-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "vip-95a43",

  storageBucket: "vip-95a43.appspot.com",

  messagingSenderId: "787111306016",

  appId: "1:787111306016:web:c54ab830474afb9a06ad45",

  measurementId: "G-PZJVC849Y4"

};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Import necessary dependencies
const { BrowserRouter as Router, Switch, Route, Redirect } = ReactRouterDOM;

// React component for the login page
function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loggedIn, setLoggedIn] = React.useState(false);

  const handleLogin = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Logged in successfully
        const user = userCredential.user;
        console.log("Logged in as:", user.email);
        setLoggedIn(true);
      })
      .catch((error) => {
        // Handle login errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Login error:", errorCode, errorMessage);
      });
  };

  if (loggedIn) {
    // Redirect to another page after successful login
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

// React component for the dashboard page
function DashboardPage() {
  return <h1>Welcome to the Dashboard!</h1>;
}

// Main App component
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
      </Switch>
    </Router>
  );
}

// Render the App component
ReactDOM.render(<App />, document.getElementById("root"));

