import { GET_DATA_ERROR, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actiontype"

const initialState={
      isLoading:false,
      isError:false,
      todos:[]
}


export const reducer=(state=initialState,{type,payload})=>{

      switch(type){
          case GET_DATA_REQUEST:
            return {...state,isLoading:true,isError:false}
          
            case GET_DATA_SUCCESS:
                  return {...state,isLoading:false,todos:payload}
      
                  case GET_DATA_ERROR:
                        return {...state,isLoading:false,isError:true}
            
            default :
              return state
      }
}
