import React, { useState } from "react";

function CreateTask(props) {
  const [newTaskName, setNewTaskName] = useState("");

  const updateNewTask = (e) => setNewTaskName(e.target.value);

  const createNewTask = () => {
    props.callback(newTaskName);
    setNewTaskName("");
  };

  return (
    <div className="container my-1">
      <div className="row">
        <input
          type="text"
          className="form-control"
          value={newTaskName}
          onChange={updateNewTask}
        />
      </div>
      <div className="row">
        <button className="btn btn-secondary mt-2 pd-1" onClick={createNewTask}>
          Add task
        </button>
      </div>
    </div>
  );
}

export default CreateTask;
