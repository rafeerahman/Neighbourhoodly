import React, { Component } from 'react'
import Sidebar from '../components/Sidebar'
import '../App.css';

class AboutUs extends Component {

    render(){
        const {isLoggedIn, isAdmin} = this.props
        return(
            <div>
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

export default AboutUs