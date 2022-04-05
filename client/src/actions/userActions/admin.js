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

export const removeReview = (user) => {
    const url = `${API_HOST}/api/reviews/user=${user}`

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                alert("Could not get users");
            }
        })
        .catch(error => {
            console.log(error);
        });
    
}