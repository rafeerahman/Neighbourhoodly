export const checkLogin = (signInTab) => {
   
    console.log("Login check")
    const users = signInTab.state.users

    // Check if username is in the list and then check if password matches the user that is saved
    const validUser = users.find(user => user.email === signInTab.state.email)

    if (validUser === undefined || validUser.password !== signInTab.state.password) {
        if (!signInTab.state.showFailedLogin) {
            signInTab.setState({
                showFailedLogin: !signInTab.state.showFailedLogin
            })
            console.log("failed")
        }
        return
    }
    console.log("Successfully logged in")
    if (validUser.type === "admin") {
        // user is an admin
        signInTab.props.updateLogin(true)
        return
    }
    signInTab.props.updateLogin(false)
};