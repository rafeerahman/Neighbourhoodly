'use strict'
const log = console.log

/* This function is depedent on the getFormattedData() call, which returns a promise 
   so make sure you call it first.
*/
async function addEconomics(data) {
    const XLSX = require('xlsx');
    let table = XLSX.readFile('static_data/wellbeing-toronto-economics.xlsx')
    let sheetNames = table.SheetNames;
    let new_range = XLSX.utils.decode_range(table.Sheets[sheetNames[2]]['!ref']);
    new_range.s.r = 1;
    const JSON_Array = XLSX.utils.sheet_to_json(table.Sheets[sheetNames[2]], {range: new_range})

    data.map((neighbourhood) => {
        let economicsData = JSON_Array.filter((obj) => {
            return obj["Neighbourhood"] === neighbourhood.neighbourhoodName
        })[0]
        
        for (let key in economicsData) {
            if (key !== "Neighbourhood" && key !== "Neighbourhood Id") {
                neighbourhood.data.economics[key] = economicsData[key]
            }
        }
    })
    
    return data;
}

// addEconomics().then((result) => {log(result[2].data.economics)})

module.exports = { addEconomics }