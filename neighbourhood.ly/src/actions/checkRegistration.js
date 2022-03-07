export const checkRegistration = (SignInTab, users, updateUsers, handleSignal) => {
    console.log("Sign Up Check...")

    if (SignInTab.password !== SignInTab.retypePassword) {
        console.log("failed")
        handleSignal("Password")
        return
    }

    if (users.some(user => user.email === SignInTab.email)) {
        console.log("failed")
        handleSignal("Exists")
        return
    }


    if (SignInTab.password === '' || SignInTab.email === '' || SignInTab.username === '') {
        console.log('failed')
        return 
    }

    const newUser = {
        name: SignInTab.username,
        password: SignInTab.password,
        email: SignInTab.email,
        type: SignInTab.type
    }

    updateUsers(newUser)

    console.log("Successfully Signed Up!")
    return true
};