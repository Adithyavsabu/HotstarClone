import { NavBar, Logo, NavMenu} from "./SideBar.style";

export const SideBar=(  )=>{
    return (
        <NavBar>
        <Logo>
            <img src="/images/logo-d-plus.svg" alt="Disney+" />
            <span>
            <span>Subscribe</span>
            <img src="/images/forward.svg" alt="forward"/>
          </span>
          </Logo>
          
            <NavMenu>
            <a href="/mypage">
                  <img src="/images/user-icon.svg" alt="HOME" />
                  <span>My Space</span>
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
                  <img src="/images/series-icon.svg" alt="HOME" />
                  <span>TV</span>
                </a>
                <a href="/movies">
                  <img src="/images/movie-icon.svg" alt="HOME" />
                  <span>Movies</span>
                </a>
                <a href="/sports">
                  <img src="/images/home-icon.svg" alt="HOME" />
                  <span>Sports</span>
                </a>
                <a href="/categories">
                  <img src="/images/home-icon.svg" alt="HOME" />
                  <span>Categories</span>
                </a>
            </NavMenu>
            </NavBar>
    );
}

