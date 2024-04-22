
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login';
import {Header} from "./Components/Header";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route exact path="/" element={<Login/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
