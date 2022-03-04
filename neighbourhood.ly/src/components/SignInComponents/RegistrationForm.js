import React, { Component } from 'react'
import { checkRegistration } from '../../actions/checkRegistration'
import { withRouter } from 'react-router-dom';

class RegistrationForm extends Component {

  handleRegistration = () => {
    let success = checkRegistration(this.props.SignInState)

    if (success) {
      this.props.history.push('/LogIn')
    }
  }

  render() {
      const {SignInState} = this.props

    return (
        <div id="signInTab">
        <div className='signInTabHeader'>
            Register
        </div>
        <ul>
            <li>Email</li>
            <li><input  value={ SignInState.state.email } 
                        onChange={ SignInState.handleInputChange }
                        name="email"
                        className="signInInput"
                        type="text"/></li>
            
            <li>Username</li>
            <li><input  value={ SignInState.state.username } 
                        onChange={ SignInState.handleInputChange }
                        name="username"
                        className="signInInput" 
                        type="text"/></li>
            
            <li>Password</li>
            <li><input  value={ SignInState.state.password } 
                        onChange={ SignInState.handleInputChange }
                        name="password"
                        className="signInInput" 
                        type="text"/></li>
            
            <li>Retype Passwords</li>
            <li><input  value={ SignInState.state.retypePassword } 
                        onChange={ SignInState.handleInputChange }
                        name="retypePassword"
                        className="signInInput" 
                        type="text"/></li>
            
            <li><input  className="signInButton"
                        onClick={this.handleRegistration} 
                        type="submit" 
                        value="Register"/></li>

            {/* For later: if errorCheck() put some error message in DOM}
                put if statement stuff from checkRegistration.js into an errorCheck()  function and import/use it here... */}
        </ul>
        </div>
    )
  }
}

export default withRouter(RegistrationForm)