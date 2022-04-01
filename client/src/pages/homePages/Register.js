import React from 'react';
import '../../App.css';
import InfoBar from '../../components/InfoBar';
import Sidebar from '../../components/Sidebar';
import SignInTab from '../../components/SignInComponents/SignInTab';
import toronto from '../../images/toronto2.png'

class Register extends React.Component {
    render() {
        return (
            <div>
                <Sidebar  SignInType="Register"
                        tab1="About Us"
                        tab2="Neighbourhoods"
                        tab3="Rankings"
                        tab4="Login"
                        showMenu={true}
                />
                <InfoBar />
                <SignInTab SignInType="Register"/>
            </div>
        )
    }
}

export default Register;