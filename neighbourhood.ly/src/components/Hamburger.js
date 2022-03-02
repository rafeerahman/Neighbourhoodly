import React, { Component } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components'
import Sidebar from '../Sidebar';
import CloseIcon from '@mui/icons-material/Close';

export class Hamburger extends Component {
  state = {
    showSidebar: false
  }

  toggleSidebar = () => {
    this.setState({
        showSidebar: !this.state.showSidebar

    })
  }

  render() {
    return (
        <Menu>
           {this.state.showSidebar ? 
              <MenuBtnStyled onClick={this.toggleSidebar}>
                <CloseIcon className="close"/>
              </MenuBtnStyled>
              : 
              <MenuBtnStyled onClick={this.toggleSidebar}>
                <MenuIcon className="hamburger"/>
              </MenuBtnStyled>
              }

            
              <Sidebar className="sidebar" 
                SignInType="Register"
                tab1="About Us"
                tab2="Neighbourhoods"
                tab3="Rankings"
                tab4="Home" 
                showMenu={this.state.showSidebar}/>
            
        </Menu>
    )
  }
}

const Menu = styled.div`
  position: absolute;
`
const MenuBtnStyled = styled.button`
    position: absolute;
    background-color: transparent;
    border: none;
    z-index: 999;
    cursor: pointer;

    :hover {
        
    }
    
    .hamburger {
        font-size: 35px;
        color: black;
    }

    .close {
      font-size: 35px;
      color: white;
    }

`

export default Hamburger