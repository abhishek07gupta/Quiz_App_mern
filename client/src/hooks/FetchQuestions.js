import { useEffect, useState } from "react"
import data from "../database/data"
import { useDispatch } from "react-redux"
import * as Action from '../redux/questionReducer'

export const useFetchQuestion=()=>{
    const dispatch=useDispatch();
    const [getData,setGetData]=useState({isLoading:false,apiData:[],serverError:null})
    useEffect(()=>{
        setGetData(prev=>({...prev,isLoading:true}))

        // now async function to get the data(from local file for now)  
        (async()=>{
          try{
            let question = await data;
            if(question.length>0){
                setGetData(prev=>({...prev,isLoading:false}))
                setGetData(prev=>({...prev,apiData:question}))

                // dispatching action 
                dispatch(Action.startExamAction(question))
            }else{
                throw new Error("no Questions Available")
            }
          } catch(error){
            setGetData(prev=>({...prev,isLoading:true}))
            setGetData(prev=>({...prev,serverError:error}))
          } 
        })();
    },[dispatch])

    return [getData,setGetData]
}

export const moveNextQuestion =()=>async(dispatch)=>{
  try{
    dispatch(Action.moveNextAction())
  }catch(error){
    console.log(error)
  }
}
export const movePrevQuestion =()=>async(dispatch)=>{
  try{
    dispatch(Action.movePrevAction())
  }catch(error){
    console.log(error)
  }
}