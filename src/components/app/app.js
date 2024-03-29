import React, { Component } from "react";

import Footer from "../footer";
import NewTaskForm from "../new-task-form";
import TaskList from "../task-list";

import "./app.css";

class App extends Component {
  state = {
    todoData: [
      { description: "Completed task", created: "17 seconds ago" },
      { description: "Editing task", created: "5 minutes ago" },
      { description: "Active task", created: "5 minutes ago" },
    ],
  };

  deleteItem = (index) => {
    this.setState(({ todoData }) => {
      const newArray = todoData.filter((_, i) => i !== index);
      return {todoData: newArray}
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

// const App = () => {
//   const tasks = [
//     { description: "Completed task", created: "17 seconds ago" },
//     { description: "Editing task", created: "5 minutes ago" },
//     { description: "Active task", created: "5 minutes ago" },
//   ];

//   return (
//     <section className="todoapp">
//       <header className="header">
//         <h1>todos</h1>
//         <NewTaskForm />
//       </header>
//       <section className="main">
//         <TaskList tasks={tasks} onDeleted={(id) => console.log(`del`, id)} />
//         <Footer />
//       </section>
//     </section>
//   );
// };

export default App;
