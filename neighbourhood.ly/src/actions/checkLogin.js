export const checkLogin = (signInTab, users, updateLogin, handleSignal) => {
   
    console.log("Login check")
    // Check if username is in the list and then check if password matches the user that is saved
    const validUser = users.find(user => user.email === signInTab.email)

    if (validUser === undefined || validUser.password !== signInTab.password) {
        console.log("failed")
        handleSignal("Login")
        return
    }
    console.log("Successfully logged in")
    if (validUser.type === "admin") {
        // user is an admin
        updateLogin(validUser.email, true)
        return
    }
    updateLogin(validUser.email, false)
};