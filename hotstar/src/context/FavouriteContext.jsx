import React from "react";
import { createContext, useState } from "react";

const FavouriteContext = createContext();
const FavouriteProvider = ({ children }) => {
  const [selectedMovies, setSelectedMovies] = useState([]);

  return (
    <FavouriteContext.Provider value={{ selectedMovies, setSelectedMovies }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export { FavouriteProvider, FavouriteContext };
