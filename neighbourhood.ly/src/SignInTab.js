import React from 'react';
import './App.css';

// still need to add functionality to the register button
// so that it adds users to the state
class SignInTab extends React.Component {

    state = {
        showFailedLogin: false,
        showFailedPassword: false,
        showExistingUser: false,
        email: "",
        username: "",
        password: "",
        retypePassword: "",
        // code below requires server call
        users: [
            {name: "admin", password: "admin", email: "admin@admin.com", type: "admin"},
            {name: "user", password: "user", email: "user@user.com", type: "user"}
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

    checkLogin = (props) => {
        console.log("Login check")
        const users = this.state.users

        // Check if username is in the list and then check if password matches the user that is saved
        const validUser = users.find(user => user.email === this.state.email)
        if (validUser === undefined || validUser.password !== this.state.password) {
            if (!this.state.showFailedLogin) {
                this.setState({
                    showFailedLogin: !this.state.showFailedLogin
                })
            }
            return
        }
        if (validUser.type === "admin") {
            // user is an admin
        }
        console.log("Successfully logged in")

    }

    checkSignUp = () => {
        console.log("Sign Up check")
        const users = this.state.users

        if (this.state.password !== this.state.retypePassword) {
            if (!this.state.showFailedPassword) {
                this.setState({
                    showFailedPassword: !this.state.showFailedPassword
                })
            }
            return
        }

        if (users.some(user => user.email === this.state.email)) {
            if (!this.state.showExistingUser) {
                this.setState({
                    showExistingUser: !this.state.showExistingUser
                })
            }
            return
        }

        const newUser = {
            name: this.state.username,
            password: this.state.password,
            email: this.state.password,
            type: this.state.type
        }

        users.push(newUser)

        this.setState({
            users: users
        })
        console.log("Successfully Signed Up!")

    }


    render() {

        const {SignInType} = this.props
        
        if (SignInType === "Register"){
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
                                onClick={ this.checkSignUp} 
                                type="submit" 
                                value="Register"/></li>
                </ul>
                </div>
            )
        }
        
        if (SignInType === "LogIn"){
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
                                defaultChecked={this.state.showFailedLogin}
                                onClick={ this.checkLogin } 
                                type="submit" 
                                value="Log In"/></li>
                    {
                        this.state.showFailedLogin ? <li>Invalid email or password</li> : null
                    }
                </ul>
                </div>
            )
        }
    }
}

export default SignInTab;