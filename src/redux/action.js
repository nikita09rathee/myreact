import { ADD_DATA_ERROR, ADD_DATA_REQUEST, ADD_DATA_SUCCESS, Delete_DATA_ERROR, Delete_DATA_REQUEST, Delete_DATA_SUCCESS, GET_DATA_ERROR, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actiontype";
import axios from "axios";
const baseUrl="http://localhost:8080/todos"
export const  getData=()=>async(dispatch)=>{
try{
   dispatch({type:GET_DATA_REQUEST});
   const data=await axios.get(baseUrl);
   dispatch({type:GET_DATA_SUCCESS,payload:data.data})
}
catch(error){
      console.log(error)
   dispatch({type:GET_DATA_ERROR});
}
}

//post
export const postData=(payload)=>async(dispatch)=>{
      try{
      dispatch({type:ADD_DATA_REQUEST});
      await axios.post(baseUrl,payload);

      dispatch({type:ADD_DATA_SUCCESS,payload:payload});

      }
      catch(error){
            console.log(error);
      dispatch({type:ADD_DATA_ERROR});

      }
      }

      //update //patch
export const  updateData=(id,payload)=>async(dispatch)=>{
            try{
                  
            await axios.put(`${baseUrl}/${id}`,payload)
            }
            catch(error){
                  console.log(error)
            }
            }
            //delte
 export const  deleteData=(id)=>async(dispatch)=>{
                  try{
            dispatch({type:Delete_DATA_REQUEST});
            await  axios.delete(`${baseUrl}/${id}`)
            dispatch({type:Delete_DATA_SUCCESS});

                  }
                  catch(error){
                        console.log(error)
            dispatch({type:Delete_DATA_ERROR});

                  }
                  }
//
export const  toggleDate=(id,status)=>async(dispatch)=>{
                        try{
                              
                        await axios.patch(`${baseUrl}/${id}`,{status:!status})
                        }
                        catch(error){
                              console.log(error)
                        }
                        }