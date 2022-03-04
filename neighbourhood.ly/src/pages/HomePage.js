import React, { Component } from 'react'
import Sidebar from '../Sidebar'
import InfoBar from '../InfoBar'
import Register from '../Register'

export default class HomePage extends Component {

  render() {

    const {appState} = this.props
    let signInType = ""
    if (!appState.isLoggedIn) {
        signInType = "Profile"
    }  
    
    return (
      <div>
        <Register />
      </div>
    )
  }
}
