import React, { Component } from 'react'
import { addUser, checkRegistration } from '../../actions/checkRegistration'
import { withRouter } from 'react-router-dom';

class RegistrationForm extends Component {

  handleRegistration = () => {
    let success = checkRegistration(this.props.SignInState, this.props.handleSignal)
    if (success) {
      const newUser = {
        name: this.props.SignInState.username,
        password: this.props.SignInState.password,
        email: this.props.SignInState.email,
        type: this.props.SignInState.type
      }
      addUser(newUser)
      this.props.history.push('/LogIn')
    }
  }

  render() {
      const {SignInState, handleInputChange} = this.props

    return (
        <div id="signInTab">
        <div className='signInTabHeader'>
            Register
        </div>
        <ul>
            <li>Email</li>
            <li><input  value={ SignInState.email } 
                        onChange={ handleInputChange }
                        name="email"
                        className="signInInput"
                        type="text"/></li>
            
            <li>Username</li>
            <li><input  value={ SignInState.username } 
                        onChange={ handleInputChange }
                        name="username"
                        className="signInInput" 
                        type="text"/></li>
            
            <li>Password</li>
            <li><input  value={ SignInState.password } 
                        onChange={ handleInputChange }
                        name="password"
                        className="signInInput" 
                        type="text"/></li>
            
            <li>Retype Passwords</li>
            <li><input  value={ SignInState.retypePassword } 
                        onChange={ handleInputChange }
                        name="retypePassword"
                        className="signInInput" 
                        type="text"/></li>
            
            <li><input  className="signInButton"
                        onClick={this.handleRegistration} 
                        type="submit" 
                        value="Register"/></li>

            {
                SignInState.showFailedPassword ? <li>Passwords do not match</li> : null
            }
            {
                SignInState.showExistingUser ? <li>User already exists. Please log in</li> : null
            }
        </ul>
        </div>
    )
  }
}

export default withRouter(RegistrationForm)