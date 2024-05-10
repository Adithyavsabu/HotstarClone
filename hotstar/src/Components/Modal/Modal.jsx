import React, { useContext } from "react";
import ReactDom from "react-dom";
import { Overlay, ModalContainer } from "./Modal.Style";
import FavouriteContext from "../../context/FavouriteContext";
import ImgSlider from "../MovieCarousel/Slider";

const Modal = ({ open, children, onClose }) => {
  const { selectedMovies } = useContext(FavouriteContext);
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <Overlay />
      <ModalContainer>
        <button onClick={onClose}>Close Modal</button>
        <ImgSlider movies={selectedMovies} heading="Favourites" />
      </ModalContainer>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
