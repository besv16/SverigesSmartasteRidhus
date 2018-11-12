import React, { Component } from 'react'
import {Line} from 'react-chartjs-2'

class Chart extends Component {

  state = {
    chartData: {},
  }

  componentDidMount = () => {

    const apiUrl = 'http://159.65.94.112/api/v1/batch/' + this.props.endPoint;

    fetch(apiUrl)
      .then(results => {
        return results.json();
      }).then((responseData) => {
        const dataValues = responseData.map((temp) => {
          return temp.value;
        })
      });

} // componentDidMount


  render() {
    this.data = (canvas) => {
      const ctx = canvas.getContext("2d");
      const gradient = ctx.createLinearGradient(10, 10, 10, 185);
      gradient.addColorStop(0, '#38208E', 1);
      gradient.addColorStop(.5, 'rgba(184,81,164, 0.53)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 1)');
      ctx.fillStyle = gradient;
      return {
        labels: ['d', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
        datasets: [
          {
            label: "Temperatur",
            borderColor: "#1E3292",
            backgroundColor: gradient,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 4.9,
            pointBorderColor: "rgba(22,60,109,0.2)",
            pointBorderWidth: 11.5,
            pointBackgroundColor: "#1E3292",
            data: ['2', '2', '2', '2', '2', '2', '2', '2', '2'],
          }
        ]
      }
    };
    return (
      <div id="testtest" className="chart">
        <Line
          data={this.data}
          labels={this.labels}
          width={200}
          height={100}
          />
      </div>
    )
  }
}

export default Chart
