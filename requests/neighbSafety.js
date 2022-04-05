'use strict'

const log = console.log
const path = require('path');
const { getInitialProfilesData } = require('./neighbProfiles');

const {addEconomics} = require("./neighEconomics")

// log(addEconomics().then(data => {log(data)}));

async function addSafetyData(neighbourhoodsData) {
    const XLSX = require('xlsx');
    let table = XLSX.readFile(path.join(__dirname, 'static_data/wellbeing-toronto-safety.xlsx'))
    let sheetNames = table.SheetNames;
    let new_range = XLSX.utils.decode_range(table.Sheets[sheetNames[2]]['!ref']);
    new_range.s.r = 1;
    const JSON_Array = XLSX.utils.sheet_to_json(table.Sheets[sheetNames[2]], {range: new_range})

    neighbourhoodsData.map((neighbourhood) => {
        const safetyData = JSON_Array.filter((safetyData) => {
            return safetyData["Neighbourhood"] === neighbourhood.neighbourhoodName;
        })[0]
      
        // Initializing safetyData 
        let safetyDataInit = {}

        // Updating safetyData value
        for (let key in safetyData) {
            if (key !== "Neighbourhood" && key !== "Neighbourhood Id") {
                safetyDataInit[key] = safetyData[key]
            }   
        }

        // Updating neighbourhood data.
        neighbourhood.data.safetyData = safetyDataInit;

    })

    return neighbourhoodsData
    
}

async function getAllData() {
    let data = await getInitialProfilesData();
    data = await addEconomics(data)
    data = await addSafetyData(data);

    return data;
}

getAllData().then(data => {})
.catch(error => {
    console.log(error)
})

module.exports = { addSafetyData }