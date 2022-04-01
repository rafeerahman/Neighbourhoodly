import React from 'react';
import '../../App.css';
import InfoBar from '../../components/InfoBar';
import UserSidebar from '../../components/UserSidebar'
import Sidebar from '../../components/Sidebar';
import {toronto} from '../../images/toronto2.png'
class UserHome extends React.Component {

    render() {
        const {app} = this.props

        return (
        <div>
            {/* <Sidebar  SignInType="MainMenu"
                      handleLogout={this.props.logoutHandler}  // Later on probably need to add more about removing user from state
                      isAdmin={this.props.isAdmin}
                      tab1="About Us"
                      tab2="Neighbourhoods"
                      tab3="Rankings"
                      tab4="Profile"
                      tab5="Admin Dashboard"
                      tab6="Logout"
                      showMenu={true}
            /> */}
            <UserSidebar app={app} showMenu={true}/>
            <InfoBar />
            
          </div>
        )
    }
}

export default UserHome;