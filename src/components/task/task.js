import React, { Component } from "react";

import "./task.css"; 

class Task extends Component {
  state = {
    completed: false,
  };

  onToggleClick = () => {
    this.setState(({ completed }) => {
      return {
        completed: !completed,
      };
    });
  };

  render() {
    const { description, created, onDeleted } = this.props;
    const { completed } = this.state;

    let classNames = "description";
    if (completed) {
      classNames += " completed";
    }

    return (
      <li>
        <div className="view">
          <input
            className="toggle"
            onClick={this.onToggleClick}
            type="checkbox"
          ></input>
          <label>
            <span className={classNames}>{description}</span>
            <span className="created">{created}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
      </li>
    );
  }
}

export default Task;
