import React, { Component } from 'react'
import {Line} from 'react-chartjs-2'

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
          const dataValues = responseData.map((temp) => {
            return temp.value;
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
          labels: this.state.pureData,
          datasets: [
            {
              label: "Luftfuktighet",
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
