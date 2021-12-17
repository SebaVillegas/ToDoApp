import React, {useState} from "react";

function CreateGroup(props) {
  const [newTaskGroup, setNewTaskGroup] = useState("");

  const updateNewGroup = (e) => setNewTaskGroup(e.target.value);

  const createNewGroup = () =>{
    props.callback(newTaskGroup);
    setNewTaskGroup("");
  }

  return (
    <div className="container my-1">
      <div className="row">
        <input
          type="text"
          className="form-control"
          value={newTaskGroup}
          onChange={updateNewGroup}
        />
      </div>
      <div className="row">
        <button className="btn btn-secondary mt-2 pd-1" onClick={createNewGroup}>
          Add task group
        </button>
      </div>
    </div>
  );
}

export default CreateGroup;
