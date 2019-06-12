import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import socketCluster from 'socketcluster-client'
import './index.css'

class Chart extends Component {

  state = {
    randomData: [],
    // currentSocketValue: null
  }
  
  componentDidMount = () => {
    const options = {
      port: 8000
    };

    let socket = socketCluster.create(options);
  
    socket.on('random', (data) => {
      let joined = this.state.randomData.concat(data.number);
      this.setState({
        randomData: joined
      })
    });
      
      // If we've recieved an endPoint prop to Card -> 1. connect to the socket and 2. http fetch
      // WebSocket connection
      // let sock = new WebSocket("ws://159.65.94.112/ws/" + this.props.endPoint);
      // sock.onmessage = (event) => {
      //   socket data value
      //   let JSONParse = JSON.parse(event.data);
      //   if (JSONParse.value !== undefined) {
      //     this.setState({
      //       currentSocketValue: [JSONParse.value]
      //     })
      //   }
      //   http API connection
      //   const apiUrl = 'http://159.65.94.112/api/v1/batch/' + this.props.endPoint;
      //   fetch(apiUrl)
      //     .then(results => {
      //       return results.json();
      //     }).then((responseData) => {
      //       const dataValues = responseData.map((endPoint) => {
      //         return endPoint.value;
      //       })
      //       if (this.state.currentSocketValue !== null) {
      //         let pureDataValues = dataValues.slice(this.props.amountOfData).concat(this.state.currentSocketValue)
      //         this.setState({
      //           pureData: pureDataValues
      //         })
      //       }
      //     });
      // }
    }

  render() {
    let slicedRandomDataArray = this.state.randomData.slice(this.props.amountOfData);
    this.data = (canvas) => {
      const ctx = canvas.getContext("2d");
      const gradient = ctx.createLinearGradient(10, 10, 10, this.props.yAxisEndPoint);
      gradient.addColorStop(0, 'rgba(167,202,245, 0.97)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0.23)');
      return {
        labels: slicedRandomDataArray,
        datasets: [
          {
            borderColor: "#4C84FF",
            backgroundColor: gradient,
            borderWidth: 2,
            pointRadius: 2,
            pointHoverRadius: 4.9,
            pointBorderColor: "#4C84FF",
            pointBorderWidth: 2,
            pointBackgroundColor: "#ffffff",
            data: slicedRandomDataArray,
          }
        ]
      }
    };

    return (
      <div className="chart">
        {this.props.line &&
          <Line
            data={this.data}
            width={this.props.width}
            height={this.props.height}
            options={{
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,              
              defaultFontSize: 30,
              legend: {
                display: false
              },
              scales: {
                xAxes: [{
                  gridLines: {
                    color: '#FFF'
                  },
                  ticks: {
                    display: false
                  }
                }],
                yAxes: [{
                  gridLines: {
                    color: '#FFF'
                  },
                  ticks: {
                    max: 10,
                    min: 0,
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
