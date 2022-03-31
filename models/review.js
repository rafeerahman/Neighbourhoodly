const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')
const validator = require('validator')

const ReviewData = new mongoose.Schema({
    reviewTitle: {
        type: String,
        required: true
    }, 
    userRating: {
        type: Number,
        required: true,
    },
    reviewBody: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})

const ReviewSchema = new mongoose.Schema({
    userId: { 
        type: ObjectId,
        required: true
    }, 
    username: {
        type: String,
        required: true
    },
    neighbourhoodId: {
        type: String,
        required: true
    }, 
    review: {
        type: ReviewData,
        required: true
    } 
})

const Review = mongoose.model('Review', ReviewSchema)
module.exports = { Review }