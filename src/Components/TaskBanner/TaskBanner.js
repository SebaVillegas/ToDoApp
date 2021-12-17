import React from "react";

function TaskBanner(props){
    console.log(props)
    return(
        <h4 className="bg-secondary text-white text-center p-4">{props.taskGroup.name} ({props.taskNumbers.filter(t => !t.done).length} task to do in total)</h4>

    );
}

export default TaskBanner;