import React, { Component } from 'react'
import Chart from '../Chart'
import './index.css'

class Card extends Component {

  state = {
    htmlData: [],
    chartData: {}
  }

  componentDidMount = () => {

  }

  render() {
    return (
      <div className={this.props.type} style={{ gridColumnStart: this.props.colStart, gridColumnEnd: this.props.colEnd, gridRowStart: this.props.rowStart, gridRowEnd: this.props.rowEnd }}>
        <div className="headline">
          <p>{this.props.title}</p>
        <div className="open"></div>
        </div>
        <Chart chartData={this.state.chartData} />
      </div>
  )}

}

export default Card
