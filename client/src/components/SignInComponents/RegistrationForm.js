import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import {register} from '../../actions/userActions/registration'

class RegistrationForm extends Component {

  render() {
      // Coming from SignInTab.js (SignInTab is its state)
      const {app, SignInTab, handleInputChange} = this.props
      let [email, username, password, retypedPassword] =  [SignInTab.state.email,
        SignInTab.state.username, SignInTab.state.password, SignInTab.state.retypePassword]
      
      return (
        <div id="signInTab">
        <div className='signInTabHeader'>
            Register
        </div>
        <ul>
            <li>Email</li>
            <li><input  value={ email } 
                        onChange={ handleInputChange }
                        name="email"
                        className="signInInput"
                        type="text"/></li>
            
            <li>Username</li>
            <li><input  value={ username } 
                        onChange={ handleInputChange }
                        name="username"
                        className="signInInput" 
                        type="text"/></li>
            
            <li>Password</li>
            <li><input  value={ password } 
                        onChange={ handleInputChange }
                        name="password"
                        className="signInInput" 
                        type="text"/></li>
            
            <li>Retype Passwords</li>
            <li><input  value={ retypedPassword } 
                        onChange={ handleInputChange }
                        name="retypePassword"
                        className="signInInput" 
                        type="text"/></li>
            
            <li><input  className="signInButton"
                        onClick={() => {register(SignInTab, app, () => {this.props.history.push('/LogIn')})}} 
                        type="submit" 
                        value="Register"/></li>

            {/* ERROR STATE MESSAGE BELOW. */}
            <li>{SignInTab.state.errorMessage}</li>
        </ul>
        </div>
    )
  }
}

export default withRouter(RegistrationForm)