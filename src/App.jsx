import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ThemeButton } from "./components/ThemeButton/ThemeButton";
import { Login, Signup } from "./pages";

function App() {
  return (
    <div className="App">
      Welcome to Socioverse
      <ThemeButton />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
