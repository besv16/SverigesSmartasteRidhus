import React, { Component } from 'react'
import Chart from '../Chart'
import './index.css'

class Timespan extends Component {

  componentWillMount() {

  }

  render() {

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
      </div>
    )
  }

}

export default Timespan
