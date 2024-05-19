import React, { useEffect, useState } from 'react';
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
  isActive,
  seconds,
  changeActiveTask,
  plusSecond,
  addSeconds,
  onEnterEditClick,
  updateTodoDescription,
}) => {
  const [editActive, setEditActive] = useState(false);
  const [editText, setEditText] = useState('');

  const formatTime = () => {
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const minutes = `${Math.floor(seconds / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(seconds / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  useEffect(() => {
    if (isActive) {
      addSeconds(id);
    }
  }, []);

  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        plusSecond(id);
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isActive]);

  const handleStart = () => {
    if (!isActive) {
      changeActiveTask(id);
    }
  };

  const handlePause = () => {
    if (isActive) {
      changeActiveTask(id);
    }
  };

  const onToggleClick = () => {
    changeCompleted(id);
  };

  const handleEdit = () => {
    // setEditText(description);
    setEditActive(true);
  };

  const handleEditSubmit = () => {
    updateTodoDescription(id, editText);
    setEditActive(false);
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
            <button className="icon-play" onClick={handleStart}></button>
            <button className="icon-pause" onClick={handlePause}></button>
            <span className="time">{formatTime()}</span>
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
