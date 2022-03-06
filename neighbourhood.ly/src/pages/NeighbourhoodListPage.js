import React, { Component } from 'react'
import styled from 'styled-components'
import Hamburger from '../components/Hamburger'
import NeighbourhoodList from '../components/NeighbourhoodList'
import Sidebar from '../components/Sidebar'


export default class NeighbourhoodListPage extends Component {

  render() {
    const {data, isLoggedIn, isAdmin} = this.props

    return (
        <div>
            {/* <Hamburger isLoggedIn={isLoggedIn}/> */}
            <Sidebar className="sidebar" 
                SignInType={isLoggedIn() ? "MainMenu" : "LogIn"}
                handleAdmin={isAdmin}
                tab1="About Us"
                tab2="Neighbourhoods"
                tab3="Rankings"
                tab4="Profile"
                tab5="Admin Dashboard"
                tab6="Home"
                showMenu={true}/>
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
    margin-left: 320px;
    
    h1 {
        font-size: 36px;
        font-weight: 500;
        text-decoration: underline;
        margin-bottom: 25px;
    }

`