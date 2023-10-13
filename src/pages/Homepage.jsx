import React, { useEffect } from 'react'
import TodoInput from '../components/TodoInput'
import Row from '../components/Row'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../redux/action'

const Homepage = () => {
      const dispatch=useDispatch();
      const {isLoading,isError,todos}=useSelector((store)=>store.reducer);
      useEffect(()=>{
dispatch(getData());
      },[])

      //conso//le.log(data);
  return (
    <div style={{width:"60%",margin:"auto",border:" black solid 2px"}}>Homepage
    <Navbar/>
    <TodoInput/>

    {todos?.reverse().map((e)=>(
      
      <Row {...e} key={e.id}/>
  ))}
    
    </div>
  )
}

export default Homepage