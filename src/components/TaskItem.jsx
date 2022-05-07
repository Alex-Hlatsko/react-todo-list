import React from 'react'
import {BsCheck, BsTrash} from 'react-icons/bs'

const TaskItem = ( {tasks, changeTasklist, removeTasklist} ) => {
  return (
    <div className='task'>
      <button className='task__content' onClick={() => changeTasklist(tasks.id)}>
        <div className="task__content__ico"><BsCheck className={`${tasks.isStarted ? 'task_active': 'task_inactive'}`}></BsCheck></div>
        <div className="task__content__text">
          <h1 className='task__title'>{tasks.title}</h1>
          <p className='task__sub_title'>{tasks.first_name} {tasks.last_name}</p>
        </div>
      </button>
      <button className='task__remove' onClick={() => removeTasklist(tasks.id)}>
        <BsTrash size={32}></BsTrash>
      </button>
    </div>
  )
}

export default TaskItem