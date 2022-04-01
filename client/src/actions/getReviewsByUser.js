import ENV from './../config.js'
const API_HOST = ENV.api_host
console.log('Current environment:', ENV.env)

export const getReviewsByUser = (app, profile) => {
    const url = `${API_HOST}/api/reviews/user=${app.state.currentUser.username}`

    fetch(url)
    .then(res => {
        if (res.status === 200) {
            return res.json()
        }
    })
    .then(json => {
        console.log(json)
        profile.setState({reviews2: json})
    })
    .catch(e => {
        console.log(e)
    })
}