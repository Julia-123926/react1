import React, { Component } from "react";

import Footer from "../footer";
import NewTaskForm from "../new-task-form";
import TaskList from "../task-list";

import "./app.css";

class App extends Component {
  state = {
    todoData: [
      { description: "Completed task", created: "17 seconds ago", id: 1},
      { description: "Editing task", created: "5 minutes ago", id: 2},
      { description: "Active task", created: "5 minutes ago", id: 3},
    ],
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArray,
      };
    });
  };

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section className="main">
          <TaskList tasks={this.state.todoData} onDeleted={this.deleteItem} />
          <Footer />
        </section>
      </section>
    );
  }
}

export default App;
