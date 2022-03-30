'use strict'
const express = require("express");
const app = express();
// const mongoose = require('mongoose')
// mongoose.connect("mongodb://localhost/neighbourhoodlyAPI");
const { mongoose } = require("./db/mongoose");

// const Student = require('./models/studentExample');
const { User } = require("./models/user");

// body-parser: middleware for parsing parts of the request into a usable object (onto req.body)
const bodyParser = require('body-parser'); 
const { Neighborhood } = require("./models/neighborhoods");
const { restart } = require("nodemon");
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

app.get('/api/neighborhoods', async(req, res) => {
    // const neighborhoods = await Neighborhood.find({}).exec()
    res.json([
        {
            title: "Yonge-St Clair",
            safetyScore: 8,
            avgUserRating: 7,
        },
        {
            title: "York University Heights",
            safetyScore: 8.5,
            avgUserRating: 9,
        },
        {
            title: "Bay Street Corridor",
            safetyScore: 4.5,
            avgUserRating: 9,
        },
        {
            title: "Bayview Village",
            safetyScore: 5.5,
            avgUserRating: 9,
        },
        {
            title: "Woodbine-Lumsden",
            safetyScore: 8.5,
            avgUserRating: 9,
        },
        {
            title: "Yonge-Eglinton",
            safetyScore: 8.5,
            avgUserRating: 9,
        }
        ])
})

// App Routes 
app.get('/Register', async(req, res) => {
    res.send('./pages/homePages/Register')    
})

app.get('/Login', async(req, res) => {
    res.send('./pages/homePages/LogIn')    
})

app.get('/Register', async(req, res) => {
    res.send('./pages/homePages/Register')    
})

app.get('/NeighbourhoodListPage', async(req, res) => {
    res.send('./pages/NeighbourhoodListPage')    
})

app.get('/NeighbourhoodPage', async(req, res) => {
    res.send('./pages/NeighbourhoodPage')    
})

app.get('/UserHome', async(req, res) => {
    res.send('./pages/homePages/UserHome')    
})

app.get('/Rankings', async(req, res) => {
    res.send('./pages/Rankings')    
})

app.get('/AboutUs', async(req, res) => {
    res.send('./pages/AboutUs')    
})

// needs authorization check later
app.get('/Profile', async(req, res) => {
    res.send('./pages/Profile')   
}

/*************************************************/
// Express server listening...
const port = process.env.PORT || 5000;
app.listen(port, () => {

    console.log(`Listening on port ${port}...`);
});