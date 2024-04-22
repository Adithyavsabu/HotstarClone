
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import {Header} from "./Components/Header";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route exact path="/" element={<Login/>} />
    <Route exact path="/home" element={<Home/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
