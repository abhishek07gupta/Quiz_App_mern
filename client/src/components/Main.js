import React, { useRef } from 'react'
import { Link } from 'react-router-dom';

import '../styles/Main.css'

export default function Main() {
    // creating the username ref 
    const inputRef=useRef(null);

  return (
    <div className="container">
        <h1 className="title text-light">Quiz Application</h1>
        <ol>
            <li>There are Total 10 Questions </li>
            <li>Each question carries 1 point</li>
            <li>Select the correct option from the 4 options</li>
        </ol>
        <form id="form">
            <input ref={inputRef} className='userid' type="text" placeholder='UserName' />
        </form>
        <div className="start">
            <Link className='btn' to={'quiz'}>Start Quiz</Link>
        </div>
    </div>
  )
}
