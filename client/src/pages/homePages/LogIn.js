import React from 'react';
import '../../App.css';
import InfoBar from '../../components/InfoBar';
import Sidebar from '../../components/Sidebar';
import SignInTab from '../../components/SignInComponents/SignInTab';

class SignIn extends React.Component {
    render() {
        return (
            <div>
                <Sidebar SignInType="LogIn"
                            tab1="About Us"
                            tab2="Neighbourhoods"
                            tab3="Rankings"
                            tab4="Register"
                            showMenu={true} />
                <InfoBar />
                <SignInTab SignInType="LogIn"/>
          </div>
        )
    }
}

export default SignIn;