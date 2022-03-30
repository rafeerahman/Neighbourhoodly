'use strict'
const express = require("express");
const app = express();
// const mongoose = require('mongoose')
// mongoose.connect("mongodb://localhost/neighbourhoodlyAPI");
const { mongoose } = require("./db/mongoose");

const { User } = require("./models/user");

// body-parser: middleware for parsing parts of the request into a usable object (onto req.body)
const bodyParser = require('body-parser') 
app.use(bodyParser.json()) // parsing JSON body
app.use(bodyParser.urlencoded({ extended: true })); // parsing URL-encoded form data (from form POST requests)

app.post('/api/users', async (req, res) => {
    console.log(req.body)

    // Create a new user
    const user = new User({
        email: req.body.email,
        password: req.body.password
    })

    try {
        // Save the user
        const newUser = await user.save()
        res.send(newUser)
    } catch (error) {
        console.log(error);
        // if (isMongoError(error)) { // check for if mongo server suddenly disconnected before this request.
        //     res.status(500).send('Internal server error')
        // } else {
        //     log(error)
        //     res.status(400).send('Bad Request') // bad request for changing the student.
        // }
    }
})

/*************************************************/
// Express server listening...
const port = process.env.PORT || 5000;
app.listen(port, () => {

    console.log(`Listening on port ${port}...`);
});