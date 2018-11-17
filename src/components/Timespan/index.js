import React, { Component } from 'react'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/material_green.css'
import './index.css'


class Timespan extends Component {

  state = {
    date: new Date(),
    sliderState: 'today'
  }

  dateFunction(e) {
    this.setState({
      sliderState: e
    })
  }

  render() {
    const { date } = this.state;

    return (
      <div className="timelineContainer">
        <div className="timeline">
          <div className="chooseTime">
            <div className={"option " + (this.state.sliderState === 'today' ? 'active' : 'inactive')} onClick={(e) => this.dateFunction('today')}>
              <p>Idag</p>
            </div>
            <div className={"option " + (this.state.sliderState === 'period' ? 'active' : 'inactive')} onClick={(e) => this.dateFunction('period')}>
              <p>Välj period</p>
            </div>
          </div>
          <div className="calendarContainer">
            <Flatpickr className="flatpickr" data-enable-time value={date} onChange={date => { this.setState({ date }) }} />
            <img className="arrow" src="/icons/arrow_forward_timeline.svg" alt="pil mellan tid-datumval" />
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
