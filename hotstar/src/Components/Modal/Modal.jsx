import React, { useContext, useEffect } from "react";
import ReactDom from "react-dom";
import { Overlay, ModalContainer, Heading } from "./Modal.Style";
import { FavouriteContext } from "../../context/FavouriteContext";
import ModalSlider from "../ModalSlider/ModalSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ open, onClose }) => {
  const { selectedMovies } = useContext(FavouriteContext);

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <Overlay />
      <ModalContainer>
        <Heading>
          <h2>Favourites</h2>
          <button onClick={onClose}>
            <FontAwesomeIcon
              icon={faXmark}
              size="2xl"
              style={{ color: "#f4f5f6" }}
            />
          </button>
        </Heading>
        <ModalSlider movies={selectedMovies} />
      </ModalContainer>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
