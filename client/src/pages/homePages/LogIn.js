import React from 'react';
import '../../App.css';
import InfoBar from '../../components/InfoBar';
import Sidebar from '../../components/Sidebar';
import SignInTab from '../../components/SignInComponents/SignInTab';

class SignIn extends React.Component {
    render() {
        return (
            <div>
                <div>
                <Sidebar SignInType="LogIn"
                            tab1="About Us"
                            tab2="Neighbourhoods"
                            tab3="Rankings"
                            tab4="Register"
                            isAdmin={this.props.isAdmin}
                            showMenu={true} />
                <InfoBar />
                <SignInTab app={this.props.app} SignInType="LogIn" />
          </div>
          </div>
        )
    }
}

export default SignIn;