import React, { useEffect, Component } from 'react'
import { withRouter } from 'react-router-dom';
import {login} from './../../actions/userActions/login'

class LogInForm extends Component {
    constructor (props) {
        super(props)
    }

  render() {
      const {app, SignInTab, handleInputChange} = this.props; // Coming from SignInTab.js
      let [email, password] =  [SignInTab.state.email, SignInTab.state.password]

    return (
        <div id="signInTab">
        <div className='signInTabHeader'>
            Log In
        </div>
        <ul>
            <li>Email</li>
            <form>
                <input  value={ email } 
                            onChange={ handleInputChange }
                            name="email"
                            className="signInInput" 
                            type="text"/>
                <li>Password</li>
                <input  value={ password } 
                            onChange={ handleInputChange }
                            name="password"
                            className="signInInput" 
                            type="text"/>
                            
                <input className="signInButton"
                            onClick={() => {login(SignInTab, app)}} 
                            type="button" 
                            value="Log In"/>
            </form>
            <li>{SignInTab.state.errorMessage}</li>
        </ul>
        </div>
    )
  }
}

export default withRouter(LogInForm)