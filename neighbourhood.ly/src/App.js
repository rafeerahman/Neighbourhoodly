import React from 'react';
import './App.css';
import InfoBar from './InfoBar';
import Sidebar from './Sidebar';
import SignInTab from './SignInTab';
class App extends React.Component {

  render() {
    
    return (
      <div>

        <Sidebar  tab1="About Us" ref1=""
                  tab2="Neighbourhoods" ref2=""
                  tab3="Rankings" ref3=""
                  tab4="Login" ref4=""
        />

        <InfoBar />

        <SignInTab SignInType="Register"/>

      </div>
    )
    
  }

}

export default App;
