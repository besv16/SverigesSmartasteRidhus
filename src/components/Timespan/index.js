import React, { Component } from 'react'
import Chart from '../Chart'
import './index.css'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/material_green.css'


class Timespan extends Component {

  state = {
    date: new Date()
  }

  render() {
    const { date } = this.state;

    return (
      <div className="timelineContainer">
        <div className="timeline">
          <div className="chooseTime">
            <div className="option">
              <p>Idag</p>
            </div>
            <div className="option">
              <p>Välj period</p>
            </div>
          </div>
          <div className="calendarContainer">
            <Flatpickr className="flatpickr" data-enable-time value={date} onChange={date => { this.setState({ date }) }} />
            <Flatpickr className="flatpickr" data-enable-time value={date} onChange={date => { this.setState({ date }) }} />
          </div>
          <div className="updateContainer">
            <div className="update">
              <p>Uppdatera</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Timespan
