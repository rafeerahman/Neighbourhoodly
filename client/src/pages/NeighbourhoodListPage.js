import React, { Component } from 'react'
import styled from 'styled-components'
import Hamburger from '../components/Hamburger'
import NeighbourhoodList from '../components/NeighbourhoodList'
import Sidebar from '../components/Sidebar'
import SidebarNonHome from '../components/SidebarNonHome'
import UserSidebar from '../components/UserSidebar'


export default class NeighbourhoodListPage extends Component {

  render() {
    const {app, data, isLoggedIn} = this.props
    const neighbourhoodsData = app.state.neighbourhoodsData;
    const user = app.state.currentUser
    return (
        <div>
            {user ? <UserSidebar app = {app} showMenu={true}/> : 
            <SidebarNonHome showMenu={true} />}
            {/* <Sidebar className="sidebar" 
                SignInType={isLoggedIn() ? "MainMenu" : "LogIn"}
                isAdmin={this.props.isAdmin}
                tab1="About Us"
                tab2="Neighbourhoods"
                tab3="Rankings"
                tab4="Profile"
                tab5="Admin Dashboard"
                tab6="Home"
                showMenu={true}/> */}
            {/* <Hamburger
                SignInType={isLoggedIn() ? "MainMenu" : "LogIn"}
                isAdmin={this.props.isAdmin}
            /> */}

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