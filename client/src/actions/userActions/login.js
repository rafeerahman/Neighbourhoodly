import ENV from './../../config.js'
const API_HOST = ENV.api_host
console.log('Current environment:', ENV.env)


export const login = (SignInTab, app) => {
    let [email, password] =  [SignInTab.state.email, SignInTab.state.password]


    // Create our request constructor with all the parameters we need
    const request = new Request(`${API_HOST}/users/login`, {
        method: "post",
        body: JSON.stringify({
            email: email,
            password: password
        }),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    // Send the request with fetch()
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                SignInTab.handleErrorMessage("Invalid credentials, try again.")
                return false;
            }
        })
        .then(json => {
            if (json.currentUser) {
                app.setState({ currentUser: json.currentUser });
            }
        })
        .catch(error => {
            console.log(error);
        });
};