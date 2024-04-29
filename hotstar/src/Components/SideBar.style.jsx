import { styled } from "styled-components";

export const NavBar = styled.nav`
  top: 0;
  bottom: 0;
  left: 0;
  height:100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  align-items: center;
  width: 96px;
  min-width: 96px;
  z-index: 20;
  max-width: 500px;
  line-height: 24px;
  box-sizing: border-box;

  &:hover {
    background-image: linear-gradient(
      90.43deg,
      rgba(15, 16, 10, 0.95) 50.24%,
      rgba(15, 16, 10, 0) 98.46%
    );
  }
`;

export const Logo = styled.a`
  width: 83.765px;
  max-height: 73.3821px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  column-gap: 12px;
  line-height: 24px;
  box-sizing: border-box;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  z-index: 2;

  img {
    display: block;
    width: 51px;
    line-height: 24px;
    height: 37.3281px;
    box-sizing: border-box;
  }

  span {
    padding-top: 4px;
    padding-bottom: 4px;
    padding-right: 2px;
    padding-left: 8px;
    align-items: center;
    display: flex;
    flex-direction: row;
    width: 83px;
    height: 24px;
    background-clip: border-box;
    background-color: rgba(255, 204, 117, 0.1);
    border-bottom-color: rgb(229, 231, 235);
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
    border-top-right-radius: 18px;
    border-top-left-radius: 18px;

    span {
      background-image: linear-gradient(
        270deg,
        rgb(255, 204, 117) 44.93%,
        rgb(255, 228, 144)
      );
      color: rgb(255, 204, 117);
      font-size: 12px;
      font-weight: 500;
      height: 16px;
      line-height: 16px;
      display: block;
      background-clip: text;
      background-color: rgba(0, 0, 0, 0);
      text-align: justify;
    }

    img {
      color: rgb(255, 204, 117);
      height: 10px;
    }
  }
`;

export const Nav = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 258px;
  height: calc(100vh-20vh);
  box-sizing: border-box;
  z-index: 1;

 
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  padding-top: 40px;
  width: 96px;
  height: 500px;
  box-sizing: border-box;

  a {
    display: flex;
    width: auto;
    height: 60px;
    cursor: pointer;
    color: rgb(0, 0, 0);
    font-weight: 500;
    font-size: 14px;
    outline-offset: 2px;
    outline-width: 1.6px;
    outline-style: solid;
    box-sizing: border-box;
    outline-color: rgba(0, 0, 0, 0);
    border-image-repeat: stretch;
    border-image-width: 1;
    align-items: center;
    text-align: center;
    margin-left: 30px;
    margin-right: 30px;
    margin-inline-end: 30px;
    margin-inline-start: 30px;

    img {
      height: 25px;
    }

    span {
      display: none;
      width: auto;
      height: auto;
      font-size: 18px;
      font-weight: 500;
      line-height: 28px;
      text-align: center;
      margin-left: 8px;
      color: color rgba(255, 255, 255, 0.6);
      margin-left: 8px;
      padding-top: 12px;
      padding-bottom: 12px;
   
    }
  }

  &:hover {
    span {
      display: block;
      color: #f9f9f9;
      margin-left: 12px;
      padding-top: 12px;
      padding-bottom: 12px;
      box-sizing: border-box;
      font-size: 18px;

      font-weight: 600;
      height: 52px;
      text-align: center;
      width: 150.8594px;
      animation-delay: 0s;
      animation-direction: normal;
      animation-duration: 0.3s;

      a {
        transform: matrix(1, 0, 0, 1, 0, 0);
        transform-origin: 0px 30px;
        transition-duration: 0.2s;
        transition-property: transform;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }
    }
  }
`;
