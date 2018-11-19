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

  //loggar det state som uppdaterades
  componentDidUpdate = () => {
    if (this.state.sliderState === 'today') {
      console.log("today");
    }
    else {
      console.log("period");
    }
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
            <div className={"option " + (this.state.sliderState === 'today' ? 'active' : 'inactive')} onClick={(e) => this.dateFunction('today')}>
              <p>Idag</p>
            </div>
            <div className={"option " + (this.state.sliderState === 'period' ? 'active' : 'inactive')} onClick={(e) => this.dateFunction('period')}>
              <p>Välj period</p>
            </div>
          </div>
          <div className="calendarContainer">
            <Flatpickr className={"flatpickr " + (this.state.sliderState === 'period' ? 'calendarOn' : 'calendarOff')}
              data-enable-time value={date}
              options={{ dateFormat: "d M Y   H:i" }}
              onChange={date => { this.setState({ date }) }}
            />
            <img className={"arrow " + (this.state.sliderState === 'period' ? 'show' : '')} src="/icons/arrow_forward_timeline.svg" alt="pil mellan tid-datumval" />

            <Flatpickr className={"flatpickr " + (this.state.sliderState === 'period' ? 'calendarOn' : 'calendarOff')}
              data-enable-time value={date2}
              options={{ dateFormat: "d M Y    H:i" }}
              onChange={date2 => { this.setState({ date2 }) }}
            />
          </div>
          <div className="updateContainer">
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
