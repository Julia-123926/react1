import React, { useState } from 'react';
import { formatDistance } from 'date-fns';
import PropTypes from 'prop-types';

import './task.css';

const Task = ({
  description,
  completed,
  created,
  onDeleted,
  id,
  changeCompleted,
  stopTimer,
  timeLeft,
  startTimer,
  onEnterEditClick,
  updateTodoDescription,
}) => {
  const [editActive, setEditActive] = useState(false);
  const [editText, setEditText] = useState('');

  const onToggleClick = () => {
    // console.log(id);
    changeCompleted(id);
  };

  const handleEdit = () => {
    setEditText(description);
    setEditActive(true);
  };

  const handleEditSubmit = () => {
    updateTodoDescription(id, editText);
    setEditActive(false);
  };

  const formateTime = () => {
    const mins = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${mins.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  return (
    <li>
      <div className="view">
        <input
          className="toggle"
          checked={completed}
          onChange={onToggleClick}
          onKeyDown={onEnterEditClick}
          type="checkbox"
        />
        <label>
          {editActive && (
            <input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleEditSubmit();
                }
              }}
              className="edit-field"
            />
          )}
          <span className={`description ${completed ? 'completed' : ''}`}>{description}</span>
          <div className="timer_block">
            <button onClick={() => startTimer(id)} className="icon-play"></button>
            <button onClick={() => stopTimer(id)} className="icon-pause"></button>
            <span className="time">{formateTime()}</span>
          </div>
          <span className="created">{formatDistance(new Date(created), new Date(), { addSuffix: true })}</span>
        </label>
        <button onClick={handleEdit} className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={() => onDeleted(id)}></button>
      </div>
    </li>
  );
};

Task.defaultProps = {
  created: new Date(),
  description: 'a',
  completed: false,
};

Task.propTypes = {
  description: PropTypes.string,
  completed: PropTypes.bool,
};

export default Task;
