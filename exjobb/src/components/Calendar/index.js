import React, { Component } from 'react'
import './index.css'

class Calendar extends Component {
  render() {
    return (
      <div className="calendarContainer">
        <p>Välj att visa data mellan:</p>
        <div className="dateTimeContainer"></div>
        <div className="dateTimeContainer"></div>
      </div>
    )
  }
}
export default Calendar
