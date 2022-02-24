import React from 'react';
import './App.css';
import InfoBar from './InfoBar';
import Sidebar from './Sidebar';
import SignInTab from './SignInTab';

class Register extends React.Component {
    render() {
        return (
            <div>

            <Sidebar  SignInType="Register"
                      tab1="About Us"
                      tab2="Neighbourhoods"
                      tab3="Rankings"
                      tab4="Login"
            />
    
            <InfoBar />
    
            <SignInTab SignInType="Register"/>
    
          </div>
        )
    }
}

export default Register;