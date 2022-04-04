import ENV from './../config.js'
const API_HOST = ENV.api_host

export const getReviewsByNeighbourhood = (neighbourhoodPage) => {
    const url = `${API_HOST}/api/reviews/neighbourhood=${neighbourhoodPage.props.neighbourhood.neighbourhoodName}`

    fetch(url)
    .then(res => {
        if (res.status === 200) {
            return res.json()
        } else {
            console.log(res.status + " Error")
        }
    })
    .then(json => {
        console.log(json)
        neighbourhoodPage.setState({allReviews: json})
    })
    .catch(e => {
        console.log(e)
    })
}