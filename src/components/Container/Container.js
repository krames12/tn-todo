import React, { Component } from "react";
import "./container.scss";

import { faPlus, faSleigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Modal from "../Modal/Modal";
import TodoList from "../TodoList/TodoList";

class Container extends Component {
  constructor() {
    super();

    this.state = {
      isModalOpen: false
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <div className="todo-container">
        <Modal
          isOpen={this.state.isModalOpen}
          closeHandler={() => this.closeModal()}
        />
        <button className="add-todo-button" onClick={() => this.openModal()}>
          <FontAwesomeIcon icon={faPlus} />
          Add new to do
        </button>
        <TodoList openHandler={() => this.openModal} />
      </div>
    );
  }
}

export default Container;
