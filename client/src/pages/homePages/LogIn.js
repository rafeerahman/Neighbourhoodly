import React from 'react';
import '../../App.css';
import InfoBar from '../../components/InfoBar';
import Sidebar from '../../components/Sidebar';
import SignInTab from '../../components/SignInComponents/SignInTab';

class SignIn extends React.Component {

    updateLogin = (user, isAdmin) => {
        this.props.logInHandler(user, isAdmin)
    }

    render() {
        return (
            <div>
                <Sidebar SignInType="LogIn"
                            tab1="About Us"
                            tab2="Neighbourhoods"
                            tab3="Rankings"
                            tab4="Register"
                            isAdmin={this.props.isAdmin}
                            showMenu={true} /><InfoBar />
                <SignInTab users={this.props.appState.users} SignInType="LogIn" isLoggedIn={this.props.isLoggedIn} updateLogin={this.updateLogin}/>
          </div>
        )
    }
}

export default SignIn;