import React from 'react'
import StepsElement from './stepsElement'

function Steps() {
    return (
      <div className='steps'>
        <div className="steps-elements">
            <StepsElement number="1" what="YOUR INFO"/>
            <StepsElement number="2" what="SELECT PLAN"/>
            <StepsElement number="3" what="ADD-ONS"/>
            <StepsElement number="4" what="SUMMARY"/>
        </div>
      </div>
    )
  }

export default Steps
