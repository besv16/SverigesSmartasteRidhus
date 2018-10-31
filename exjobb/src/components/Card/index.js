import React from 'react'
import './index.css'

const Card = props => (
  <div className={props.type} style={{ gridColumnStart: props.colStart, gridColumnEnd: props.colEnd, gridRowStart: props.rowStart, gridRowEnd: props.rowEnd }}>
    <div className="headline">
      <p>{props.title}</p>
      <div className="open"></div>
    </div>
  </div>
);

export default Card
