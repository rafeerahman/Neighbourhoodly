import React, { Component } from 'react'
import styled from 'styled-components'
import LaunchIcon from '@mui/icons-material/Launch';
import { Link, Route } from 'react-router-dom';
import NeighbourhoodPage from '../pages/NeighbourhoodPage';

/* This component is for the links to a neighbourhood, found in /Neighbourhoods */
export class Neighbourhood extends Component {
  render() {
    const {neighbourhoodName} = this.props 

    return (
      <NeighbourhoodStyled>
          <Link to={`/${neighbourhoodName}`}>
            <a>{neighbourhoodName}</a> 
            <LaunchIcon/>
          </Link>
       </NeighbourhoodStyled>
    )
  }
}

const NeighbourhoodStyled = styled.li`
    list-style: none;
    margin-bottom: 48px;
    a {
        font-size: 36px;
        margin-right: 20px;
    }
`

export default Neighbourhood

