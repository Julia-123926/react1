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
      isActive: false,
      seconds: 0,
      lastSecondsData: new Date(),
    },
    {
      description: 'Editing task',
      created: new Date(),
      completed: false,
      id: 2,
      isActive: false,
      seconds: 0,
      lastSecondsData: new Date(),
    },
    {
      description: 'Active task',
      created: new Date(),
      completed: false,
      id: 3,
      isActive: false,
      lastSecondsData: new Date(),
      seconds: 0,
    },
  ]);

  const [taskFilter, setTaskFilter] = useState('all');

  const updateTodoDescription = (id, newDescription) => {
    setTodoData(todoData.map((todo) => (todo.id === id ? { ...todo, description: newDescription } : todo)));
  };

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
      isActive: false,
      lastSecondsData: new Date(),
      seconds: 0,
    };
    setTodoData((prevTodoData) => [...prevTodoData, newItem]);
  };

  const onEnterClick = (e) => {
    if (e.key === 'Enter') {
      addItem(e.target.value);
      e.target.value = '';
    }
  };

  const editItem = (id, newText) => {
    const newTodoData = [...todoData];
    const todo = (prevTodoData) => prevTodoData.find((elem) => elem.id === id);
    todo.description = newText;
    setTodoData(newTodoData);
  };

  const onEnterEditClick = (e) => {
    if (e.key === 'Enter') {
      editItem(e.target.value);
      e.target.value = '';
    }
  };

  const changeActiveTask = (id) => {
    const newTodoData = [...todoData];
    const todo = newTodoData.find((elem) => elem.id === id);
    todo.isActive = !todo.isActive;
    setTodoData(newTodoData);
  };

  const plusSecond = (id) => {
    const newTodoData = [...todoData];
    const todo = newTodoData.find((elem) => elem.id === id);
    todo.seconds += 1;
    todo.lastSecondsData = new Date();
    setTodoData(newTodoData);
  };

  const calculateSeconds = (startDate) => {
    const currentDate = new Date();
    const pastSeconds = currentDate - startDate;
    const sec = Math.floor(pastSeconds / 1000);
    return sec;
  };

  const addSeconds = (id) => {
    const newTodoData = [...todoData];
    const todo = newTodoData.find((elem) => elem.id === id);

    todo.seconds += calculateSeconds(todo.lastSecondsData);

    setTodoData(newTodoData);
  };

  const todoLeftCount = todoData.filter((task) => !task.completed).length;

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onEnterClick={onEnterClick} />
      </header>
      <section className="main">
        <TaskList
          tasks={todoData}
          onDeleted={deleteItem}
          taskFilter={taskFilter}
          changeCompleted={changeCompleted}
          changeActiveTask={changeActiveTask}
          plusSecond={plusSecond}
          addSeconds={addSeconds}
          editItem={editItem}
          onEnterEditClick={onEnterEditClick}
          updateTodoDescription={updateTodoDescription}
        />
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
