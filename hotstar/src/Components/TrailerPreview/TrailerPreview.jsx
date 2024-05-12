import {
  Video,
  Preview,
  PreviewContent,
  MovieDetails,
  PreviewSlider,
  Subscribe,
} from "./TrailerPreview.Style";

export const TrailerPreview = (props) => {
  return (
    <>
      <Preview>
        <Video src="/videos/movie-trailer-1.mp4" autoPlay loop muted />
      </Preview>
    </>
  );
};
