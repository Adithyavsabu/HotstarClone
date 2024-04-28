import videoBg from "../assets/videos/videoBg.mp4";
import {
  Video,
  Preview,
  PreviewContent,
  MovieDetails,
  PreviewSlider,
  Subscribe,
} from "./TrailerPreview.Style";

export const TrailerPreview = () => {
  return (
    <Preview>
      <Video src={videoBg} autoPlay loop muted />
    </Preview>
  );
};
