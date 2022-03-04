import React from 'react';
import './App.css';
import InfoBar from './InfoBar';
import Sidebar from './Sidebar';

class MainMenu extends React.Component {
    render() {
        return (
            <div>

            <Sidebar  SignInType="MainMenu"
                      tab1="About Us"
                      tab2="Neighbourhoods"
                      tab3="Rankings"
                      tab4="Profile"
                      showMenu={true}
            />
    
            <InfoBar />
    
          </div>
        )
    }
}

export default SignIn;