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
      <div className="first">
        <div className="second">
          <div className="chooseToday">
            <div className="radio"></div><span><p>Idag</p></span>
          </div>
          <div className="choosePeriod">
            <div className="radio"></div><span><p>Välj period</p></span>
          </div>
        </div>
        <Flatpickr data-enable-time value={date} onChange={date => { this.setState({ date }) }} />
        <Flatpickr data-enable-time value={date} onChange={date => { this.setState({ date }) }} />
      </div>
    )
  }

}

export default Timespan
