import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useFetchQuestion } from '../hooks/FetchQuestions';


export default function Questions({onChecked}) {
    // define state checked
    const [{isLoading,apiData,serverError}]=useFetchQuestion()

    const questions =useSelector(state=>state.questions.queue[state.questions.trace]);
    useEffect(()=>{
        // console.log(questions);
    })

    useEffect(()=>{
        console.log(isLoading)
        console.log(apiData)
        console.log(serverError)
    })

    // this function will work when the option is selected
    function onSelect(i) {
        onChecked(i);
    }

    if(isLoading)return <h3 className='text-light'>is loading</h3>
    if(serverError) return <h3 className='text-light'>{serverError.message || "Unknown Error"}</h3>
    return (
        <div className="questions">
            <h2 className="text-light">{questions?.question}</h2>

            <ul key={questions?.id}>
                {
                    questions?.options.map((q, i) => {
                        return (
                            <li key={i}>
                            <input type="radio" value={true} name='options' id={`q${i}-option`} onChange={()=>onSelect(i)} />
                            <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                            <div className="check checked"></div>
                        </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
