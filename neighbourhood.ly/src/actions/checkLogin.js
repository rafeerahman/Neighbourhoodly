export const checkLogin = (signInTab) => {
   
    console.log("Login check")
    const users = signInTab.state.users

    // Check if username is in the list and then check if password matches the user that is saved
    console.log(users)
    const validUser = users.find(user => user.email === signInTab.state.email)

    if (validUser === undefined || validUser.password !== signInTab.state.password) {
        console.log(validUser)
        if (!signInTab.state.showFailedLogin) {
            signInTab.setState({
                showFailedLogin: !signInTab.state.showFailedLogin
            })
            console.log("failed")
        }
        return
    }
    if (validUser.type === "admin") {
        // user is an admin
        if (signInTab.state.showFailedLogin === true) {
            
        }  
    }
    console.log("Successfully logged in")
    signInTab.props.updateLogin()
};