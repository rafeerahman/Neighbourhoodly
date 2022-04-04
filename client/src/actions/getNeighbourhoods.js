import ENV from './../config.js'
const API_HOST = ENV.api_host

export const getAllNeighbourhoods = (app) => {
    const url = `${API_HOST}/api/neighbourhoods`

    fetch(url)
    .then(res => {
        if (res.status === 200) {
            return res.json()
        }
    })
    .then(json => {
        app.setState({neighbourhoodsData: json})
    })
    .catch(e => {
        console.log(e)
    })
}