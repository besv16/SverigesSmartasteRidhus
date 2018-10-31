import React, { Component } from 'react'
import Calendar from '../Calendar'
import Card from '../Card'
// import './index.css'

class Api extends Component {
  render() {
    return (
      <div className="dashboardContainer">
        <div className="headerBackground"></div>
        <div className="headerContainer">
          <div className="header">
            <div className="heading">
              <h5 className="heading">Ridsportens innovationer</h5>
            </div>
          </div>
        </div>
        <div className="dashboardHeading"><h5>Om vårt API</h5></div>
      </div>
    )
  }
}
export default Api
