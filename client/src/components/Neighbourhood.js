import React, { Component } from 'react'
import styled from 'styled-components'
import LaunchIcon from '@mui/icons-material/Launch';
import { Link } from 'react-router-dom';

/* This component is for the links to a neighbourhood, found in /Neighbourhoods */
export class Neighbourhood extends Component {
  render() {
    const {neighbourhoodName} = this.props 
    
    return (
      <NeighbourhoodStyled>
          <Link to={`/${neighbourhoodName.replaceAll(' ', '').replaceAll('(', '').replaceAll(')', '')}`}>
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
        font-size: 28px;
        margin-right: 20px;
    }
`

export default Neighbourhood

