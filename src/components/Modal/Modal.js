import React from "react";
import "./modal.scss";

import AddTodoForm from "../AddTodoForm/AddTodoForm";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Modal({ isOpen, closeHandler }) {
  return (
    <div className={`screen-cover ${isOpen ? "open" : ""}`}>
      <div id="modal">
        <div className="modal-header">
          <h3>Add new to do</h3>
          <button className="close-modal-icon" onClick={() => closeHandler()}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <AddTodoForm closeModal={closeHandler} />
      </div>
    </div>
  );
}

export default Modal;
