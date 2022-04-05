import React, { Component } from 'react'
import styled from 'styled-components'
import NeighbourhoodList from '../components/NeighbourhoodList'
import SidebarNonHome from '../components/SidebarNonHome'
import UserSidebar from '../components/UserSidebar'


export default class NeighbourhoodListPage extends Component {
  
  render() {
    const {app} = this.props
    const neighbourhoodsData = app.state.neighbourhoodsData;
    const user = app.state.currentUser
    return (
        <div>
            {user ? <UserSidebar app = {app} showMenu={true}/> : 
            <SidebarNonHome showMenu={true} />}
            <NeighbourhoodContainer> 
                <h1>Select a neighbourhood</h1>
                <NeighbourhoodList neighbourhoods={neighbourhoodsData}/>
            </NeighbourhoodContainer> 
        </div>
    )
  }

}


const NeighbourhoodContainer = styled.div`
    float: left;
    position: relative;
    margin: 5% 0 0 10%;
    margin-left: 320px;
    
    h1 {
        font-size: 42px;
        font-weight: 500;
        text-decoration: underline;
        margin-bottom: 25px;
    }

`