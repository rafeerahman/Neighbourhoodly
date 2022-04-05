import ENV from './../../config.js'
const API_HOST = ENV.api_host
console.log('Current environment:', ENV.env)


export const getUsers = (app) => {
    const url =  `${API_HOST}/api/users`

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                alert("Could not get users");
            }
        })
        .then(json => {
            app.setState({ users: json })
        })
        .catch(error => {
            console.log(error);
        });
};


export const removeUser = (app, id) => {
    const request = new Request(`${API_HOST}/api/users/${id}`, {
        method: "delete",
        credentials: "include", // includes cookies to the request
    })

    fetch(request)
        .then(res => {
            if (res.status === 200) {
                console.log('successful deletion')
                return res.json();
            } else {
                alert("Could not delete user");
            }
        })
        .then(json => {
            app.setState({users: json})
        })
        .catch(error => {
            console.log(error);
        });
}