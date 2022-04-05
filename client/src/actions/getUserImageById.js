import ENV from '../config.js'
const API_HOST = ENV.api_host

export const getUserImageById = (userReview) => {
    const id = userReview.props.userId
    const url = `${API_HOST}/api/users/${id}`;

    fetch(url)
    .then(res => {
        if (res.status === 200) {
            return res.json()
        } else {
            console.log("error")
        }
    })
    .then(json => {
        if (json.image) {
            userReview.setState({avatar_url: json.image.image_url})
        }
    })
    .catch(e => {
        console.log(e)
    })
}