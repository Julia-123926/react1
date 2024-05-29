import React, { useState, useRef, useEffect } from 'react';

import Footer from '../footer';
import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
// import TodoWithTimer from '../TodoWithTimer';

import './app.css';

const App = () => {
  const [todoData, setTodoData] = useState([
    {
      created: new Date(),
      description: 'Completed task',
      completed: false,
      id: 1,
      isActive: false,
      duration: 300,
      timeLeft: 300,
    },
    {
      created: new Date(),
      description: 'Editing task',
      completed: false,
      id: 2,
      isActive: false,
      duration: 300,
      timeLeft: 300,
    },
    {
      created: new Date(),
      description: 'Active task',
      completed: false,
      id: 3,
      isActive: false,
      duration: 300,
      timeLeft: 300,
    },
  ]);
  const [taskFilter, setTaskFilter] = useState('all');
  const timerRef = useRef({});

  const startTimer = (id) => {
    setTodoData((prevData) => prevData.map((task) => (task.id === id ? { ...task, isActive: true } : task)));
    if (!timerRef.current[id]) {
      timerRef.current[id] = {
        startTime: Date.now(),
        originalTimeLeft: todoData.find((task) => task.id === id).timeLeft,
      };
    }
  };

  const stopTimer = (id) => {
    if (!timerRef.current[id]) return;
    const pastTime = Math.floor((Date.now() - timerRef.current[id].startTime) / 1000);
    const newTime = timerRef.current[id].originalTimeLeft - pastTime;
    setTodoData((prevData) =>
      prevData.map((task) => (task.id === id ? { ...task, isActive: false, timeLeft: newTime } : task))
    );
    timerRef.current[id] = null;
  };

  const plusSecond = () => {
    setTodoData((prevTodo) =>
      prevTodo.map((task) => {
        if (task.isActive && timerRef.current[task.id]) {
          const pastTime = Math.floor((Date.now() - timerRef.current[task.id].startTime) / 1000);
          const newTime = timerRef.current[task.id].originalTimeLeft - pastTime;
          if (newTime <= 0) {
            timerRef.current[task.id] = null;
            return { ...task, timeLeft: 0, isActive: false };
          }
          return { ...task, timeLeft: newTime };
        }
        return task;
      })
    );
  };

  useEffect(() => {
    const timerID = setInterval(plusSecond, 1000);
    return () => clearInterval(timerID);
  }, [timerRef]);

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

  const addItem = (text, minutes, seconds) => {
    if (!text.trim()) return;
    const mins = minutes.trim() === '' ? 5 : +minutes;
    const secs = seconds.trim() === '' ? 0 : +seconds;
    const totalTime = mins * 60 + secs;
    const maxIndex = Math.max(...todoData.map((elem) => elem.id));
    const newItem = {
      description: text,
      created: new Date(),
      id: maxIndex + 1,
      completed: false,
      isActive: false,
      duration: totalTime,
      timeLeft: totalTime,
    };
    setTodoData([...todoData, newItem]);
  };

  const onEnterClick = ({ description, minutes, seconds }) => {
    addItem(description, minutes, seconds);
  };
  const onEnterEditClick = (e) => {
    if (e.key === 'Enter') {
      updateTodoDescription(e.target.value);
      e.target.value = '';
    }
  };

  const todoLeftCount = todoData.filter((task) => !task.completed).length;

  return (
    <section className="todoapp">
      {/* <button onClick={() => console.log(todoData)}>log todo</button> */}
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
          stopTimer={stopTimer}
          startTimer={startTimer}
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
