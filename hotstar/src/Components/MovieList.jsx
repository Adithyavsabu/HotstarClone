import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Moviecontainer , Content,PreviewBackground, Recommend, PreviewContent} from "./MovieList.style";
import { TrailerPreview } from "./TrailerPreview";
import {SubscribeText,MovieDetails,Watchlist,Subscribe } from "./MovieList.style";


export const MovieList = () =>{
        

    return(
      <div>
      <PreviewContent>
   
       <MovieDetails>
  <img src="https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/3196/1711957213196-t" alt ="shaddai"/>
     <span></span>
     <p>Three teenagers reaches Bangalore for their engineering degree and gets involved in a fight with seniors. 
      </p>
<Subscribe>
<SubscribeText><span>Subscribe To Watch</span></SubscribeText>
<Watchlist><span>+</span></Watchlist>
</Subscribe>

      </MovieDetails>
     
</PreviewContent>
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
       
     </Moviecontainer>
     </div>
    );
}