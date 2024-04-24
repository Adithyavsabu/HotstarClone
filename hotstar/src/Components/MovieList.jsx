import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Moviecontainer , Content,PreviewBackground, Recommend} from "./MovieList.style";
import { TrailerPreview } from "./TrailerPreview";



export const MovieList = () =>{
        const [scrollPosition, setScrollPosition] = useState(0);
      
        useEffect(() => {
          const handleScroll = () => {
            setScrollPosition(window.scrollY);
          };
      
          window.addEventListener("scroll", handleScroll);
      
          return () => {
            window.removeEventListener("scroll", handleScroll);
          };
        }, []);

    return(
     <Moviecontainer>
        <Recommend>
         <h4>Latest Releases</h4>
        <Content>
              <Link>
                <img src="/images/Movie.jpeg" alt="moviecard"/>
              </Link>  
              <Link>
                <img src="/images/Movie.jpeg" alt="moviecard"/>
              </Link> 
              <Link>
                <img src="/images/Movie.jpeg" alt="moviecard"/>
              </Link> 
              <Link>
                <img src="/images/Movie.jpeg" alt="moviecard"/>
              </Link> 
              <Link>
                <img src="/images/Movie.jpeg" alt="moviecard"/>
              </Link> <Link>
                <img src="/images/Movie.jpeg" alt="moviecard"/>
              </Link> 
        </Content>
        </Recommend>

        <Recommend>
         <h1>Movie List</h1>
        <Content>
              <Link>
                <img src="/images/Movie.jpeg" alt="moviecard"/>
              </Link>  
              <Link>
                <img src="/images/Movie.jpeg" alt="moviecard"/>
              </Link> 
              <Link>
                <img src="/images/Movie.jpeg" alt="moviecard"/>
              </Link> 
              <Link>
                <img src="/images/Movie.jpeg" alt="moviecard"/>
              </Link> 
              <Link>
                <img src="/images/Movie.jpeg" alt="moviecard"/>
              </Link> 
              <Link>
                <img src="/images/Movie.jpeg" alt="moviecard"/>
              </Link> 
        </Content>
        </Recommend>

        <Recommend>
         <h1>Movie List</h1>
        <Content>
              <Link>
                <img src="/images/Movie.jpeg" alt="moviecard"/>
              </Link>  
              <Link>
                <img src="/images/Movie.jpeg" alt="moviecard"/>
              </Link> 
              <Link>
                <img src="/images/Movie.jpeg" alt="moviecard"/>
              </Link> 
              <Link>
                <img src="/images/Movie.jpeg" alt="moviecard"/>
              </Link> 
        </Content>
        </Recommend>
        {scrollPosition <= 30  && <TrailerPreview/>}
      {scrollPosition > 30 && <PreviewBackground />}

     </Moviecontainer>
    );
}