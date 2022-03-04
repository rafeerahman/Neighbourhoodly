import React from 'react';
import '../../App.css';
import InfoBar from '../../components/InfoBar';
import Sidebar from '../../components/Sidebar';
import SignInTab from '../../components/SignInComponents/SignInTab';

class SignIn extends React.Component {

    updateLogin = () => {
        this.props.logInHandler()
    }

    render() {
        const {users} = this.props

        return (
            <div>
            {   // Probably dont need some of this anymore
                this.props.appState.loggedIn ? 
                <><Sidebar SignInType="MainMenu"
                            tab1="About Us"
                            tab2="Neighbourhoods"
                            tab3="Rankings"
                            tab4="Register"
                            showMenu={true} /><InfoBar /></> : 
                <><Sidebar SignInType="LogIn"
                            tab1="About Us"
                            tab2="Neighbourhoods"
                            tab3="Rankings"
                            tab4="Register"
                            showMenu={true} /><InfoBar />
                <SignInTab users={users} SignInType="LogIn" isLoggedIn={this.props.isLoggedIn} updateLogin={this.updateLogin}/></>
            }
          </div>
        )
    }
}

export default SignIn;