import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import { SideBar } from "./Components/SideBar/SideBar";
import { createContext, useState } from "react";
import FavouriteContext from "./context/FavouriteContext";


function App() {


const [favouriteCount, setFavouriteCount] = useState(0);
  return (
    <FavouriteContext.Provider value={{favouriteCount ,setFavouriteCount}}>
    <BrowserRouter>
      <SideBar favouriteCount={favouriteCount}/>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/details/:genre/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
    </FavouriteContext.Provider>
  );
}

export default App;
