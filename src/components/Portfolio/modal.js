import React from 'react';

function Modal(props) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={props.handleCloseModal}>
          &times;
        </span>
        <p>This is the modal content!</p>
      </div>
    </div>
  );
}

export default Modal;