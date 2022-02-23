import React from 'react';
import './App.css';

// still need to add functionality to the register button
// so that it adds users to the state
class SignInTab extends React.Component {

    state = {
        email: "",
        username: "",
        password: "",
        retypePassword: "",
        users: [
            {name: "admin", password: "admin", email: "admin@admin.com"}
        ]
    }

    handleInputChange = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    render() {

        const {SignInType} = this.props
        
        if (SignInType == "Register"){
            return (
                <div id="signInTab">
                <div className='signInTabHeader'>
                    Register
                </div>
                <ul>
                    <li>Email</li>
                    <li><input  value={ this.state.email } 
                                onChange={ this.handleInputChange }
                                name="email"
                                className="signInInput"
                                type="text"/></li>
                    
                    <li>Username</li>
                    <li><input  value={ this.state.username } 
                                onChange={ this.handleInputChange }
                                name="username"
                                className="signInInput" 
                                type="text"/></li>
                    
                    <li>Password</li>
                    <li><input  value={ this.state.password } 
                                onChange={ this.handleInputChange }
                                name="password"
                                className="signInInput" 
                                type="text"/></li>
                    
                    <li>Retype Passwords</li>
                    <li><input  value={ this.state.retypePassword } 
                                onChange={ this.handleInputChange }
                                name="retypePassword"
                                className="signInInput" 
                                type="text"/></li>
                    
                    <li><input  className="signInButton"
                                type="submit" 
                                value="Register"/></li>
                </ul>
                </div>
            )
        }
        
        if (SignInType == "LogIn"){
            return (
                <div id="signInTab">
                <div className='signInTabHeader'>
                    Log In
                </div>
                <ul>
                    <li>Email</li>
                    <li><input  value={ this.state.email } 
                                onChange={ this.handleInputChange }
                                name="email"
                                className="signInInput" 
                                type="text"/></li>
                    <li>Password</li>
                    <li><input  value={ this.state.password } 
                                onChange={ this.handleInputChange }
                                name="password"
                                className="signInInput" 
                                type="text"/></li>
                    <li><input  className="signInButton" 
                                type="submit" 
                                value="Log In"/></li>
                </ul>
                </div>
            )
        }

    }
}

export default SignInTab;