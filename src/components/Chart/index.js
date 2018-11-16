import React, { Component } from 'react'
import {Line} from 'react-chartjs-2'

class Chart extends Component {

  state = {
    pureData: [],
    temperatureData: [],
  }

  componentDidMount = () => {
    if (this.props.endPoint) {
      var sock = new WebSocket("ws://159.65.94.112/ws/" + this.props.endPoint);
      sock.onmessage = (event) => {
          var JSONParse = JSON.parse(event.data);

          if (JSONParse.value !== undefined) {

            const loopTroughNumbers = Object.values(JSONParse);

            var testing = [loopTroughNumbers[3]];
            var newValue = this.state.temperatureData;
            newValue = newValue.concat([testing])

            console.log(newValue)

            if (newValue == newValue) {
              console.log("newValue == newValue")
            }

            this.setState({
              temperatureData: newValue
            })

          }
      }
    }

    // if (this.props.endPoint) {
    //   const apiUrl = 'http://159.65.94.112/api/v1/batch/' + this.props.endPoint;
    //   fetch(apiUrl)
    //   .then(results => {
    //     return results.json();
    //   }).then((responseData) => {
    //     const dataValues = responseData.map((temp) => {
    //       return temp.value;
    //     })
    //     this.setState({
    //       pureData: dataValues.slice(0, 5)
    //     })
    //   });
    // }
}

  // kolla om statet är satt

  render() {

    //Vincents tips
    // if (this.state.temperatureData.length <= 0) {
    //   return "";
    // }

      // this.data ÄR SAMMA SOM chartData = {......}
      this.data = (canvas) => {
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(10, 10, 10, 190);
        gradient.addColorStop(0, 'rgba(76, 132, 255, 0.97)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.23)');
        return {
          labels: this.state.temperatureData,
          datasets: [
            {
              label: "Temperatur",
              borderColor: "#4C84FF",
              backgroundColor: gradient,
              borderWidth: 2,
              pointRadius: 0,
              pointHoverRadius: 4.9,
              pointBorderColor: "rgba(22,60,109,0.2)",
              pointBorderWidth: 11.5,
              pointBackgroundColor: "#1E3292",
              data: this.state.temperatureData,
            }
          ]
        }
      };

      return (
        <div className="chart">
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
