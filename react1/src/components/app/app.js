import React from "react"


import Footer from "../footer"
import NewTaskForm from "../new-task-form"
import TaskList from "../task-list"
  
import './app.css'

const App = () => {
const tasks = [ 
  { description: "Completed task", created: "17 seconds ago", completed: true, editing: false },
  { description: "Editing task", created: "5 minutes ago", completed: false, editing: true },
  { description: "Active task", created: "5 minutes ago", completed: false, editing: false }
]

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
         <NewTaskForm/>
        </header>
        <section className="main">
        <TaskList tasks={tasks}/>
        <Footer/>
        </section>
        </section>
    );
  }

export default App