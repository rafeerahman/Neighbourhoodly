import ENV from './../config.js'
const API_HOST = ENV.api_host

export const getReviewsByNeighbourhoodId = (neighbourhoodPage) => {
    console.log(neighbourhoodPage.props.neighbId)
    const url = `${API_HOST}/api/reviews/neighbourhood=${neighbourhoodPage.props.neighbourhood._id}`

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