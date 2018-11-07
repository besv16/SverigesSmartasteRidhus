import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2'

class Chart extends Component {

  state = {
    chartData: this.props.chartData
  }

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.props.chartData}
          width={200}
          height={100}
          />
      </div>
    )
  }
}

export default Chart
