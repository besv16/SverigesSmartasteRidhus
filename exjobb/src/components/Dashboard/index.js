import React, { Component } from 'react'
import Calendar from '../Calendar'
import './index.css'

class Dashboard extends Component {
  render() {
    return (

      <div className="dashboardContainerFull">

        <div className="dashboardContainer">

        <div className="headerContainer">
          <div className="header">
            <div className="heading">
              <h6 className="heading">Ridsportens innovationer</h6>
            </div>
            <Calendar />
          </div>
        </div>

        <div className="dashboard">
        </div>
        </div>

      </div>
    )
  }
}
export default Dashboard
