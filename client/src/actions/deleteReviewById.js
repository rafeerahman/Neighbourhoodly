
import ENV from './../config.js'
const API_HOST = ENV.api_host

export const deleteReviewById = (reviewId) => {
    const request = new Request(`${API_HOST}/api/reviews/${reviewId}`, {
        method: "delete",
        credentials: "include", // includes cookies to the request
    })

    fetch(request)
    .then(res => {
        if (res.status === 200) {
            console.log('successful deletion')
            return res.json()
        } else {
            console.log(res.status + " Error")
        }
    })
    .catch(e => {
        console.log(e)
    })
}