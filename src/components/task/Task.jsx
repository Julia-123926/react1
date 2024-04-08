import React from "react";
import { formatDistance } from "date-fns";
import PropTypes from "prop-types";

import "./Task.css";

const Task = ({
  description,
  completed,
  created,
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
          <span className="created">
            {formatDistance(new Date(created), new Date(), { addSuffix: true })}
          </span>
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

Task.defaultProps = {
  created: new Date(),
  description: "a",
  completed: false,
};

Task.propTypes = {
  description: PropTypes.string,
  completed: PropTypes.bool,
};

export default Task;
