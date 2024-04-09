import React from 'react';
import PropTypes from 'prop-types';

import TasksFilter from '../tasks-filter/Tasks-filter';

import './Footer.css';

const Footer = ({ todoLeftCount, changeTaskFilter, taskFilter, clearCompleted }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{todoLeftCount} items left</span>
      <TasksFilter changeTaskFilter={changeTaskFilter} taskFilter={taskFilter} />
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};
Footer.defaultProps = {
  todoLeftCount: 0,
  changeTaskFilter: () => {},
  taskFilter: 'all',
  clearCompleted: () => {},
};

Footer.propTypes = {
  todoLeftCount: PropTypes.number,
  changeTaskFilter: PropTypes.func,
  taskFilter: PropTypes.string,
  clearCompleted: PropTypes.func,
};

export default Footer;
