import React from "react";
import Task from "../task";

import './task-list.css' 

const TaskList = ({ tasks }) => {
  const elements = tasks.map((item) => {
    return <Task desription {...item} />;
  });
  return <ul className='todo-list'>{elements}</ul>;
};

export default TaskList;
