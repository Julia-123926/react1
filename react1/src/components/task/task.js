import React from "react";

import './task.css' 

const Task = ({description, created, completed, editing}) => {
  return (
    <li className={completed ? "completed" : editing ? "editing" : ''}>
    <div className="view">
      <input className="toggle" type="checkbox"></input>
      <label>
        <span className="description">{description}</span>
        <span className="created">{created}</span>
      </label>
      <button className="icon icon-edit"></button>
      <button className="icon icon-destroy"></button>
    </div>
  </li>
  );
}

  export default Task