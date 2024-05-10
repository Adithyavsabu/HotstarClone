import React from "react";
import ReactDom from "react-dom";
import { Overlay ,ModalContainer} from "./Modal.Style";
const Modal = ({ open, children, onClose }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <Overlay />
      <ModalContainer>
        <button onClick={onClose}>Close Modal</button>
        {children}
      </ModalContainer>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
