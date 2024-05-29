/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';

const NewTaskForm = ({ onEnterClick }) => {
  const [data, setData] = useState({ description: '', minutes: '', seconds: '' });

  const changeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submitForm = (e) => {
    if (e.key !== 'Enter') return;
    onEnterClick(data);
    setData({ description: '', minutes: '', seconds: '' });
  };
  return (
    <form className="new-todo-form" onKeyDown={submitForm}>
      <input
        name="description"
        value={data.description}
        onChange={changeInput}
        className="new-todo"
        placeholder="What needs to be done?"
      />
      <input
        name="minutes"
        value={data.minutes}
        onChange={changeInput}
        className="new-todo-form__timer"
        placeholder="min"
        type="number"
      />
      <input
        name="seconds"
        value={data.seconds}
        onChange={changeInput}
        className="new-todo-form__timer"
        placeholder="sec"
        type="number"
      />
    </form>
  );
};

export default NewTaskForm;
