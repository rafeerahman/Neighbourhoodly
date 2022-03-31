'use strict'
const express = require("express");
const app = express();

const log = console.log

const { getAllData } = require('./requests/allNeighbourhoodsData')
// getAllData().then(data => {console.log(data)})
// .catch(error => {
//     console.log(error)
// })

const { mongoose } = require("./db/mongoose");

// Models
const { User } = require("./models/user");
const { Neighborhood } = require("./models/neighborhoods");

// Body-parser: middleware for parsing parts of the request into a usable object (onto req.body)
const bodyParser = require('body-parser'); 
const { restart } = require("nodemon");
const { response } = require("express");

app.use(bodyParser.json()) // parsing JSON body
app.use(bodyParser.urlencoded({ extended: true })); // parsing URL-encoded form data (from form POST requests)

/***  NEIGHBOURHOODS ROUTES  ***/ 
/*
    This route is adding the formatted neighbourhoods data from City of Toronto API's found in requests.
    No request params should be sent to this api.
*/
app.post('/api/neighbourhoods', async (req, res) => {
    const allNeighbourhoods = await getAllData();
    
    for (let i = 0; i < allNeighbourhoods.length; i++) {
        const neighborhood = new Neighborhood(allNeighbourhoods[i])
        try {
            await neighborhood.save()
        } catch (e) {
            log(e)
            res.status(400).send('Bad Request') 
        }
    }

    res.status(200).send(allNeighbourhoods)
})

app.get('/api/neighbourhoods', async(req, res) => {
    try {
        const neighbourhoods = await Neighborhood.find({}) // -_id
        if (neighbourhoods.length !== 0) {
            res.status(200).send(neighbourhoods)
        } else {
            res.status(500).send("Server error")
        }
    } catch (e) {
        log(e)
        res.status(500).send("Server error")
    }
})

/*** USERS API ROUTES ***/
app.post('/api/users', async (req, res) => {
    console.log(req.body)

    // Create a new user
    const user = new User({
        email: req.body.email,
        password: req.body.password
    })

    try {
        const newUser = await user.save()
        res.status(200).send(newUser)
    } catch (error) {
        log(error);
        res.status(400).send('Bad Request')
    }
})

/*** REVIEWS API ROUTES ***/


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
})

/*************************************************/
// Express server listening...
const port = process.env.PORT || 5000;
app.listen(port, () => {

    console.log(`Listening on port ${port}...`);
});