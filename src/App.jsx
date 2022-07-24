import { Container } from "@chakra-ui/react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { SideNav, ThemeButton } from "./components";
import { Login, Signup } from "./pages";

function App() {
  const { pathname } = useLocation();
  return (
    <Container
      className="App"
      as="main"
      maxW="container.xl"
      display="flex"
      mx="auto"
      justifyContent={
        pathname.slice(1) === "login" || pathname.slice(1) === "signup"
          ? "center"
          : "unset"
      }
    >
      <ThemeButton />
      {pathname.slice(1) === "login" ||
      pathname.slice(1) === "signup" ? null : (
        <SideNav />
      )}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Container>
  );
}

export default App;
