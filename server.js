'use strict'
const env = process.env.NODE_ENV
const USE_TEST_USER = env !== 'production' && process.env.TEST_USER_ON // option to turn on the test user.
const TEST_USER_ID = '5fb8b011b864666580b4efe3' // the id of our test user (you will have to replace it with a test user that you made). can also put this into a separate configutation file
const TEST_USER_EMAIL = 'test@user.com'

const express = require("express");
const path = require('path')
const app = express();
// enable CORS if in development, for React local development server to connect to the web server.
const cors = require('cors')
if (env !== 'production') { app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
})) }



// cloudinary: configure using credentials found on your Cloudinary Dashboard
// sign up for a free account here: https://cloudinary.com/users/register/free
const cloudinary = require('cloudinary');
cloudinary.config({ 
    cloud_name: 'duzagwls0', 
    api_key: '956617131427852', 
    api_secret: 'f74CJIBdU3jK7ejn86uTtmezkOQ' 
});

// multipart middleware: allows you to access uploaded file from req.file
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();



const log = console.log
const { getAllData } = require('./requests/allNeighbourhoodsData')

const { mongoose } = require("./db/mongoose");
const { ObjectID, ObjectId } = require("mongodb");

// Models
const { User } = require("./models/user");
const { Neighborhood } = require("./models/neighborhoods");
const { Review } = require("./models/review")

// Some middleware dependencies
const { authenticateUser } = require('./server-middleware/authenticateUser')
const bodyParser = require('body-parser'); 
const { restart } = require("nodemon");
const { response } = require("express");

// Middleware for bodyParser
app.use(bodyParser.json()) // parsing JSON body
app.use(bodyParser.urlencoded({ extended: true })); // parsing URL-encoded form data (from form POST requests)

// Express-sessions to help manage user sessions
const session = require("express-session")
const MongoStore = require('connect-mongo')
const { addEconomics } = require("./requests/neighEconomics")
const { send } = require("express/lib/response")

/*** Image API Routes below ************************************/
const { Image } = require("./models/image");
// a POST route to *create* an image

/*** USERS API ROUTES ***/
app.post('/api/users', async (req, res) => {
    console.log(req.body)
    const isAdmin = req.body.isAdmin ? true : false

    // Create a new user
    const user = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        isAdmin: isAdmin
    })

    try {
        const newUser = await user.save()
        res.status(200).send(newUser)
    } catch (error) {
        // Existing user
        //log(error.name)
        if (error.name === 'MongoServerError' && error.code === 11000) {
            return res.status(422).send({success: false})
        }
        //log(error);
        res.status(400).send('Bad Request')
    }
})

/** USER SESSIONS HANDLING **/
app.use(
    session({
        secret: process.env.SESSION_SECRET || "our hardcoded secret", // make a SESSION_SECRET environment variable when deploying (for example, on heroku)
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 5000000,
            httpOnly: true
        },
        // store the sessions on the database in production
        store: MongoStore.create(
            {mongoUrl: process.env.MONGODB_URI || 'mongodb://localhost:27017/neighbourhoodlyAPI'
            })
    })
)

// A route to login and create a session
app.post("/users/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // log(email, password);
    // Use the static method on the User model to find a user
    // by their email and password
    User.findByEmailPassword(email, password)
        .then(user => {
            // Add the user's id to the session.
            // We can check later if this exists to ensure we are logged in.
            req.session.user = user._id;
            req.session.email = user.email; // we will later send the email to the browser when checking if someone is logged in through GET /check-session (we will display it on the frontend dashboard. You could however also just send a boolean flag).
            req.session.username = user.username;
            req.session.isAdmin = user.isAdmin;
            res.send({ currentUser:{email: req.session.email, username: req.session.username}, isAdmin: user.isAdmin});
        })
        .catch(error => {
            res.status(400).send("Invalid credentials")
        });
});

// Add authenticate later
app.get('/api/users/current', authenticateUser, async (req, res) => {
    const sessionUser = req.user.username // coming from authenticate middleware

    try {
        const user = await User.findOne({username: sessionUser}, '-_id, -password -__v')
        console.log(user)
        res.status(200).send(user)
    } catch (e) {
        res.status(400).send("Bad request")
    }
})

// Add authenticate later
app.get('/api/users/:id', async (req, res) => {
    const id = req.params.id

    try {
        const user = await User.findById(id, '-_id, -password -__v')
        console.log(user)
        res.status(200).send(user)
    } catch (e) {
        res.status(400).send("Bad request")
    }
})

