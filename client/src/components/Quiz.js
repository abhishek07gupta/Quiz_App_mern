import React, { useEffect } from 'react'
import Questions from './Questions';

import {moveNextQuestion,movePrevQuestion} from '../hooks/FetchQuestions'
import {useSelector,useDispatch} from 'react-redux'

export default function Quiz() {

    const {trace,queue} =useSelector(state=>state.questions);
    const dispatch=useDispatch()
    useEffect(()=>{
        console.log(trace);
    })

    function onNext(){
        console.log("button is clicked");
        if(trace!==queue.length){
            dispatch(moveNextQuestion())
        }
    }
    function onPrev(){
        console.log("button is clicked prev");
        if(trace!==0){
            dispatch(movePrevQuestion())
        }
    }
  return (
    <div className="container">
        <h1 className="title text-light">
            Quiz Application
        </h1>
            <Questions/>
        <div className="grid">
             <button className="btn prev" onClick={onPrev}>Prev</button>
             <button className="btn next" onClick={onNext}>Next</button>

        </div>
    </div>
  )
}
