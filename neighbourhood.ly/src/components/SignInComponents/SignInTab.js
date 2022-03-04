import React from 'react';
import '../../App.css';
import RegistrationForm from './RegistrationForm';
import LogInForm from './LogInForm';

// still need to add functionality to the register button
// so that it adds users to the state
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
        // code below requires server call
        users: this.props.users
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

        if (SignInType === "Register"){
            return (
                <RegistrationForm SignInState={this} isLoggedIn={this.props.isLoggedIn}/>
            )
        } else if (SignInType === "LogIn") {
            return (
                <LogInForm SignInState={this} isLoggedIn={this.props.isLoggedIn}/>
            )
        }

    }
}

export default SignInTab;