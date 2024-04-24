import {styled} from "styled-components"

export const Moviecontainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
   
    width: 100%;
    padding: 0 0 26px;
    position: absolute;
    z-index: 1;
    top: 60vh;   
   

@media (max-width: 768px) {
    top: 100vh;
} 
       
`;


export const Recommend = styled.div`
margin-left: 100px;
`;

export const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 0px;
  grid-template-columns: repeat(6, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const PreviewBackground = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: -2;
  background: rgb(2,0,36);
background: linear-gradient(360deg, rgba(2,0,36,1) 16%, rgba(136,136,136,0.01) 100%);

 background-attachment:fixed ;
  background-size: 100% 200%;
`;



export const Movie = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`;

export const MovieImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`;

export const MovieInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`;

export const MovieTitle = styled.h3`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
`;

export const MovieYear = styled.p`
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 5px;
`;

export const MovieType = styled.p`
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 5px;
`;