'use strict';

const mongoose = require('mongoose')
const validator = require('validator')

const DataSchema = new mongoose.Schema({
	population: {
		type: String
	},
	ages: {
		type: Array
	},
	safetyData: {
		type: Object
	},
	economics: {
		type: Object
	},
	avgUserRating: {
		type: Number,
		required: false
	}
})

const NeighborhoodSchema = new mongoose.Schema({
	neighbourhoodName: {
		type: String
	}, 
	data: {
		type: DataSchema
	}
})

NeighborhoodSchema.pre('save', function(next) {
	const neighborhood = this; // binds this to User document instance

	Neighborhood.find({neighbourhoodName: neighborhood.neighbourhoodName}, (err, docs) => {
		if (docs.length === 0) {
			next()
		} else {
			// console.log("Neighbourhood already exists")
			next(new Error(`This neighbourhood ${neighborhood.neighbourhoodName} already exists`))
		}
	})
	
})

// mongoose.model('NeighbourhoodData', DataSchema)
const Neighborhood = mongoose.model('neighborhood', NeighborhoodSchema)
module.exports = { Neighborhood }