import { NavBar, Logo, NavMenu, Nav } from "./SideBar.style";
import { react } from "react";
import { useState } from "react";

export const SideBar = () => {
  const [isHovered, setIsHovered] = useState({
    myPage: false,
    explore: false,
    home: false,
    tv: false,
    movies: false,
    sports: false,
    categories: false,
  });
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
            <a
              href="/mypage"
              onMouseEnter={() => setIsHovered({ ...isHovered, myPage: true })}
              onMouseLeave={() => setIsHovered({ ...isHovered, myPage: false })}
              style={{ color: isHovered.myPage ? "#fff" : "#000" }}
            >
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
          </span>
        </NavMenu>
      </Nav>
    </NavBar>
  );
};
