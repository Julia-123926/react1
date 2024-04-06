import React, { useState } from "react";
import TasksFilter from "../tasks-filter/Tasks-filter";

import "./Footer.css";

const Footer = ({ todoLeftCount, changeTaskFilter, taskFilter }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{todoLeftCount} items left</span>
      <TasksFilter
        changeTaskFilter={changeTaskFilter}
        taskFilter={taskFilter}
      />
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default Footer;
