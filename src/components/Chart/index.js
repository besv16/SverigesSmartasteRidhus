import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import './index.css'

class Chart extends Component {

  state = {
    pureData: [],
    currentSocketValue: null
  }

  componentDidMount = () => {
    // If we have recieved an endPoint prop to Card -> connect to the ws and http and fetch the data we want to work with
    if (this.props.endPoint) {
      // WebSocket connection
      let sock = new WebSocket("ws://159.65.94.112/ws/" + this.props.endPoint);
      sock.onmessage = (event) => {
        let JSONParse = JSON.parse(event.data);
        if (JSONParse.value !== undefined) {
          this.setState({
            currentSocketValue: [JSONParse.value]
          })
        }
        // http API connection
        const apiUrl = 'http://159.65.94.112/api/v1/batch/' + this.props.endPoint;
        fetch(apiUrl)
          .then(results => {
            return results.json();
          }).then((responseData) => {
            const dataValues = responseData.map((endPoint) => {
              return endPoint.value;
            })
            if (this.state.currentSocketValue !== null) {
              console.log("socket: " + this.state.currentSocketValue)
              let pureDataValues = dataValues.slice(this.props.amountOfData).concat(this.state.currentSocketValue)
              this.setState({
                pureData: pureDataValues
              })
            }
          });
      }
    }
  }

  render() {
    // Data that will be put into the data property of the Chart (Line)
    this.data = (canvas) => {
      const ctx = canvas.getContext("2d");
      const gradient = ctx.createLinearGradient(10, 10, 10, this.props.yAxisEndPoint);
      gradient.addColorStop(0, 'rgba(167,202,245, 0.97)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0.23)');
      return {
        labels: this.state.pureData,
        datasets: [
          {
            borderColor: "#4C84FF",
            backgroundColor: gradient,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 4.9,
            pointBorderColor: "#4C84FF",
            pointBorderWidth: 2,
            pointBackgroundColor: "#ffffff",
            data: this.state.pureData,
          }
        ]
      }
    };

    return (
      <div className="chart">
      // If we've recieved an endPoint prop -> Create the chart
        {this.props.endPoint &&
          <Line
            data={this.data}
            width={this.props.width}
            height={this.props.height}
            options={{
              defaultFontSize: 30,
              legend: {
                display: false
              },
              scales: {
                xAxes: [{
                  gridLines: {
                    color: '#F6F6F6'
                  },
                  ticks: {
                    display: false
                  }
                }],
                yAxes: [{
                  gridLines: {
                    color: '#F6F6F6'
                  },
                  ticks: {
                    max: 49,
                    min: 48
                  }
                }],
              },
            }}
          />
        }
      </div>
    )
  }
}

export default Chart
