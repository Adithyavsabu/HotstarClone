import {SideBar} from "../../Components/SideBar";
import { Container } from "../Login/Login.style";
import videoBg from "../../assets/videos/videoBg.mp4";
import { Video } from "./Home.style";


const Home = ()=>{
    return(
<Container>
<SideBar />
<Video src={videoBg} autoPlay loop muted />
</Container>
    );
}

export default Home;