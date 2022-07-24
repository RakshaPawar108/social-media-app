import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SideNav, ThemeButton } from "./components";
import { Login, Signup } from "./pages";

function App() {
  return (
    <div className="App">
      <ThemeButton />
      <SideNav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
