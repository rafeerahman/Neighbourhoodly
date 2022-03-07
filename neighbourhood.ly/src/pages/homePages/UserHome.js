import React from 'react';
import '../../App.css';
import InfoBar from '../../components/InfoBar';
import Sidebar from '../../components/Sidebar';

class UserHome extends React.Component {
    render() {
        return (
        <div>
            <Sidebar  SignInType="MainMenu"
                      handleLogout={this.props.logoutHandler}  // Later on probably need to add more about removing user from state
                      isAdmin={this.props.isAdmin}
                      tab1="About Us"
                      tab2="Neighbourhoods"
                      tab3="Rankings"
                      tab4="Profile"
                      tab5="Admin Dashboard"
                      tab6="Logout"
                      showMenu={true}
            />
    
            <InfoBar />
    
          </div>
        )
    }
}

export default UserHome;