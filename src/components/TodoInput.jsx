import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getData, postData } from '../redux/action';

const TodoInput = () => {
      const [input,setInput]=useState("");
      const dispatch=useDispatch();

      const handlenewtodo=(e)=>{
      e.preventDefault();

            const payload={
                  title:input,
                  status:false
            }
   dispatch(postData(payload)).then(()=>dispatch(getData()));
   setInput("");
      }

  return (
    <div><h1>add todo</h1>
    <form onSubmit={handlenewtodo}>
    <input type="text" placeholder="add todo " onChange={(e)=>setInput(e.target.value)}></input>
    <button type="submit">add todo</button>
    </form>
    </div>
  )
}

export default TodoInput
