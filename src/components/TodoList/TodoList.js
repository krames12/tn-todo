import React, { Component } from "react";
import "./todo-list.scss";

import { TodoConsumer } from "../TodoContext/TodoContext";

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TodoConsumer>
        {({ todos, actions }) => (
          <ul className="todo-list">
            {todos.map(todo => (
              <li className="todo-item" key={todo.id}>
                <input
                  type="checkbox"
                  name="completed"
                  defaultChecked={todo.completed ? "checked" : ""}
                  onClick={() => actions.completeTodo(todo)}
                />
                <p className="todo-title">{todo.title}</p>
                <span
                  className="delete-icon"
                  onClick={() => actions.deleteTodo(todo)}
                >
                  X
                </span>
              </li>
            ))}
          </ul>
        )}
      </TodoConsumer>
    );
  }
}

export default TodoList;
