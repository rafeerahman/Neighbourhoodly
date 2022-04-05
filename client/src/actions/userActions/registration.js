import ENV from './../../config.js'
const API_HOST = ENV.api_host

export const register = (SignInTab, app, loginCb) => {
    let [email, username, password, retypedPassword] =  [SignInTab.state.email,
        SignInTab.state.username, SignInTab.state.password, SignInTab.state.retypePassword]
    
    // Checking input fields
    if (password !== retypedPassword) {
        SignInTab.handleErrorMessage("Passwords must match, try again.")
        return
    }

    if (password === '' || email  === '' || username === '') {
        SignInTab.handleErrorMessage("All fields are required.")
        return 
    }

    // Request
    const request = new Request(`${API_HOST}/api/users`, {
        method: 'post',
        body: JSON.stringify({
            "email": email,
            "username": username,
            "password": password
        }),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })

    fetch(request)
    .then(res => {
        if (res.status === 200) {
            console.log('Success')
            loginCb()
            return true; // Success
        } else if (res.status === 422) {
            SignInTab.handleErrorMessage("User already exists in our database.")

        }
    })
    .catch(error => {
        console.log(error)
    })

    return false
}