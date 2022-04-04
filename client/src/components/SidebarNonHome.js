import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class SidebarNonHome extends Component {
  render() {
      const {showMenu} = this.props
    return (
        <div id="sidebar" className = {showMenu ? "sidebar active" : "sidebar"}>
        <ul>
          <li><Link to={"/AboutUs"}><a href="">About</a></Link></li>
          <li><Link to={"/Neighbourhoods"}><a href="">Neighbourhoods</a></Link></li>
          <li><Link to={"/Rankings"}><a href="">Rankings</a></Link></li>
          <li><Link to={'/'}><a href="">Home</a></Link></li>
        </ul>
      </div>
    )
  }
}

export default SidebarNonHome