import React from 'react'

function FormInfos() {
    return (
      <div className='infosInput'>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder='e.g. Stephen King' name='name'/>
        <label htmlFor="email">Email Adress</label>
        <input type="email" placeholder='e.g. stephenking@lorem.com' name='email'/>
        <label htmlFor="phonenumber">Phone Number</label>
        <input type="text" placeholder='e.g. +1 234 567 890' name='phonenumber'/>
      </div>
    )
  }

export default FormInfos
