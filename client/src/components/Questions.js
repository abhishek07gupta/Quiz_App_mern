import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useFetchQuestion } from '../hooks/FetchQuestions';
import { updateResult } from '../hooks/setResult';

export default function Questions({onChecked}) {
    // define state checked
    const [checked,setChecked]=useState(undefined);
    const {trace} = useSelector(state=>state.questions)
    const [{isLoading,apiData,serverError}]=useFetchQuestion()
    const result = useSelector(state=>state.result.result);

    const questions =useSelector(state=>state.questions.queue[state.questions.trace]);

    const dispatch=useDispatch({
        trace,checked
    });

    useEffect(()=>{
        dispatch(updateResult({trace,checked}))
    },[checked])
    
    // this function will work when the option is selected
    function onSelect(i) {
        onChecked(i);
        setChecked(i);
        dispatch(updateResult({trace,checked}))
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
                            <div className={`check ${result[trace]===i?'checked':''}`}></div>
                        </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
