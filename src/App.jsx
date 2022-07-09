import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./pages";

function App() {
  return (
    <div className="App">
      Welcome to Socioverse
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
