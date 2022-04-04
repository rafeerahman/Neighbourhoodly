// environment configutations
import ENV from './../../config.js'
const API_HOST = ENV.api_host
console.log('Current environment:', ENV.env)

// Send a request to check if a user is logged in through the session cookie
export const checkSession = (app) => {
    const url = `${API_HOST}/users/check-session`;

    if (!ENV.use_frontend_test_user) {
        fetch(url,
            {
                credentials: "include", // include cookies
            }
            )
        .then(res => {
            if (res.status === 401) {
                console.log("401 Not Found")
            }
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            console.log(json)
            if (json && json.currentUser) {
                app.setState({ currentUser: {email: json.currentUser.email, username: json.currentUser.username}, isAdmin: json.isAdmin}, () => {
                    console.log('check-session')
                    console.log(json.currentUser)
                    console.log('Current User ' + json.currentUser )
                    console.log('Admin ' + json.isAdmin )
                });
            }
        })
        .catch(error => {
            console.log(error);
        });
    } else {
        app.setState({ currentUser: ENV.user , isAdmin: ENV.isAdmin});
    }
    
};