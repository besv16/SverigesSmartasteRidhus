import React, { Component } from 'react'
import {Line} from 'react-chartjs-2'

class Chart extends Component {

  state = {
    chartData: {},
    pureData: []
  }

  // componentWillMount = () => {
  //   this.initSocket();
  // }

  // Byt ut till initSocket() {}
  componentDidMount = () => {
    if (this.props.endPoint) {
      const apiUrl = 'http://159.65.94.112/api/v1/batch/' + this.props.endPoint;
      fetch(apiUrl)
      .then(results => {
        return results.json();
      }).then((responseData) => {
        const dataValues = responseData.map((temp) => {
          return temp.value;
        })
        this.setState({
          pureData: dataValues.slice(0, 8)
        })
      });
    }
}


  render() {
    this.data = (canvas) => {
      const ctx = canvas.getContext("2d");
      const gradient = ctx.createLinearGradient(10, 10, 10, 190);
      gradient.addColorStop(0, 'rgba(30, 50, 146, 0.3)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0.3)');
      return {
        labels: this.state.pureData,
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
            data: this.state.pureData,
          }
        ]
      }
    };
    return (
      <div id="testtest" className="chart">
      {this.props.endPoint &&
        <Line
        data={this.data}
        labels={this.labels}
        width={200}
        height={100}
        />
      }
      </div>
    )
  }
}

export default Chart
