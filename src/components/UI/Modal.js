import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import Card from "./Card";

//need a backdrop and modal overlay

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return <Card className={classes.modal}>{props.children}</Card>;
};

const Modal = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
      <ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>,
      document.getElementById('overlay-root')
      )}
    </div>
  );
};

export default Modal;
