import React, { useEffect, Component } from 'react'
import { checkLogin } from '../../actions/checkLogin';
import { withRouter } from 'react-router-dom';

class LogInForm extends Component {
    constructor (props) {
        super(props)
    }
    
    handleSubmit = async (e) => {
        e.preventDefault()
        await checkLogin(this.props.SignInState, this.props.users, this.props.updateLogin, this.props.handleSignal)

        if (this.props.isLoggedIn()) {
            this.props.history.push('/')
        }
        
    }

  render() {
      const {SignInState, handleInputChange} = this.props; // Coming from SignInTab.js
    return (
        <div id="signInTab">
        <div className='signInTabHeader'>
            Log In
        </div>
        <ul>
            <li>Email</li>
            <form>
                <input  value={ SignInState.email } 
                            onChange={ handleInputChange }
                            name="email"
                            className="signInInput" 
                            type="text"/>
                <li>Password</li>
                <input  value={ SignInState.password } 
                            onChange={ handleInputChange }
                            name="password"
                            className="signInInput" 
                            type="text"/>
                            
                <input className="signInButton"
                            defaultChecked={SignInState.showFailedLogin} 
                            onClick={this.handleSubmit} 
                            type="button" 
                            value="Log In"/>
            </form>
            {
                SignInState.showFailedLogin ? <li>Invalid email or password</li> : null
            }
        </ul>
        </div>
    )
  }
}

export default withRouter(LogInForm)