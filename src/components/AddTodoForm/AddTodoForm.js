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
  }

  render() {
    return (
      <form action="">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          placeholder="Title"
          defaultValue={this.state.title}
        />
        <fieldset className="due-date-fields">
          <label htmlFor="">Due Date</label>
          <div className="date-container">
            <input
              type="number"
              name="date"
              min="1"
              max="31"
              placeholder="Date"
              defaultValue={this.state.date}
            />
            <span>/</span>
            <input
              type="number"
              name="month"
              min="1"
              max="12"
              placeholder="Month"
              defaultValue={this.state.month}
            />
            <span>/</span>
            <input
              type="number"
              name="year"
              min="1900"
              max="2050"
              placeholder="Year"
              defaultValue={this.state.year}
            />
          </div>
        </fieldset>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          cols="30"
          rows="10"
          placeholder="Description"
          defaultValue={this.state.description}
        />
        <input
          type="hidden"
          name="completed"
          defaultChecked={this.state.completed}
        />
        <div className="button-container">
          <button type="submit">Save</button>
          <button type="submit">Mark As Complete</button>
        </div>
      </form>
    );
  }
}

export default AddTodoForm;
