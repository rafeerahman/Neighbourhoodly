import React from 'react';
import '../../App.css';
import RegistrationForm from './RegistrationForm';
import LogInForm from './LogInForm';


class SignInTab extends React.Component {
    constructor (props) {
        super(props)
    }

    state = {
        errorMessage: null,
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

    handleErrorMessage = (message) => {
        this.setState({
            errorMessage: message
        })
    }


    render() {
        const {app, SignInType} = this.props

        if (SignInType === "Register"){
            return (
                <RegistrationForm 
                SignInTab={this}  
                handleInputChange={this.handleInputChange}/>
            )
        } else if (SignInType === "LogIn") {
            return (
                <LogInForm 
                SignInTab={this} 
                handleInputChange={this.handleInputChange}/>
            )
        }
    }
}

export default SignInTab;