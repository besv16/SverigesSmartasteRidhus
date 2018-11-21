import React, { Component } from 'react'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/material_green.css'
import './index.css'


class Timespan extends Component {

  state = {
    date: new Date(),
    date2: new Date(),
    sliderState: 'today',
    updateButtonState: ''
  }

  dateFunction(e) {
    this.setState({
      sliderState: e
    })
  }

  updateFunction(e) {
    this.setState({
      updateButtonState: e
    })
  }

  render() {

    const { date } = this.state;
    const { date2 } = this.state;

    return (
      <div className="timelineContainer">
        <div className="timeline">
          <div className="chooseTime">
            // If the sliderState is 'today' -> the div below will get the className 'active' added, otherwise 'inactive'
            <div className={"option " + (this.state.sliderState === 'today' ? 'active' : 'inactive')} onClick={(e) => this.dateFunction('today')}>
              <p>Idag</p>
            </div>
            // If the sliderState is 'period' -> the div below will get the className 'active' added, otherwise 'inactive'
            <div className={"option " + (this.state.sliderState === 'period' ? 'active' : 'inactive')} onClick={(e) => this.dateFunction('period')}>
              <p>Välj period</p>
            </div>
          </div>
          <div className="calendarContainer">
            // If the sliderState is 'period' -> the div below will get the className 'calendarOn' added, otherwise 'calendarOff'
            <Flatpickr className={"flatpickr " + (this.state.sliderState === 'period' ? 'calendarOn' : 'calendarOff')}
              data-enable-time value={date}
              options={{ dateFormat: "d M Y   H:i" }}
              onChange={date => { this.setState({ date }) }}
            />
            // If the sliderState is 'period' -> the div below will get the className 'show' added, otherwise nothing ('')
            <img className={"arrow " + (this.state.sliderState === 'period' ? 'show' : '')} src="/icons/arrow_forward_timeline.svg" alt="pil mellan tid-datumval" />

            // If the sliderState is 'period' -> the div below will get the className 'calendarOn' added, otherwise calendarOff
            <Flatpickr className={"flatpickr " + (this.state.sliderState === 'period' ? 'calendarOn' : 'calendarOff')}
              data-enable-time value={date2}
              options={{ dateFormat: "d M Y    H:i" }}
              onChange={date2 => { this.setState({ date2 }) }}
            />
          </div>
          <div className="updateContainer">
            // If the updateButtonState is 'update' -> the div below will get the className 'show' added, otherwise hide
            <div className={"update " + (this.state.updateButtonState === 'update' ? 'show' : 'hide')} onClick={(e) => this.updateFunction('update')}>
              <p>Uppdatera</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Timespan
