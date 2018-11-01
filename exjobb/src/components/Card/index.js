import React, { Component } from 'react'
import './index.css'

class Card extends Component {

  state = {
    data: [],
  }

  componentDidMount = () => {
    const apiUrl = 'http://159.65.94.112/api/v1/batch/' + this.props.endPoint;

    fetch(apiUrl)
      .then(results => {
        return results.json();
      }).then((data) => {
        let temperatures = data.map((temperature) => {
          return (
            <div key={temperature.results}>
              <p>{temperature.value}</p>
            </div>
          )
        })
        this.setState({
          data: temperatures,
        })
      })

    // fetch(apiUrl)
    //   .then(data => data.json())
    //   .then((json) => {
    //     this.setState({
    //       data: json,
    //     })
    //   })


  }

  render() {
    return (
    <div className={this.props.type} style={{ gridColumnStart: this.props.colStart, gridColumnEnd: this.props.colEnd, gridRowStart: this.props.rowStart, gridRowEnd: this.props.rowEnd }}>
    <div className="headline">
    <p>{this.props.title}</p>
    <div className="open"></div>
    </div>
    {this.state.data}
    </div>
  )}

}

export default Card
