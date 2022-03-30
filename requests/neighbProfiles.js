'use strict';

const request = require('request')
const profilesPackageId = "6e19a90f-971c-46b3-852c-0c48c436d1fc"
const log = console.log;

const getNeighbourhoodProfiles = () => {
	// Wrap the asynchronous request call in a Promise
	return new Promise((resolve, reject) => {
		request({
			url: `https://ckan0.cf.opendata.inter.prod-toronto.ca/api/3/action/package_show?id=${profilesPackageId}`,
			json: true
		}, (error, response, body) => {
			if (error) {
				reject("Can't connect to server")
			} else if (response.statusCode !== 200) {
				reject('issue with getting resource')
			} else {
				resolve({
					result: body.result
				})
			}
		})
	})
}

const getAllData = (resource) => {
	return new Promise((resolve, reject) => {
		request({
			url: `https://ckan0.cf.opendata.inter.prod-toronto.ca/api/3/action/datastore_search?id=${resource["id"]}&limit=2383`,
			json: true
		}, (error, response, body) => {
			if (error) {
				reject("Can't connect to server")
			} else if (response.statusCode !== 200) {
				reject('Issue with getting resource')
 			} else {
				 resolve({
					 data: body.result.records
				 })
			 }
		})
	})
} 

/*

	This link is the data we want. // https://ckan0.cf.opendata.inter.prod-toronto.ca/api/3/action/datastore_search?id=ef0239b1-832b-4d0b-a1f3-4153e53b189e&limit=2383
	I'm not sure where to find the documentation of the properties of this JSON file, but one way to find what you want is by
	opening the excel file.

	The column from that excel called "attribute" will have the properties in the JSON from the link above.
	
	For example, accessing the "Population, 2011" from the excel file will be as follows
	(in records.filter)
		category === "Population, 2011"
	
	Make sure to check that the equality works, because some columns from the excel might not be in the JSON

	WILL CLEAN LATER
*/

const getInitialProfilesData = () => {
	let data = []

	return new Promise((resolve, reject) => {
		getNeighbourhoodProfiles()
		
		.then(metaData => {
			const resourceData = metaData.result.resources.filter(r => r.datastore_active)
			
			getAllData(resourceData[0]).then(body => {
				
				const populationData = body.data.filter(category => {
					return category["Characteristic"] === "Population, 2016"
				})[0]
		
				const ignoreParams = ["_id", "Category", "Topic", "Data Source", "Characteristic"]
				
				// INITIALIZING OUR DATA ARRAY WITH NEIGHBOURHOODS, and population data
				Object.keys(populationData).map((key, index) => {
					
					if (!ignoreParams.includes(key)) {
						let obj = {}
						obj.neighbourhoodName = key;
						obj.data = {population: populationData[key]}
						obj.data.ages = []
						data.push(obj)
					}
				})
				
				
				let neighbourhoodData = body.data;

				// INCOME DATA
				const avgIncomeData = neighbourhoodData.filter(neighbourhood => {
					return neighbourhood["Characteristic"] === "Total income: Average amount ($)"
				})[0]
				
				Object.keys(avgIncomeData).map((key, index) => {
					if (!ignoreParams.includes(key)) {
						const neighb = data.filter((neighbourhood) => {
							return neighbourhood.neighbourhoodName === key;
						})[0]
						let obj = {avgIncome: avgIncomeData[key]}
						neighb.data.economics = obj;
					}	
				})

				// AGES DATA
				const ageData = neighbourhoodData.filter((column) => {
					return column["Topic"] === "Age characteristics"
				})
				
				data = formatAgeData(ageData, data, ignoreParams); // updated data
				resolve(data)
			})
		
		})
		.catch(error => {
			reject(error)
			console.log(error)
		}) 
	})
	.catch(error => {
		log(error)
	})
}


function formatAgeData(ageData, data, ignoreParams) {
	for (let i = 0; i < 101; i+=5) {
		let malesAndFemales = []
		ageData.map(column => {
			if (i == 0 ) {
				if (column["Characteristic"] === `Male: ${i} to 0${i + 4} years` || 
				column["Characteristic"] === `Female: ${i} to 0${i + 4} years`) {
					malesAndFemales.push(column)
				} 

			} else if ( i == 5) {
				if (column["Characteristic"] === `Male: 0${i} to 0${i + 4} years` || 
				column["Characteristic"] === `Female: 0${i} to 0${i + 4} years`) {
					malesAndFemales.push(column)
				} 
			} else if (i === 100) {

				if (column["Characteristic"] === `Male: ${i} years and over` || 
				column["Characteristic"] === `Female: ${i} years and over`) {
					malesAndFemales.push(column)
				}

			} else {
				if (column["Characteristic"] === `Male: ${i} to ${i + 4} years` || 
				column["Characteristic"] === `Female: ${i} to ${i + 4} years`) {
					malesAndFemales.push(column)
				}
			}
		})
		let obj = malesAndFemales[0]
	
		Object.keys(obj).map((key, index) => {
			if (!ignoreParams.includes(key)) {
				let males = malesAndFemales[0][key] // males ages
				let females = malesAndFemales[1][key] // females ages
				
				data.map(neighbourhood => {
					if (neighbourhood.neighbourhoodName === key) {
						let obj = {}
						obj.ageRange = `${i} to ${i+4}`;
						obj.males = males;
						obj.females = females;
						neighbourhood.data.ages.push(obj)
					}
				})
			}
		})
	}
	return data
}

// getFormattedData()
// .then(data => {log(data)});

module.exports = { getInitialProfilesData }