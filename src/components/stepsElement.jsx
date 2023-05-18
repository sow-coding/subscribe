import React from 'react'

export default function StepsElement(props) {

  return (
    <div className='stepsElement'>     
        <div className="ovalnb">{props.number}</div>
        <div className="stepsElementText">
            <p>Step {props.number}</p>
            <h1>{props.what}</h1>
        </div>
    </div>
  )
}
