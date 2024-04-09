import React from "react";

const modalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#fff",
  padding: "50px",
  zIndex: "1000",
  border: "1px solid #000",
  borderRadius: "10px",
};

const closeButtonStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  border: "none",
  background: "transparent",
  fontSize: "15px",
  cursor: "pointer",
};

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal" style={modalStyle}>
      {children}
      <button style={closeButtonStyle} onClick={onClose}>
        X
      </button>
    </div>
  );
};

export default Modal;
