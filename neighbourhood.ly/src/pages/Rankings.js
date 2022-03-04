import React, { Component } from 'react'
import NeighbourhoodList from '../components/NeighbourhoodList'
import Sidebar from '../components/Sidebar'

export class Rankings extends Component {
    render(){
        const {data, isLoggedIn} = this.props
        return(
            <Sidebar className="sidebar" 
            SignInType={isLoggedIn() ? "MainMenu" : "LogIn"}
            tab1="About Us"
            tab2="Neighbourhoods"
            tab3="Rankings"
            tab4="Home" 
            showMenu={true}/>
        )
    }
}

export default Rankings