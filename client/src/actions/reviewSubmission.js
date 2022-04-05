import ENV from '../config.js'
const API_HOST = ENV.api_host

export const reviewSubmission = (userReviewForm, neighbName, neighbId, callback) => {
    const rating = userReviewForm.state.starRating
    const reviewTitle = userReviewForm.state.reviewTitle 
    const reviewBody = userReviewForm.state.reviewContent

    if (reviewBody == "" || reviewTitle == "" || rating == null) {
        alert("Please enter all fields");
        return;
    }

    const request = new Request(`${API_HOST}/api/reviews`, {
        method: "post",
        credentials: "include", // includes cookies to the request
        body: JSON.stringify({
            neighbId: neighbId,
            neighbourhoodName: neighbName,
            review: {
                reviewTitle: reviewTitle,
                reviewBody: reviewBody,
                userRating: rating
            }
        }),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })

    fetch(request)
    .then((res) => {
        if (res.status === 200) {
            console.log("Success")
            callback()
        } else {
            console.log("Error " + res.status)
        }
    })
    .catch((e) => {
        console.log(e)
    })
}
