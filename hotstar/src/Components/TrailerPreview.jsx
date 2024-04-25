import videoBg from "../assets/videos/videoBg.mp4";
import {Video,Preview, PreviewContent,MovieDetails,PreviewSlider } from "./TrailerPreview.Style";

export const TrailerPreview=()=>{
    return(
        <Preview>
            <Video src={videoBg} autoPlay loop muted >
                <PreviewContent>
                    <MovieDetails>
                     <h1>Movie details</h1>
                    </MovieDetails>
                    <PreviewSlider>

                    </PreviewSlider>
                    
                    </PreviewContent>
        </Video >
        </Preview>
    );

}