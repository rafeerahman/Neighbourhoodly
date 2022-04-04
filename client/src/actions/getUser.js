import ENV from '../config.js'
const API_HOST = ENV.api_host

// getsCurrentUser
export const getUser = (profileComp) => {
    const url = `${API_HOST}/api/users/current`;

    fetch(url)
    .then(res => {
        if (res.status === 200) {
            return res.json()
        } else {
            console.log("error")
            
        }
    })
    .then(json => {
        console.log(json)
        if (json.image) {
            profileComp.setState({imageURL: json.image.image_url})
        }
        if (json.location) {
            profileComp.setState({location: json.location})
        }
        if (json.about) {
            profileComp.setState({about: json.about})
        }
        profileComp.setState({
            username: json.username
        })
    })
    .catch(e => {
        console.log(e)
    })
}