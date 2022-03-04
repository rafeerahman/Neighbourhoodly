import React from 'react';
import './App.css';
import InfoBar from './InfoBar';
import Sidebar from './Sidebar';
import SignInTab from './SignInTab';

class SignIn extends React.Component {

    updateLogin = () => {
        this.props.logInHandler()
    }

    render() {

        return (
            <div>
            {
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
                <SignInTab SignInType="LogIn" updateLogin={this.updateLogin}/></>
            }
          </div>
        )
    }
}

export default SignIn;