import React from 'react'
import { Link } from 'react-router-dom'

import ResultTable from './ResultTable'
import '../styles/Result.css'

export default function Result() {
    function onRestart(){
        console.log('on restart')
    }
  return (
    <div className="container">
        <h1 className="title text-light">Quiz Application</h1>
        <div className="result flex-center">
            <div className="flex">
                <span>Username</span>
                <span className="bold">Winner boost</span>
            </div>
            <div className="flex">
                <span>Maximum Score</span>
                <span className="bold">50</span>
            </div>
            <div className="flex">
                <span>Total Questions</span>
                <span className="bold">03</span>
            </div>
            <div className="flex">
                <span>Total Attempts</span>
                <span className="bold">02</span>
            </div>
            <div className="flex">
                <span>Your Score</span>
                <span className="bold">30</span>
            </div>
            <div className="flex">
                <span>Quiz Result</span>
                <span className="bold">Passed</span>
            </div>
        </div>
        <div className="start">
            <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
        </div>
        <div className="container">
            <ResultTable/>
        </div>
    </div>
  )
}
