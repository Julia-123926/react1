import React from 'react';

import Task from './task';

import './task-list.css';

const TaskList = ({
  tasks,
  startTimer,
  onDeleted,
  taskFilter,
  changeCompleted,
  stopTimer,
  onEnterEditClick,
  updateTodoDescription,
}) => {
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
      <Task
        key={item.id}
        {...item}
        onDeleted={onDeleted}
        changeCompleted={changeCompleted}
        stopTimer={stopTimer}
        startTimer={startTimer}
        item={item}
        // editItem={editItem}
        onEnterEditClick={onEnterEditClick}
        updateTodoDescription={updateTodoDescription}
      />
    ));
  };

  return <ul className="todo-list">{getProducts()}</ul>;
};

export default TaskList;
