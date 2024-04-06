import React, { useState } from "react";

import "./Task.css";

const Task = ({
  description,
  created,
  completed,
  onDeleted,
  id,
  changeCompleted,
}) => {
  const onToggleClick = () => {
    changeCompleted(id);
  };

  return (
    <li>
      <div className="view">
        <input
          className="toggle"
          checked={completed}
          onChange={onToggleClick}
          type="checkbox"
        />
        <label>
          <span className={`description ${completed ? "completed" : ""}`}>
            {description}
          </span>
          <span className="created">{created}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button
          className="icon icon-destroy"
          onClick={() => onDeleted(id)}
        ></button>
      </div>
    </li>
  );
};

export default Task;
