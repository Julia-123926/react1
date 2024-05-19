import React from 'react';

import Task from './task/Task';

import './task-list.css';

const TaskList = ({
  tasks,
  plusSecond,
  onDeleted,
  taskFilter,
  changeCompleted,
  changeActiveTask,
  addSeconds,
  editItem,
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
        changeActiveTask={changeActiveTask}
        plusSecond={plusSecond}
        addSeconds={addSeconds}
        editItem={editItem}
        onEnterEditClick={onEnterEditClick}
        updateTodoDescription={updateTodoDescription}
      />
    ));
  };

  return <ul className="todo-list">{getProducts()}</ul>;
};

export default TaskList;
