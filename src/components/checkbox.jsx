import React from 'react'

export default function Checkbox(props) {
  return (
    <div className='checkBox'>
        <div className="checkBoxLeft">
            <input type="checkbox" />
            <div className="checkBoxText">
                <h3>{props.what}</h3>
                <p>{props.description}</p>
            </div>
        </div>
        <div className="checkBoxRight">
            +${props.price}/mo
        </div>
    </div>
  )
}
