import React from 'react';
import { Link } from "react-router-dom";
import './App.css';

class Sidebar extends React.Component {
    render() {
      const {   SignInType,
                tab1,
                tab2,
                tab3,
                tab4,
                tab5,
                tab6,
                showMenu,        
            } = this.props
        
      if (SignInType === "Register"){
        return (
          <div id="sidebar" className = {showMenu ? "sidebar active" : "sidebar"}>
            <ul>
              <li><a href="">{tab1}</a></li>
              <li><Link to={"/Neighbourhoods"}><a href="">{tab2}</a></Link></li>
              <li><a href="">{tab3}</a></li>
              <li><Link to={'/LogIn'}><a href="">{tab4}</a></Link></li>
            </ul>
          </div>
        )
      }
      if (SignInType === "LogIn"){
        return (
          <div id="sidebar">
            <ul>
              <li><a href="">{tab1}</a></li>
              <li><Link to={"/Neighbourhoods"}><a href="">{tab2}</a></Link></li>
              <li><a href="">{tab3}</a></li>
              <li><Link to={'/'}><a href="">{tab4}</a></Link></li>
            </ul>
          </div>
        )
      }
      if (SignInType === "MainMenu"){
        return (
          <div id="sidebar">
            <ul>
              <li><a href="">{tab1}</a></li>
              <li><Link to={"/Neighbourhoods"}><a href="">{tab2}</a></Link></li>
              <li><a href="">{tab3}</a></li>
              <li><Link to={'/'}><a href="">{tab4}</a></Link></li>
            </ul>
          </div>
        )
      }
  }
}
  

export default Sidebar;