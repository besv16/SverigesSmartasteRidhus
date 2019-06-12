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
    if (this.state.fullScreenBool === false) {
      return (
        <div className={this.props.type} style={{ gridColumnStart: this.props.colStart, gridColumnEnd: this.props.colEnd, gridRowStart: this.props.rowStart, gridRowEnd: this.props.rowEnd }}>
          <div className="headline">
            <p>{this.props.title}</p>
            <div className="open">
              <img src="/icons/fullscreen_icon.svg" alt="ikon för fullskärm" onClick={(e) => this.fullScreen(true)} />
            </div>
          </div>
          {this.props.line &&
            <Chart line width={80} height={33} amountOfData={-4} yAxisEndPoint={190} endPoint={this.props.endPoint} />
          }
          {this.props.bubble &&
            <Chart bubble width={80} height={33} amountOfData={-4} yAxisEndPoint={190} endPoint={this.props.endPoint} />
          }          
        </div>
      )
    }

    if (this.state.fullScreenBool === true) {
      return (
          <div className="fullScreen">
            <div className="graphSection">
              <div className="headline">
                <p>{this.props.title}</p>
              </div>
              {this.props.line &&
                <Chart width={80} height={33} amountOfData={-4} yAxisEndPoint={190} endPoint={this.props.endPoint} line />
              }
              {this.props.bubble &&
                <Chart width={80} height={33} amountOfData={-4} yAxisEndPoint={190} endPoint={this.props.endPoint} bubble />
              }
            </div>
            <div className="optionsSection">
              <div className="close">
                <img src="/icons/close.svg" alt="ikon för att stänga fullskärm" onClick={(e) => this.fullScreen(false)} />
              </div>
            </div>
          </div>
       )
    }
   }
}

export default Card
