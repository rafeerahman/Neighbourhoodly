import ENV from '../config.js'
const API_HOST = ENV.api_host


// Setting the rating in the neighbourhood data
export const setNeighbourhoodRating = async (neighbourhood, cb) => {
    try {
        const reviews = await getReviewsByNeighb(neighbourhood._id)
        
        const total = reviews.reduce((total, review) => {
            return total += review.review.userRating
        }, 0)
        const rating = (total / reviews.length).toFixed(2)
        neighbourhood.data.userRating = rating;
           
        cb();
    } catch (e) {
        neighbourhood.data.userRating = "";
        return null
    }
}

async function getReviewsByNeighb(neighbourhoodId) {
    const url = `${API_HOST}/api/reviews/neighbourhood=${neighbourhoodId}`
    
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json()
            } else {
                reject(res.status)
            }
        })
        .then(json => {
            resolve(json);
        })
        .catch(e => {
            reject(e)
        })
    })
}