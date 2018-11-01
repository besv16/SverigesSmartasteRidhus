import React, { Component } from 'react'
import Calendar from '../Calendar'
import Card from '../Card'
import './index.css'

class Dashboard extends Component {
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
        <div className="dashboardHeading"><h5>Dashboard</h5></div>
          <Card type="smallCard" title="Temperatur" colStart="2" colEnd="6" endPoint="temperature" />
          <Card type="smallCard" title="Luftfuktighet" colStart="6" colEnd="10" endPoint="humidity" />
          <Card type="smallCard" title="Damm" colStart="10" colEnd="14" />
          <Card type="bigCard" title="Positionering" colStart="2" colEnd="8" />
          <Card type="bigCard" title="Antal ryttare idag" colStart="8" colEnd="14" />
        </div>
    )
  }
}
export default Dashboard
