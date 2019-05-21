import React from "react";
import "./container.scss";

import TodoList from "../TodoList/TodoList";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Container() {
  return (
    <div className="todo-container">
      <button className="add-todo-button">
        <FontAwesomeIcon icon={faPlus} />
        Add new to do
      </button>
      <TodoList />
    </div>
  );
}

export default Container;
