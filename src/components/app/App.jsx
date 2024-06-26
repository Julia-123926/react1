import React, { useState } from 'react';

import Footer from '../footer/Footer';
import NewTaskForm from '../new-task-form/New-task-form';
import TaskList from '../task-list/Task-list';

import './app.css';

const App = () => {
  const [todoData, setTodoData] = useState([
    {
      description: 'Completed task',
      created: new Date(),
      completed: false,
      id: 1,
    },
    {
      description: 'Editing task',
      created: new Date(),
      completed: false,
      id: 2,
    },
    {
      description: 'Active task',
      created: new Date(),
      completed: false,
      id: 3,
    },
  ]);

  const [taskFilter, setTaskFilter] = useState('all');

  const clearCompleted = () => {
    setTodoData((prevTodoData) => prevTodoData.filter((item) => !item.completed));
  };

  const changeCompleted = (id) => {
    const newTodoData = [...todoData];
    const todo = newTodoData.find((elem) => elem.id === id);
    todo.completed = !todo.completed;
    setTodoData(newTodoData);
  };

  const changeTaskFilter = (filterWord) => {
    setTaskFilter(filterWord);
  };

  const deleteItem = (id) => {
    setTodoData((prevTodoData) => prevTodoData.filter((item) => item.id !== id));
  };

  const addItem = (text) => {
    const maxIndex = Math.max(...todoData.map((elem) => elem.id));
    const newItem = {
      description: text,
      created: new Date(),
      id: maxIndex + 1,
    };
    setTodoData((prevTodoData) => [...prevTodoData, newItem]);
  };

  const onEnterClick = (e) => {
    if (e.key === 'Enter') {
      addItem(e.target.value);
      e.target.value = '';
    }
  };

  const todoLeftCount = todoData.filter((task) => !task.completed).length;

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onEnterClick={onEnterClick} />
      </header>
      <section className="main">
        <TaskList tasks={todoData} onDeleted={deleteItem} taskFilter={taskFilter} changeCompleted={changeCompleted} />
      </section>
      <Footer
        todoLeftCount={todoLeftCount}
        changeTaskFilter={changeTaskFilter}
        taskFilter={taskFilter}
        clearCompleted={clearCompleted}
      />
    </section>
  );
};

export default App;
