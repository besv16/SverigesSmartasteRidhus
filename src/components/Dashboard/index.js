import React, { Component } from 'react'
import styled from 'styled-components'
import Card from '../Card'
import Timespan from '../Timespan'
import Header from '../Header'
import './index.css'

const DashboardContainer = styled.div`
  width: 100%;
  background-color: #f2f7fb;
  display: grid;
  grid-template-columns: 0.4% repeat(13, 5.5%) 0%;
  grid-template-rows: 72px 72px 240px 183px 183px 27px 10px;
  grid-gap: 25px 2.555%;
`;

class Dashboard extends Component {
  render() {
    return (
      <DashboardContainer>
        <Header />
        <Timespan />
        <Card line type="smallCard" title="Temperatur" colStart="2" colEnd="6" />
        <Card bubble type="smallCard" title="Luftfuktighet" colStart="6" colEnd="10" />
        <Card type="smallCard" title="Damm" colStart="10" colEnd="14" />
        <Card type="bigCard" title="Positionering på ridbanan" colStart="2" colEnd="10" />
        <Card type="smallCardUp" title="Antal ryttare på ridbanan" colStart="10" colEnd="14" />
        <Card type="smallCardDown" title="Sensorinfo" colStart="10" colEnd="14" />
      </DashboardContainer>
    )
  }
}

export default Dashboard
