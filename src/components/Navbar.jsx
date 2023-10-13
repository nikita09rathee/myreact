import React from 'react'
// import { U } from 'react-redux/es/hooks/useSelector';
import { useSelector,useDispatch } from 'react-redux';
const Navbar = () => {
      const dispatch=useDispatch();
      const {todos}=useSelector((store)=>store.reducer);
       const completd=todos?.filter((e)=>e.status==true);
       const notcompletd=todos?.filter((e)=>e.status==false);
     console.log(todos);
  return (
    <div>
    <button>Total--{todos?.length}</button>
    <button>{completd?.length}</button>
    <button>{notcompletd?.length}</button>

    
    </div>
  )
}

export default Navbar