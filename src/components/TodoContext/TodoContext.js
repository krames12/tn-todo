import React, { Component } from "react";
const uuidv4 = require("uuid/v4");

// Todo structure

// todos: [
//   {
//     id: uuid,
//     title: "test todo",
//     dueDate: "2019-05-20",
//     description: "optional"
//     completed: false
//   }
// ]

const CONTEXT_ID = "todos";
const { Consumer, Provider } = React.createContext(CONTEXT_ID);

class TodoProvider extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "test todo",
        dueDate: "2019-05-20",
        description: "optional",
        completed: false
      },
      {
        id: 2,
        title: "todo app",
        dueDate: "2019-05-20",
        description: "optional",
        completed: true
      },
      {
        id: 3,
        title: "get milk",
        dueDate: "2019-05-20",
        description: "optional",
        completed: false
      }
    ]
  };

  addTodo = todo => {
    const todos = [
      ...this.state.todos,
      {
        ...todo,
        id: uuidv4(),
        completed: false
      }
    ];

    this.setState({ todos: todos });
  };

  completeTodo = todo => {
    console.log("inside of context completetodo");
    let revisedTodos = this.state.todos.map(todoItem => {
      if (todoItem.id === todo.id) {
        todoItem.completed = !todoItem.completed;
      }

      return todoItem;
    });

    this.setState({ todos: revisedTodos });
  };

  deleteTodo = todo => {
    let revisedTodos = this.state.todos.filter(todoItem => {
      return todoItem.id !== todo.id ? todoItem : false;
    });

    this.setState({ todos: revisedTodos });
  };

  render() {
    return (
      <Provider
        value={{
          todos: this.state.todos,
          actions: {
            addTodo: this.addTodo,
            completeTodo: this.completeTodo,
            deleteTodo: this.deleteTodo
          }
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export const TodoConsumer = Consumer;
export default TodoProvider;
