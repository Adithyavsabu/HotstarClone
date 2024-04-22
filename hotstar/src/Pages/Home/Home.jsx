import { Container } from "../Login/Login.style";
import { NavBar, Logo, NavMenu} from "./Home.style";

const Home = ()=>{
    return(
<Container>
    <NavBar>
    <Logo>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>
      <subscribe>
        <a></a>
      </subscribe>
        <NavMenu>
        <a href="/mypage">
              <img src="/images/home-icon.svg" alt="HOME" />
              <span>My Space</span>
            </a>
            <a href="/explore">
              <img src="/images/home-icon.svg" alt="HOME" />
              <span>Search</span>
            </a>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="HOME" />
              <span>HOME</span>
            </a>
            <a href="/shows">
              <img src="/images/home-icon.svg" alt="HOME" />
              <span>TV</span>
            </a>
            <a href="/movies">
              <img src="/images/home-icon.svg" alt="HOME" />
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
</Container>
    );
}

export default Home;