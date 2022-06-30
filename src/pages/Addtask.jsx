import React from 'react'

const Addtask = () => {
  return (
    <>
     <form className='add__task__form' action="">
         <input type="text" placeholder='Task'/>
         <button type='submit'>Post</button>
     </form>
    </>
  )
}

export default Addtask