import React, { useState, useContext } from "react";
import { NavBar, Logo, NavMenu, Nav, Badge } from "./SideBar.style";
import Modal from "../Modal/Modal";
import { FavouriteContext } from "../../context/FavouriteContext";

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { selectedMovies } = useContext(FavouriteContext);
  return (
    <NavBar>
      <Logo>
        <img src="/images/logo-d-plus.svg" alt="Disney+" />
        <span>
          <span>Subscribe</span>
          <img src="/images/forward-icon.svg" alt="forward" />
        </span>
      </Logo>
      <Nav>
        <NavMenu>
          <span>
            <a href="/mypage">
              <img src="/images/user-icon.svg" alt="HOME" />
              <span>MySpace</span>
            </a>
            <a href="/explore">
              <img src="/images/search-icon.svg" alt="HOME" />
              <span>Search</span>
            </a>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="HOME" />
              <span>HOME</span>
            </a>
            <a href="/shows">
              <img src="/images/tv-icon.svg" alt="HOME" />
              <span>TV</span>
            </a>
            <a href="/movies">
              <img src="/images/movie-icon.svg" alt="HOME" />
              <span>Movies</span>
            </a>
            <a href="/sports">
              <img src="/images/ball-icon.svg" alt="HOME" />
              <span>Sports</span>
            </a>
            <a href="/categories">
              <img src="/images/cat-icon.svg" alt="HOME" />
              <span>Categories</span>
            </a>

            <a onClick={() => setIsOpen(true)}>
              <img src="/images/star.svg" alt="Favourite" />
              {selectedMovies.length > 0 && (
                <Badge>{selectedMovies.length}</Badge>
              )}
              <span>Favourites</span>
            </a>

            <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
          </span>
        </NavMenu>
      </Nav>
    </NavBar>
  );
};
