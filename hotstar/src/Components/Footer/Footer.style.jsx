import { styled } from "styled-components";

export const FooterContainer = styled.div`
  background-color: #000000;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
 
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 125px;
  width: 1104px;
 align-items: flex-start;

  h4 {
    color: #e1e6f0;
    font-size: 16px;
    font-weight: 900;
    line-height: 24px;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  row-gap: 25px;
  align-items: flex-start;

  span {
    color: #8f98b2;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    display: inline-flex;
    box-sizing: border-box;
  }
`;
export const Company = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Website = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Help = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Connect = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CopyRights = styled.div`
  
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  line-height: 24px;
  height:84px;
  justify-content: space-between;
  padding-top: 50px;
width: 1104px;
`;
export const Rights = styled.div`
  
  display: flex;
  flex-direction: column;
  //flex-basis: 70%;
  
span{
    font-size: 15px;
    line-height: 10px;
}


`;
export const App = styled.div`
  
  display: flex;
  flex-direction: row;

  img{
    height: 40px;
    width: 120px;
  }
`;

