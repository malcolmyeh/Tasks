import React from 'react'
import FlipMove from "react-flip-move";

const Tasks = ({tasks, deleteTask}) => {
   const taskList = tasks.length ? (
       tasks.map(task => {
           return (
            <FlipMove>
               <div key={task.id} className = "center">
                   <span onClick={() => {deleteTask(task.id)}}>{task.content}</span>
               </div>
            </FlipMove>)
       })
   ) : (
        <FlipMove>
            <p className="center">No tasks.</p>
        </FlipMove>
   )
   return (
       <div className = "task list">
           <h4>{taskList}</h4>
       </div>
   )

}

export default Tasks
