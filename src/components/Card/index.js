import React, { Component } from 'react'
import Chart from '../Chart'
import './index.css'

class Card extends Component {

  state = {
    fullScreenBool: false
  }

  fullScreen(e) {
      this.setState({
          fullScreenBool: e
      })
  }

  render() {

    // HÄR KOLLAR VI OM IKONEN FÖR HELSKÄRMSVYN
    //BLIVIT KLICKAD PÅ ELLER EJ OCH RENDERAR OLIKA
    //VYER BEROENDE PÅ DETTA
    if (this.state.fullScreenBool === false) {
      return (
        <div className={this.props.type} style={{ gridColumnStart: this.props.colStart, gridColumnEnd: this.props.colEnd, gridRowStart: this.props.rowStart, gridRowEnd: this.props.rowEnd }}>
          <div className="headline">
            <p>{this.props.title}</p>
            <div className="open">
              <img src="/icons/fullscreen_icon.svg" alt="ikon för fullskärm" onClick={(e) => this.fullScreen(true)} />
            </div>
          </div>
          <Chart endPoint={this.props.endPoint} />
        </div>
      )
    }

    if (this.state.fullScreenBool === true) {
      return (
        <div className="fullScreen">
          <div className="headline">
            <p>{this.props.title}</p>
          </div>
          <div className="close" onClick={(e) => this.fullScreen(false)}>
            <p>Stäng</p>
          </div>
          <Chart endPoint={this.props.endPoint} />
        </div>
      )
    }

  }

}

export default Card
