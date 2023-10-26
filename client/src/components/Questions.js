import React, { useState } from 'react'

import data from '../database/data';

export default function Questions() {
    // define state checked
    const [checked, setChecked] = useState(undefined);

    const question = data[0]

    // this function will work when the option is selected
    function onSelect() {
        setChecked(true)
        console.log("button clicked radio");
    }

    return (
        <div className="questions">
            <h2 className="text-light">{question.question}</h2>

            <ul key={question.id}>
                {
                    question.options.map((q, i) => {
                        return (
                            <li key={i}>
                            <input type="radio" value={true} name='options' id={`q${i}-option`} onChange={onSelect} />
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
