import React from 'react';

import Task from '../task/Task';

import './Task-list.css';

const TaskList = ({ tasks, onDeleted, taskFilter, changeCompleted }) => {
  const getProducts = () => {
    let newTasks = [...tasks];
    switch (taskFilter) {
      case 'active':
        newTasks = tasks.filter((elem) => !elem.completed);
        break;
      case 'completed':
        newTasks = tasks.filter((elem) => elem.completed);
        break;
      default:
        break;
    }
    return newTasks.map((item) => (
      <Task key={item.id} {...item} onDeleted={onDeleted} changeCompleted={changeCompleted} />
    ));
  };

  return <ul className="todo-list">{getProducts()}</ul>;
};

export default TaskList;
