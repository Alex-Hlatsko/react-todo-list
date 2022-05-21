import React from 'react'
import { useContext } from 'react';
import { Context } from '../index';

const Signout = () => {
    const {auth} = useContext(Context)
  return (
      <>
        <div>Signout</div>
        <button className="btn__sign" onClick={()=>auth.signOut()}>Out</button>
      </>
  )
}

export default Signout