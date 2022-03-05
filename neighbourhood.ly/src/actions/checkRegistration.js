export const checkRegistration = (SignInTab) => {
    console.log("Sign Up Check...")
    const users = SignInTab.state.users

    if (SignInTab.state.password !== SignInTab.state.retypePassword) {
        console.log('failed')
        if (!SignInTab.state.showFailedPassword) {
            SignInTab.setState({
                showFailedPassword: !SignInTab.state.showFailedPassword
            })
        }
        return
    }

    if (users.some(user => user.email === SignInTab.state.email)) {
        console.log('failed')
        if (!SignInTab.state.showExistingUser) {
            SignInTab.setState({
                showExistingUser: !SignInTab.state.showExistingUser
            })
        }
        return
    }

    if (SignInTab.state.password === '' || SignInTab.state.email === '' || SignInTab.state.username === '') {
        console.log('failed')
        return 
    }

    const newUser = {
        name: SignInTab.state.username,
        password: SignInTab.state.password,
        email: SignInTab.state.email,
        type: SignInTab.state.type
    }

    users.push(newUser)
    console.log(users)
    SignInTab.setState({
        users: users
    })

    console.log("Successfully Signed Up!")
    return true
};