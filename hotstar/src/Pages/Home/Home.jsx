
import { Container } from "./Home.style";
import { TrailerPreview } from "../../Components/TrailerPreview";
import { MovieList } from "../../Components/MovieList";


const Home = ()=>{
    return(
<Container>
<TrailerPreview/>
<MovieList/>
</Container>
    );
}

export default Home;