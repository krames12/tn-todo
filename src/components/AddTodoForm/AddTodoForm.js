import React, { Component } from "react";
import "./add-todo-form.scss";
import { TodoConsumer } from "../TodoContext/TodoContext";

class AddTodoForm extends Component {
  constructor() {
    super();

    const today = new Date();

    this.state = {
      title: "",
      date: String(today.getDate()).padStart(2, "0"),
      month: String(today.getMonth() + 1).padStart(2, "0"),
      year: today.getFullYear(),
      description: "",
      completed: false
    };

    this.initialState = {
      title: "",
      date: String(today.getDate()).padStart(2, "0"),
      month: String(today.getMonth() + 1).padStart(2, "0"),
      year: today.getFullYear(),
      description: "",
      completed: false
    };
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  addNewTodo = callback => {
    callback(this.state);

    this.setState(this.initialState);
    console.log("initial state?", this.state);

    this.props.closeModal();
  };

  addNewCompletedTodo = callback => {
    this.setState({ completed: true });
    console.log(this.state);
    callback(this.state);

    this.setState(this.initialState);
    this.props.closeModal();
  };

  render() {
    return (
      <div className="add-new-todo-form">
        <fieldset>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            placeholder="Title"
            defaultValue={this.state.title}
            onChange={this.handleChange}
          />
        </fieldset>
        <fieldset className="due-date-fields">
          <label htmlFor="">Due Date</label>
          <div className="date-container">
            <input
              id="date"
              type="number"
              name="date"
              min="1"
              max="31"
              placeholder="Date"
              defaultValue={this.state.date}
              onChange={this.handleChange}
            />
            <span>/</span>
            <input
              id="month"
              type="number"
              name="month"
              min="1"
              max="12"
              placeholder="Month"
              defaultValue={this.state.month}
              onChange={this.handleChange}
            />
            <span>/</span>
            <input
              id="year"
              type="number"
              name="year"
              min="1900"
              max="2050"
              placeholder="Year"
              defaultValue={this.state.year}
              onChange={this.handleChange}
            />
          </div>
        </fieldset>
        <fieldset>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            className="description-label"
            name="description"
            cols="30"
            rows="10"
            placeholder="Description"
            defaultValue={this.state.description}
            onChange={this.handleChange}
          />
        </fieldset>
        <input
          type="hidden"
          name="completed"
          defaultChecked={this.state.completed}
        />
        <TodoConsumer>
          {({ actions }) => (
            <div className="button-container">
              <button
                type="submit"
                onSubmit={event => event.preventDefault()}
                onClick={() => this.addNewTodo(actions.addTodo)}
              >
                Save
              </button>
              <button
                type="submit"
                onSubmit={event => event.preventDefault()}
                onClick={() => this.addNewCompletedTodo(actions.addTodo)}
              >
                Mark As Complete
              </button>
            </div>
          )}
        </TodoConsumer>
      </div>
    );
  }
}

export default AddTodoForm;
