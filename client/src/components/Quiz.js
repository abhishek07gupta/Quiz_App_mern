import React, { useEffect, useState } from 'react'
import Questions from './Questions';
import { PushAsnwer } from '../hooks/setResult';
import {moveNextQuestion,movePrevQuestion} from '../hooks/FetchQuestions'
import {useSelector,useDispatch} from 'react-redux'
import { Navigate } from 'react-router-dom';

export default function Quiz() {
    const [check,setChecked]=useState(undefined)
    const {trace,queue} =useSelector(state=>state.questions);
    const result=useSelector(state=>state.result.result)

    const dispatch=useDispatch()
    useEffect(()=>{
        console.log(trace);
    })

    function onNext(){
        console.log("button is clicked");
        if(trace!==queue.length){
            dispatch(PushAsnwer(check))
            dispatch(moveNextQuestion())
        }
    }
    function onPrev(){
        console.log("button is clicked prev");
        if(trace!==0){
            dispatch(movePrevQuestion())
        }
    }

    function onChecked(check){
        console.log(check)
        setChecked(check)
    }

    if(result.length && result.length>=queue.length){
        return <Navigate to={'/result'} replace={true}></Navigate>
    }

  return (
    <div className="container">
        <h1 className="title text-light">
            Quiz Application
        </h1>
            <Questions onChecked={onChecked}/>
        <div className="grid">
             <button className="btn prev" onClick={onPrev}>Prev</button>
             <button className="btn next" onClick={onNext}>Next</button>

        </div>
    </div>
  )
}
