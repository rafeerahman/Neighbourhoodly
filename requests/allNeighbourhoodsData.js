'use strict'

const { getInitialProfilesData} = require('./neighbProfiles')
const { addEconomics } = require('./neighEconomics')
const { addSafetyData } = require('./neighbSafety')

async function getAllData() {
    let data = await getInitialProfilesData();
    data = await addEconomics(data)
    data = await addSafetyData(data);

    return data;
}

// getAllData().then(data => {console.log(data)})
// .catch(error => {
//     console.log(error)
// })



module.exports = { getAllData }