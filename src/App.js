import "./App.css";
import React, { useState } from "react";
import TaskRow from "./Components/TaskRow/TaskRow.js";
import TaskBanner from "./Components/TaskBanner/TaskBanner";
import CreateTask from "./Components/CreateTask/CreateTask";
import Visibility from "./Components/Visibility/Visibility";
import DeleteTask from "./Components/DeleteTask/DeleteTask";
import CreateGroup from "./Components/CreateGroup/CreateGroup";

function App() {
  const [taskGroup, setTaskGroup] = useState([{name: "Prueba"},]);

  console.log(taskGroup)

  const [taskItems, setTaskItems] = useState([
    { name: "Task one", done: true },
    { name: "Task two", done: false },
    { name: "Task three", done: false },
    { name: "Task four", done: false },
  ]);

  const [showCompleted, setShowCompleted] = useState(true);

  const createNewTaskGroup = (groupName) => {
    if (!taskGroup.find((t) => t.name === groupName)) {
      setTaskGroup(...taskGroup, {name: groupName});
    }
  }

  const createNewTask = (taskName) => {
    if (!taskItems.find((t) => t.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  };


  const toggleTask = (task) =>
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );

  const taskTableRows = (doneValue) =>
    taskItems
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
      ));

  return (
    <div className="container mt-5">
      <div className="row">
        {/* <CreateGroup callback={createNewTaskGroup}/> */}
        <TaskBanner taskGroup={taskGroup} taskNumbers={taskItems} />
        <CreateTask callback={createNewTask} />


        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>{taskTableRows(false)}</tbody>
        </table>
      </div>

      <div className="row center">
        <div className="bg-primary-text-white text-left p-2">
          <Visibility
            description="completed task"
            isChecked={showCompleted}
            callback={(cheked) => setShowCompleted(cheked)}
          />
        </div>

        {showCompleted && (
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>{taskTableRows(true)}</tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
