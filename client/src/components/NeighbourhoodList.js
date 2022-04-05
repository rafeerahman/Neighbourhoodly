import React, { Component } from 'react'
import Neighbourhood from './Neighbourhood'
import { uid } from "react-uid";


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
