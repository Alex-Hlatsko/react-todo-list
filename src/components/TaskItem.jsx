import React from 'react'
import {BsCheck} from 'react-icons/bs'

const TaskItem = ( {tasks, changeTasklist} ) => {
  return (
    <button className='task' onClick={() => changeTasklist(tasks.id)}>
        <div className="task__ico"><BsCheck className={`${tasks.isStarted ? 'active': 'inactive'}`}></BsCheck></div>
        <div className="task__content">
            <h1>{tasks.title}</h1>
            <p>{tasks.first_name} {tasks.last_name}</p>
        </div>
    </button>
  )
}

export default TaskItem