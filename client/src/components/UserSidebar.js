import React from 'react';
import { Link } from "react-router-dom";
import { logout } from '../actions/userActions/logout';
import '../App.css';

class UserSidebar extends React.Component {
    render() {
        const { app, showMenu } = this.props 
    return (
       
        <div id="sidebar" className = {showMenu ? "sidebar active" : "sidebar"}>
            <ul>
                <li><Link to={"/"}><a href="">Home</a></Link></li> 
                <li><Link to={'/Profile'}><a href="">Profile</a></Link></li>
                <li><Link to={"/AboutUs"}><a href="">About</a></Link></li>
                <li><Link to={"/Neighbourhoods"}><a href="">Neighbourhoods</a></Link></li>
                <li><Link to={"/Rankings"}><a href="">Rankings</a></Link></li>
                
                {/* Check if user is admin with check-sessions */}
                {app.state.isAdmin ? <li><Link to={'/AdminDashboard'}><a href="">Admin</a></Link></li> : null}
                
                <li><Link onClick={() => {logout(app)}} to={'/'}>Logout</Link></li>
            </ul>
        </div>
        )
      }
  }

  

export default UserSidebar;