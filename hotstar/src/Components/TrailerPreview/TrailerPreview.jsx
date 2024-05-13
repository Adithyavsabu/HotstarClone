import React, { useContext, useEffect } from "react";

import {
  Video,
  Preview,
  PreviewContent,
  MovieDetails,
  PreviewSlider,
  Subscribe,
} from "./TrailerPreview.Style";
import { PreviewContext } from "../../context/PreviewContext";

export const TrailerPreview = (props) => {
  const { PreviewMovie, setPreviewMovie } = useContext(PreviewContext);

  useEffect(() => {
    console.log("preview in trailerpreview component", PreviewMovie);
  }, []);
  return (
    <>
      <Preview>
        <Video src={PreviewMovie.video} autoPlay loop muted />
      </Preview>
    </>
  );
};
