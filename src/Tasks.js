import React from 'react'

const Tasks = ({tasks, deleteTask}) => {
   const taskList = tasks.length ? (
       tasks.map(task => {
           return (
               <div key={task.id} className = "center">
                   <span onClick={() => {deleteTask(task.id)}}>{task.content}</span>
               </div>
           )
       })
   ) : (
       <p className="center">No tasks.</p>
   )
   return (
       <div className = "task list">
           <h4>{taskList}</h4>
       </div>
   )

}

export default Tasks
