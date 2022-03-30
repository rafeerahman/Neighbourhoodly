'use strict';

const mongoose = require('mongoose')

const NeighborhoodSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		minlength: 1,
		trim: true,
		unique: true,
	}, 
	safetyScore: {
		type: Number,
		required: true,
	}, 
	avgUserRating: {
		type: Number,
		required: true,
	}
})

const Neighborhood = mongoose.model('Neighborhood', NeighborhoodSchema)
module.exports = { Neighborhood }