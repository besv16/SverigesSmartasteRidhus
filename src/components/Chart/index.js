import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import './index.css'

class Chart extends Component {

  state = {
    pureData: [],
    //använd denna att pusha in värden ifrån http
    temperatureData: [],
    //använd denna att pusha in värdet ifrån ws
    currentSocketValue: null
  }

  componentDidMount = () => {
    if (this.props.endPoint) {

      let sock = new WebSocket("ws://159.65.94.112/ws/" + this.props.endPoint);

      sock.onmessage = (event) => {

        let JSONParse = JSON.parse(event.data);

        // if (JSONParse.value == this.state.currentSocketValue) {
        //   console.log("Ingen förändring, " + JSONParse.value + " - " + this.state.currentSocketValue)
        // }
        //
        // if (JSONParse.value != this.state.currentSocketValue) {
        //   console.log("FÖRÄNDRING!!!, " + JSONParse.value + " - " + this.state.currentSocketValue)
        // }

        if (JSONParse.value !== undefined) {
          this.setState({
            currentSocketValue: [JSONParse.value]
          })
        }

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
              let testingTesting = dataValues.slice(-4).concat(this.state.currentSocketValue)
              this.setState({
                pureData: testingTesting
              })
            }
          });
      }
    }
  }

  render() {
    this.data = (canvas) => {
      const ctx = canvas.getContext("2d");
      const gradient = ctx.createLinearGradient(10, 10, 10, 190);
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
            pointBorderColor: "rgba(22,60,109,0.2)",
            pointBorderWidth: 11.5,
            pointBackgroundColor: "#1E3292",
            data: this.state.pureData,
          }
        ]
      }
    };

    return (
      <div className="chart">
        {this.props.endPoint &&
          <Line
            data={this.data}
            width={80}
            height={33}
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
