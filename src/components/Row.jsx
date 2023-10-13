import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { deleteData, getData, toggleDate } from '../redux/action';

const Row = ({id,title,status}) => {
      const[hide,setHide]=useState(false);
      const dispatch=useDispatch();

      const handledelete=()=>{
dispatch(deleteData(id))
     .then(()=>dispatch(getData()));
      }

      const toggle=(e)=>{
 e.preventDefault();
            dispatch(toggleDate(id,status)).then(()=>dispatch(getData()))
      }
      const editTodo=()=>{
         setHide(true);
      }
  return (
    <div>
          <h1>{title}</h1>
    <h2 onClick={toggle}>{status?"completed":"not completed"}</h2>
    <button onClick={editTodo} >edit</button>
    <button onClick={handledelete} >delete</button>
    </div>
  )
}

export default Row