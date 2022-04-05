import ENV from './../../config.js'
const API_HOST = ENV.api_host

export const logout = (app, logoutCb) => {
    const url = `${API_HOST}/users/logout`;

    fetch(url)
        .then(res => {
            console.log('Logged out')
            app.setState({ currentUser: null });
        })
        .catch(error => {
            console.log(error);
        });
};