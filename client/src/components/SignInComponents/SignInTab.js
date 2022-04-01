import React from 'react';
import '../../App.css';
import RegistrationForm from './RegistrationForm';
import LogInForm from './LogInForm';


class SignInTab extends React.Component {
    constructor (props) {
        super(props)
    }

    state = {
        showFailedLogin: false,
        showFailedPassword: false,
        showExistingUser: false,
        email: "",
        username: "",
        password: "",
        retypePassword: "",
    }

    handleInputChange = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    handleSignal = (code) => {
        if (code === "Login") {
            if (!this.state.showFailedLogin) {
                this.setState({
                    showFailedLogin: !this.state.showFailedLogin
                })
            }
        }
        else if (code === "Password") {
            if (!this.state.showFailedPassword) {
                this.setState({
                    showFailedPassword: !this.state.showFailedPassword
                })
            }
        }
        else {
            if (!this.state.showExistingUser) {
                this.setState({
                    showExistingUser: !this.state.showExistingUser
                })
            }
        }
    }


    render() {
        const {SignInType} = this.props

        if (SignInType === "Register"){
            return (
                <RegistrationForm 
                SignInState={this.state} 
                handleInputChange={this.handleInputChange}
                handleSignal={this.handleSignal} />
            )
        } else if (SignInType === "LogIn") {
            return (
                <LogInForm 
                SignInState={this.state}  
                handleSignal={this.handleSignal}
                handleInputChange={this.handleInputChange}/>
            )
        }
    }
}

export default SignInTab;