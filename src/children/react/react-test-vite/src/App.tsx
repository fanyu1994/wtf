import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/login/Login";
import { useAppSelector, useAppDispatch } from "./store/hooks";

function MainApp() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}
function LoginApp() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}
function App() {
  const token = useAppSelector((state) => state.tokenReducer.token);
  console.log(token, "token");
  return token ? <MainApp /> : <LoginApp />;
}

export default App;
