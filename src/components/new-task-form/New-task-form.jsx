import React from 'react';

import './new-task-form.css';

const NewTaskForm = ({ onEnterClick }) => (
  <input className="new-todo" placeholder="What needs to be done?" onKeyDown={onEnterClick} />
);

export default NewTaskForm;
