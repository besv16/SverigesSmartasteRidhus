import React, { Component } from 'react'
import Chart from '../Chart'
import './index.css'

class Card extends Component {

  state = {
    htmlData: [],
    pureData: [],
    chartData: {}
  }

  componentDidMount = () => {
    const apiUrl = 'http://159.65.94.112/api/v1/batch/' + this.props.endPoint;

    fetch(apiUrl)
      .then(results => {
        return results.json();
      }).then((data) => {

        const dataValue = data.map((temp) => {
          return temp.value;
        })

        let temperatures = data.map((temperature) => {
          return (
            <div key={temperature.results}>
              <p>{temperature.value}</p>
            </div>
          )
        })

        this.setState({
          htmlData: temperatures,
          pureData: dataValue,
        })
        this.setState({
          chartData: {
            labels: this.state.pureData,
            datasets: [
              {
                label: 'Temperature',
                data: this.state.pureData
              }
            ]
          }
        })
      })
  }

  render() {
    return (
      <div className={this.props.type} style={{ gridColumnStart: this.props.colStart, gridColumnEnd: this.props.colEnd, gridRowStart: this.props.rowStart, gridRowEnd: this.props.rowEnd }}>
        <div className="headline">
          <p>{this.props.title}</p>
        <div className="open"></div>
        </div>
        {this.state.pureData}
        <Chart chartData={this.state.chartData} />
      </div>
  )}

}

export default Card
