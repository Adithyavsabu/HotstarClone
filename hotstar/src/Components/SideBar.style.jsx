
import {styled} from "styled-components"

export const NavBar = styled.nav`

  top: 0;
  bottom: 0;
  left: 0;
  height: 747.2px;
  display: flex;
  flex-direction: column;
position: fixed;
  align-items: center;
width: 96px;
 min-width: 96px;
  z-index: 20;
  max-width: 258px; 
  line-height: 24px;
  box-sizing: border-box;
  
`;

export const Logo = styled.a`

  width: 51px;
  max-height: 70px;
  display: flex;
  padding-top: 32px;
  padding-bottom:32px;


  img {
    display: block;
    width: 100%;
    line-height: 24px;
    height: 37.337px;
    box-sizing: border-box;
   
  }

  span{
    padding-top: 4px;
    padding-bottom: 4px;
    padding-right:2px;
    padding-left: 8px;
    align-items: center;
    display: flex;
    flex-direction: row;
    width:83px;
    height: 24px;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  padding-top: 40px;
  width: 96px;
  height: 500px;
  box-sizing: border-box;
  line-height: 24px;
  tab-size: 4;

 

a{
    display: inline;
    width: auto;
    height: 60px;
    cursor: pointer;
  tab-size: 4;
  text-size-adjust: 100%;
   color:rgb(0, 0, 0);

   outline-offset: 2px;
   outline-width: 1.6px;
    outline-style: solid;
  outline-color:rgba(0, 0, 0, 0);
border-image-repeat: stretch;
border-image-width: 1;

margin-left: 30px;
margin-right: 30px;
margin-inline-end: 30px;
margin-inline-start: 30px;
transform :matrix(1, 0, 0, 1, 0, 0);
transform-origin: 0px 30px;
transition-duration: 0.2s;
transition-property: transform;
transition-timing-function :cubic-bezier(0.4, 0, 0.2, 1);

    img{
        height: 25px;    
    }

    span{
        display:none;
        padding: 12px 0px 12px 0px;
        margin-left: 8px;
        box-sizing: border-box;
        color: rgba(255, 255, 255, 0.6);
        font-size: 16px;
        font-stretch: 100%;
        font-weight: 600;
        height: auto;
        letter-spacing: normal;
       
  
        text-align: center;
        text-indent: 0;
        width: auto;
    
     
       
      }
        
    }

    &:hover{
        span{
       
         display:inline-flex;
      
         color: #f9f9f9;
        
        }

    }
    
`;