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

    const {neighbourhoods, isLoggedIn} = this.props

    return (
      <ul>
        {neighbourhoods.map((neighbourhood) => {
                return (
                <Neighbourhood
                    key={uid(neighbourhood.neighbourhoodName)}
                    
                    isLoggedIn={isLoggedIn}
                    neighbourhoodName={neighbourhood.neighbourhoodName} />
                )
            })}
        <h2>More Coming Soon!</h2>
      </ul>
    )
  }
}



export default NeighbourhoodList
