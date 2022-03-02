import React, { Component } from 'react'
import styled from 'styled-components'
import Hamburger from '../components/Hamburger'
import NeighbourhoodList from '../components/NeighbourhoodList'


export default class NeighbourhoodListPage extends Component {

  render() {
    const {data} = this.props

    return (
        <div>
            <Hamburger/>
            <NeighbourhoodContainer> 
                <h1>Select a neighbourhood</h1>
                <NeighbourhoodList neighbourhoods={data}/>
            </NeighbourhoodContainer> 
        </div>
    )
  }
}


const NeighbourhoodContainer = styled.div`
    float: left;
    position: relative;
    margin: 5% 0 0 10%;
    
    h1 {
        font-size: 36px;
        font-weight: 500;
        text-decoration: underline;
        margin-bottom: 25px;
    }

`