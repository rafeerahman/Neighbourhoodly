import React, { Component } from 'react'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'
import '../components/Profile.css'


export class Profile extends Component {

    render() {
        const {data, isLoggedIn, isAdmin} = this.props
        console.log("Hello from profile page") 
        return (
            <div>
                {/* <Hamburger isLoggedIn={isLoggedIn}/> */}
                <Sidebar className="sidebar" 
                    SignInType={isLoggedIn() ? "MainMenu" : "LogIn"}
                    handleAdmin={isAdmin}
                    tab1="About Us"
                    tab2="Neighbourhoods"
                    tab3="Rankings"
                    tab4="Home" 
                    showMenu={true}/>  
            </div>      
        )
    }
}
// Working on css file, will push later

export default Profile