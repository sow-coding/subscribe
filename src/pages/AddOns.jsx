import React from 'react'
import Steps from '../components/steps'
import Checkbox from '../components/checkbox'
import { Link } from 'react-router-dom'
import NextBtn from "../components/nextBtn"

function AddOns() {
    return (
      <div className="addOns">
        <Steps />
        <div className="ons">
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
            <div className="checkboxs">
                <Checkbox what="Online service" description="Access to multiplayer games" price="1"/>
                <Checkbox what="Larger storage" description="Extra 1TB of cloud save" price="2"/>
                <Checkbox what="Customizable profil" description="Custom theme on your profil" price="2"/>
            </div>
            <div className="buttons2">
            <Link to="/plans" className='goBack2'>Go back</Link>
                    <Link to="/finish"><NextBtn /></Link>  
            </div>
        </div>
      </div>
    )
  }

export default AddOns
