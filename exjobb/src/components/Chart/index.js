import React, { Component } from 'react'
import {Line} from 'react-chartjs-2'

class Chart extends Component {

  state = {
    chartData: this.props.chartData
  }

  static defaultProps = {
    displayGridlines: false,
  }

  render() {
    return (
      <div className="chart">
        <Line
          data={this.props.chartData}
          width={200}
          height={100}
          options={{
            scales: {
              xAxes: [{
                  gridLines: {
                      drawOnChartArea: false
                  }
              }],
              yAxes: [{
                  gridLines: {
                      drawOnChartArea: false
                  }
              }]
            }
          }}
          />
      </div>
    )
  }
}

export default Chart
