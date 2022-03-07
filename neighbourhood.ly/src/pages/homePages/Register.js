import React from 'react';
import '../../App.css';
import InfoBar from '../../components/InfoBar';
import Sidebar from '../../components/Sidebar';
import SignInTab from '../../components/SignInComponents/SignInTab';

class Register extends React.Component {

    updateUsers = (user) => {
        this.props.registerHandler(user)
    }

    render() {

        return (
            <div>

            <Sidebar  SignInType="Register"
                      tab1="About Us"
                      tab2="Neighbourhoods"
                      tab3="Rankings"
                      tab4="Login"
                      isAdmin={this.props.isAdmin}
                      showMenu={true}
            />
    
            <InfoBar />
    
            <SignInTab users={this.props.users} SignInType="Register" isLoggedIn={this.props.isLoggedIn} updateUsers={this.updateUsers}/>
    
          </div>
        )
    }
}

export default Register;