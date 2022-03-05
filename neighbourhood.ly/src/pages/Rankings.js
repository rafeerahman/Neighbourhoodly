import React, { Component } from 'react'
import NeighbourhoodList from '../components/NeighbourhoodList'
import Sidebar from '../components/Sidebar'

export class Rankings extends Component {
    // Not currently working properly
    render(){
        const {data, isLoggedIn, isAdmin} = this.props
        return(
            <Sidebar className="sidebar" 
            SignInType={isLoggedIn() ? "MainMenu" : "LogIn"}
            handleAdmin={isAdmin}
            tab1="About Us"
            tab2="Neighbourhoods"
            tab3="Home"
            tab4="Profile"
            showMenu={true}/>
        )
    }
}

export default Rankings