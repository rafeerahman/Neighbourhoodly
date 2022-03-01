import React, { Component } from 'react'
import Neighbourhood from './Neighbourhood'
import { uid } from "react-uid";
import styled from 'styled-components';
import NeighbourhoodPage from '../pages/NeighbourhoodPage';
import LogIn from '../LogIn'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from '../Register';


export class NeighbourhoodList extends Component {
  render() {

    const {neighbourhoods} = this.props

    return (
      <ul>
        {neighbourhoods.map((neighbourhood) => {
                return (
                <Neighbourhood
                    key={uid(neighbourhood)}
                    neighbourhoodName={neighbourhood.title} />
                )
            })}
      </ul>
    )
  }
}



export default NeighbourhoodList
