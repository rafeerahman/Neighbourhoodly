// Setting the rating in the neighbourhood data (not doing server side for now)
export const setSafetyScore = (neighbourhood, max) => {
    const safetyData = neighbourhood.data.safetyData;
    let total = 0;
    for (let key in safetyData) {
        total += safetyData[key]
    }
    const score = (((max - total) / max)*100).toFixed(2)

    neighbourhood.data.safetyScore = score;   // post call here if server-side
}