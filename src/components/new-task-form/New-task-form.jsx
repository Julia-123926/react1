import React from 'react';

import './New-task-form.css';

const NewTaskForm = ({ onEnterClick }) => {
  return <input className="new-todo" placeholder="What needs to be done?" onKeyDown={onEnterClick} />;
};

export default NewTaskForm;
