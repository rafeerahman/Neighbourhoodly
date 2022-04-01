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
                app={app}
                SignInTab={this} 
                users={this.props.users} 
                handleInputChange={this.handleInputChange}
                handleSignal={this.handleSignal} 
                isLoggedIn={this.props.isLoggedIn} 
                updateUsers={this.props.updateUsers}/>
            )
        } else if (SignInType === "LogIn") {
            return (
                <LogInForm 
                app={app}
                SignInTab={this} 
                users={this.props.users} 
                handleSignal={this.handleSignal}
                handleInputChange={this.handleInputChange} 
                isLoggedIn={this.props.isLoggedIn} 
                updateLogin={this.props.updateLogin}/>
            )
        }

    }
}

export default SignInTab;