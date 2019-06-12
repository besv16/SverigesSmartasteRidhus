import React, { Component } from 'react'
import styled from 'styled-components'
import Header from '../Header'

const DashboardContainer = styled.div`
  width: 100%;
  background-color: #f2f7fb;
  display: grid;
  grid-template-columns: 0.4% repeat(13, 5.5%) 0%;
  grid-template-rows: 72px 72px 240px 183px 183px 27px 10px;
  grid-gap: 25px 2.555%;
`;

class About extends Component {
  render() {
    return (
      <DashboardContainer>
        <Header />
      </DashboardContainer>
    )
  }
}
export default About
