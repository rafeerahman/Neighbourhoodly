import React from 'react';
import '../../App.css';
import InfoBar from '../../components/InfoBar';
import Sidebar from '../../components/Sidebar';
import SignInTab from '../../components/SignInComponents/SignInTab';

class Register extends React.Component {
    render() {
        const {users} = this.props

        return (
            <div>

            <Sidebar  SignInType="Register"
                      tab1="About Us"
                      tab2="Neighbourhoods"
                      tab3="Rankings"
                      tab4="Login" // Instead something like this? {this.state.loggedIn ? "Profile" : "Login"}
                      showMenu={true}
            />
    
            <InfoBar />
    
            {/* If this.state.loggedIn , <SignInTab SignInType="Profile"/> */}
            <SignInTab users={users} SignInType="Register" isLoggedIn={this.props.isLoggedIn}/>
    
          </div>
        )
    }
}

export default Register;