// Add authenticateUser later
app.put("/api/users/edit", multipartMiddleware, authenticateUser, async (req, res) => {
    // req.files gives us files,
    // req.body gives us the text with property "name" from the form

    // Use uploader.upload API to upload image to cloudinary server.
    const newData = {}
    const sessionUser = req.user.username // Coming from auth middleware

    if (req.files.image.originalFilename.trim().length !== 0 ) {
        const result = await cloudinary.uploader.upload(req.files.image.path)  // req.files contains uploaded files
        newData.image = {
            image_id: result.public_id, // image id on cloudinary server
            image_url: result.url, // image url on cloudinary server
            created_at: new Date(),
        }
    }
    // If a user updated their username
    if (req.body.username) {
        newData.username = req.body.username;
    }
    
    if (req.body.about) {
        newData.about = req.body.about
    }

    if (req.body.location) {
        newData.location = req.body.location
    }
    console.log(newData)
    
    // If no data was added, send a bad request message
    if (Object.keys(newData).length === 0) {
        return res.status(400).send('Bad Request')
    }

    try {
        await User.findOneAndUpdate({username: sessionUser}, {$set: newData})
        console.log('Success')
        // const oldUser = await User.findOneAndUpdate({username: sessionUser}, newData)
        // oldUser.save() // Saves oldUser with new info
        res.status(200).send()
    } catch (e) {
        log(e)
        res.status(500).send('Server error')
    }
})

// A route to logout a user
app.get("/users/logout", (req, res) => {
    // Remove the session
    req.session.destroy(error => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send()
        }
    });
});

// A route to check if a user is logged in on the session
app.get("/users/check-session", (req, res) => {
    if (env !== 'production' && USE_TEST_USER) { // test user on development environment.
        req.session.user = TEST_USER_ID;
        req.session.email = TEST_USER_EMAIL;
        res.send({ currentUser: TEST_USER_EMAIL })
        return;
    }

    if (req.session.user) {
        log(req.session)
        res.send({ currentUser: {email: req.session.email, username: req.session.username}, isAdmin: req.session.isAdmin});
    } else {
        res.status(401).send();
    }
});

/***  NEIGHBOURHOODS API ROUTES  ***/ 
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

// Get all neighbourhoods
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

/*** REVIEWS API ROUTES ***/
app.post('/api/reviews', authenticateUser, async (req, res) => {
    const review = new Review({
        userId: req.user._id, // username from authenticate middleware
        username: req.user.username,
        neighbourhoodId: req.body.neighbId,
        neighbourhoodName: req.body.neighbourhoodName,
        review: {
            reviewTitle: req.body.review.reviewTitle,
            userRating: req.body.review.userRating,
            reviewBody: req.body.review.reviewBody,
            date: new Date().getFullYear()+'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+("0"+new Date().getDate()).slice(-2)
        }
    })

    try {
        const newReview = await review.save();
        res.status(200).send(review)
    } catch (e) {
        log(e)
        res.status(500).send("Internal server error")
    }
})

// get reviews by a username removed authenticateUser for now
app.get('/api/reviews/user=:username', async (req, res) => {
    const user = req.params.username

    try {
        const usersReviews = await Review.find({username: user}, '-_id -userId')

        if (usersReviews.length === 0) {
            res.status(400).send("Bad request")
        } else {
            res.status(200).send(usersReviews)
        }
    } catch (e) {
        log(e)
        res.status(500).send("Internal server error")
    }
})

// get reviews by a neighbourhood ID.
app.get('/api/reviews/neighbourhood=:id', async (req, res) => {
    const id = req.params.id

    try {
        const neighborhoodReviews = await Review.find({neighbourhoodId: id}, '-_id')

        if (neighborhoodReviews.length === 0) {
            // log("No reviews found")
            res.status(204).send("Not found")
        } else {
            res.status(200).send(neighborhoodReviews)
        }
    } catch (e) {
        log(e)
        res.status(500).send("Internal server error")
    }
})

// ADD PATCH ROUTE LATER (TO EDIT A REVIEW)

// Delete a users review. Only the person who created the review, or if the user is an admin, can delete.  
// In authenticateUser, probably add a "isAdmin" to allow for admin panel deletion.
app.delete('/api/reviews/:id', authenticateUser, async (req, res) => {
	const id = req.params.id

	// Validate id
	if (!ObjectId.isValid(id)) {
		res.status(404).send('Resource not found')
		return;
	}

	// Delete a review by their id
	try {
		const review = await Review.findById(id)

        // Authenticating deletion. If the user is an admin, they can delete anyones review.
        if (!req.user._id.equals(review.userId) && !req.user.isAdmin) { // req.user coming from authenticate middleware
            log("You cannot delete another users review")
            return res.status(401).send("Unauthorized")
        } 
        const deletion = await review.remove();

		if (!review) {
			res.status(404).send()
		} else {   
			res.send(review)
		}
	} catch(error) {
		log(error)
		res.status(500).send() // server error, could not delete.
	}
})



app.use(express.static(path.join(__dirname, "/client/build")));


// All routes other than above will go to index.html
app.get("*", (req, res) => {
    // check for page routes that we expect in the frontend to provide correct status code.
    const goodPageRoutes = ["/", "/Login", "/Profile", '/edit', '/AboutUs', '/Neighbourhoods', '/AdminDashboard', '/Rankings'];
    if (!goodPageRoutes.includes(req.url)) {
        // if url not in expected page routes, set status to 404.
        res.status(404).sendFile(path.join(__dirname, "404.html"))
    }

    // send index.html
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
});


/*************************************************/
// Express server listening...
const port = process.env.PORT || 5000;
app.listen(port, () => {

    console.log(`Listening on port ${port}...`);
});