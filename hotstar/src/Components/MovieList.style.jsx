import {styled} from "styled-components"

export const PreviewContent=styled.div`
position :absolute;
align-items :flex-end;
bottom :0px;
box-sizing: border-box;
display :flex;
height :664px;
justify-content :space-between;
padding-bottom :182px;
padding-left :128px;
padding-right :64px;
padding-top: 16px;
width :1295px; 
z-index: 1;
`;

export const MovieDetails=styled.div`
box-sizing :border-box;
display: block;
height :259.984px;
width :380px;
margin-bottom: 30px;
margin-left: 100px;

img{
box-sizing: border-box;
display :block;
height :96px;
max-height: 120px;
max-width :100%;
overflow-x :clip;
overflow-y :clip;
width :190px;
}
p{
  display: -webkit-box;
  height: 60px;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 380px;
  line-height: 24px;
}
  
`;
export const Subscribe=styled.div`
box-sizing: border-box;
display :flex;
flex-wrap :wrap;
height: 92px;
justify-content: space-between;
padding-top :40px;
width :416px;
opacity: 0.3;

`;

export const SubscribeText =styled.button`
align-items :center;
box-sizing :border-box;
display :flex;
flex-grow :1;
height :52px;
//min-width :min-content;
width :338px;

cursor: pointer;
transition-duration :0.3s;
transition-timing-function :cubic-bezier(0.4, 0, 0.2, 1);
span{
  box-sizing :border-box;
display :block;
font-weight: 600;
font-size: 16px;
line-height: 28px;
height :424px;
width :416px;
}

`;

export const Watchlist =styled.button`
margin-left:16px;
position :relative;
align-items :center;
box-sizing: border-box;
display: flex;
flex-direction :row;
height: 52px;
justify-content :center;

overflow-x :hidden;
overflow-y :hidden;
padding-bottom :14px;
padding-left: 14px;
padding-right :14px;
padding-top :14px;
width: 52px;

`;

export const PreviewSlider=styled.div`
  
`;


export const Moviecontainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    width: 100%;
    padding: 0 0 26px;
    position: absolute;
    z-index: 1;
    top: 10vh;   
    @media (max-width: 768px) {
        top: 100vh;
    }
    box-shadow: 0 10px 10px #000;
   

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

