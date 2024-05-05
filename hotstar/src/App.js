import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import { SideBar } from "./Components/SideBar/SideBar";

function App() {
  return (
    <BrowserRouter>
      <SideBar />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/details/:genre/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
