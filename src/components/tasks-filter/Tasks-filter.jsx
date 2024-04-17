import React from 'react';

import './tasks-filter.css';

const TasksFilter = ({ changeTaskFilter, taskFilter }) => (
  <ul className="filters">
    <li>
      <button onClick={() => changeTaskFilter('all')} className={taskFilter === 'all' ? 'selected' : ''}>
        All
      </button>
    </li>
    <li>
      <button onClick={() => changeTaskFilter('active')} className={taskFilter === 'active' ? 'selected' : ''}>
        Active
      </button>
    </li>
    <li>
      <button onClick={() => changeTaskFilter('completed')} className={taskFilter === 'completed' ? 'selected' : ''}>
        Completed
      </button>
    </li>
  </ul>
);

export default TasksFilter;
