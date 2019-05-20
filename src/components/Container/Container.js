import React from "react";
import "./container.scss";

import TodoList from "../TodoList/TodoList";

function Container() {
  return (
    <div className="todo-container">
      <TodoList />
    </div>
  );
}

export default Container;
