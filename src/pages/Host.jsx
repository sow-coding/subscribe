import React from 'react'
import Steps from '../components/steps';
import FormInfos from '../components/formInfos';
import NextBtn from '../components/nextBtn'
import { Link } from 'react-router-dom';

function Host() {
    return (
        <div className="personalInfo">
        <Steps />
        <div className="askInfos">
          <div className="askInfosText">
          <h1>Personal info</h1>
          <p>Please provide your name, email address, and phone number.</p>
          </div>
          <FormInfos />
          <Link to="/plans" className='nextBtnLink'><NextBtn /></Link>
        </div>
      </div>
    )
  }

export default Host
