import ENV from './../config.js'
const API_HOST = ENV.api_host
console.log('Current environment:', ENV.env)

export const getReviewsByUser = (profile, user) => {
    const url = `${API_HOST}/api/reviews/user=${user}`

    fetch(url)
    .then(res => {
        if (res.status === 200) {
            return res.json()
        }
    })
    .then(json => {
        console.log(json)
        profile.setState({reviews: json})
    })
    .catch(e => {
        console.log(e)
    })
}