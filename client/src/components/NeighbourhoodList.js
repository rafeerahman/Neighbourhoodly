import React, { Component } from 'react'
import Neighbourhood from './Neighbourhood'
import { uid } from "react-uid";
import styled from 'styled-components';
import NeighbourhoodPage from '../pages/NeighbourhoodPage';
import LogIn from '../pages/homePages/LogIn'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from '../pages/homePages/Register';


export class NeighbourhoodList extends Component {
  render() {

    const {neighbourhoods} = this.props

    return (
      <ul>
        {neighbourhoods.map((neighbourhood) => {
                return (
                <Neighbourhood
                    key={uid(neighbourhood.neighbourhoodName)}
                    
                    neighbourhoodName={neighbourhood.neighbourhoodName} />
                )
            })}
      </ul>
    )
  }
}



export default NeighbourhoodList
