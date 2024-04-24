
import {styled} from "styled-components"

export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100%;
 
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20 0px;
  width: 9vw;
  z-index: 3;
  max-width: 300px;
  opacity: 0.5;
 
`;

export const Logo = styled.a`
  padding: 0;
  width: 50px;
  margin-top: 20px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 20px;
  width: 120px;
  height: 100%;

 

a{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 40px;
    cursor: pointer;
    flex-direction: row;
    padding: 0 0 0 20px;
    margin-bottom: 30px;

    img{
        height: 25px;    
    }

    span{
        display:none;
      }
        
    }

    &:hover{
        span{
       
         display:inline-flex;
      
         color: #f9f9f9;
        
        }

    }
    
`;