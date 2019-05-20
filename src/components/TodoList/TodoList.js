import React, { Component } from "react";
import "./todo-list.scss";

import { TodoConsumer } from "../TodoContext/TodoContext";

import {
  faCheckSquare,
  faSquare,
  faTrashAlt
} from "@fortawesome/free-regular-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                  className="todo-completed-input"
                  defaultChecked={todo.completed ? "checked" : ""}
                  onClick={() => actions.completeTodo(todo)}
                />
                <label htmlFor="completed">
                  {todo.completed ? (
                    <FontAwesomeIcon icon={faCheckSquare} />
                  ) : (
                    <FontAwesomeIcon icon={faSquare} />
                  )}
                </label>
                <p className="todo-title">{todo.title}</p>
                <button
                  className="delete-icon"
                  onClick={() => actions.deleteTodo(todo)}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </TodoConsumer>
    );
  }
}

export default TodoList;
