import React from 'react'
import Steps from '../components/steps'
import { Link } from 'react-router-dom'
import ConfirmBtn from '../components/confirmBtn'

function Finish() {
    return (
      <div className="finish">
        <Steps />
        <div className="finishResult">
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming.</p>
            <div className="result">
                <div className="result-top">
                    <div className="result-top-choice">
                        <h3>Arcade "Monthly"</h3>
                        <Link to="/plans" className='change'>Change</Link>
                    </div>
                    <p>$9/mo</p>
                </div>
                <div className="row"></div>
                <div className="result-mid">
                    <p>Onlive service</p>
                    <h6>$1/mo</h6>
                </div>
                <div className="result-bottom">
                    <p>Larger storage</p>
                    <h6>$2/mo</h6>
                </div>
                <div className="total">
                    <p>Total "Per month"</p>
                    <h5>$12/mo</h5>
                </div>
            </div>
            <div className="buttons3">
            <Link to="/addons" className='goBack3'>Go back</Link>
                <Link to="/thankyou"><ConfirmBtn /></Link>  
            </div>
        </div>
      </div>
    )
  }
  

export default Finish