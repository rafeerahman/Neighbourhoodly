import React, { Component } from 'react'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'

export default class ErrorPage extends Component {
    render() {
        const { app } = this.props
        return(
            <div> 
            <Sidebar className="sidebar" 
                SignInType={ !app.state.currentUser ? "LogIn": "MainMenu" }
                tab1="About Us"
                tab2="Neighbourhoods"
                tab3="Rankings"
                tab4="Profile"
                tab5="Admin Dashboard"
                tab6="Home"
                showMenu={true}/>
            <ErrorStyled><h1>404 Error: page not found</h1></ErrorStyled>
          </div>           
        )
    }
}

const ErrorStyled = styled.div`
    float: left;
    position: relative;
    margin: 5% 0 0 10%;
    margin-left: 320px;
    font-style: normal;
    font-size: 24px;
    font-weight: 500;
`

