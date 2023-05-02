import React from 'react'

function CardPlan(props) {
    return (
      <div className="cardPlan">
        {props.source}
        <h4>{props.title}</h4>
        <p>${props.price}/mo</p>
      </div>
    )
  }

export default CardPlan
