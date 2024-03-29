import React from "react";
import Task from "../task";

import './task-list.css' 

const TaskList = ({ tasks, onDeleted }) => {
  const elements = tasks.map((item, index) => {
    return <Task key={index} {...item} 
    onDeleted={() => onDeleted(index)}/>;
  });
  return <ul className='todo-list'>{elements}</ul>;
};

export default TaskList;
