# team49

## Heroku Link:
* https://csc309neighbourhoodly.herokuapp.com/

## Instructions for running locally:
Our web app is built using react so node_modules is not committed.
* type **npm install** in the terminal in /team49/client
* type **npm install** in the parent directory /team49
* type **mongod --dbpath mongo-data** in the parent directory /team49 (assumes you have Mongo installed)
* type **npm run build-run** in the parent directory /team49
* Navigate to localhost:5000 on your browser once the server is running to view our app.

## External libraries used:
### Frontend
* styled-components 
* material-ui icons
### Server
* bcryptjs
* cloudinary
* mongoose
* express

## Login Credentials:
* admin:
	* username: admin@admin.com
	* password: admin
* user:
	* username: user@user.com
	* password: user

## Description

By opening our web app you will find your self on our register page which new users can use to register. Upon registering, you can navigate to the login page using the side bar and clicking 'Login' to access user features.

### Profile
On the Profile page, which logged in users have access to, users can edit their profile image, username, and bio. They can also view and choose to delete any reviews they have made in the past. 

### Admin
On the Admin page, which only admin users can see (can only be set through the database), users can view all users and reviews that have been made. They can also choose to delete reviews if they wish.

### Neighbourhoods
On the Neighbourhoods page, users can view a list of all the neighborhoods in Toronto, and choose to click on any of them. Upon clicking a neighbourhood, they are sent to the specific neighbourhood's page.

On the **specific** Neighbourhood's page that is clicked via the Neighbourhood's page, you can view and search through all the available user reviews, as well as see overall user ratings and safety score for this neighborhood. Logged in users have the ability to post reviews to neighbourhoods here. If a user is not logged in, they will not be able to post a review.  You can also search for a specific review using the search bar. 

### Neighbourhood Rankings
On the Rankings page via the side bar to view a list of Torontos neighborhoods. This shows a table of data that includes the average user rating, safety score, and neighbourhood name. You can adjust how the list is sorted by using the filters below the search bar and you can use the search bar to filter through the neighborhoods.

### About
On the About page, a description of what our app is and the who the app creators is shown.

### Logout
Upon clicking "log out" via the side bar the users session is destroyed.

## Overview of routes

### POST /api/users

This is a POST route to add a user to our database. The required properties in the JSON body are an **email**, **username**, and **password**. The optional property is called **isAdmin**, which is a true or false value. An example body would be {"email": "foo@gmail.com", "username": "foo", "password": "foo"}. The expected response to this route is a 200 status code, with the newly added user being sent. The route is used in our app to register a user, and store them in our database.

### POST /users/login

This is a POST route that finds the user by their email and encrypted password, and then sets session properties to some of the user's information. The expected request body has two properties, email, and password. An example body is {“email”: “foo@gmail.com”, “password”: “foo”}. The response sends an object with the current users email, username, and admin status. This route allows users to login in our app. 

### GET  /api/users

This is a GET route. The request responds with an array of all the users in our database. Only users who are admins can access this route. This route is used in our Admin dashboard to view user information.

### GET  /api/users/current
This is a GET route. The request responds with a user object from our database of the current user that is logged in, if there is one. This route is used in our Profile page, which gets the user that is logged in  and displays their respective information (reviews, name, bio). 

### PUT /api/users/edit

This is a PUT route. The request body expects an image, username, location, or bio. The request body properties are called username, about, location. In addition, the image file property can be in the body as well by uploading the file. A user can call all, or either of these properties in the request, and the user will be updated with whichever properties they gave. The expected response is a 200 status code if the update was successful. This route is used in our profile edit dashboard to allow a user to edit their avatar, and information about themselves.

### GET /user/logout
This is a GET route that destroys the user's session. On success a 200 status code is sent. It is used in our app to log a user out when they click “Logout” in the sidebar. 

### GET /user/check-session
This is a GET route that checks whether a user is logged in on the session. If the user is logged in on the session, the response sends an object with the current user’s email, username and admin status. This route is used in our app to store the state of the current user.

### POST /api/neighbourhoods

This route is used to populate our neighborhoods collection in our database. It makes a call to getAllData(), which requests data from https://open.toronto.ca/dataset/neighbourhood-profiles/, and uses static data from https://open.toronto.ca/dataset/wellbeing-toronto-economics/ and https://open.toronto.ca/dataset/wellbeing-toronto-safety/. Upon successful data retrieval, a new Neighborhood schema is created for each neighborhood in our data. These neighborhoods are then saved into our neighborhoods collection. This route should only be called once, but if the route is requested twice, it does not allow for duplicate neighborhoods to be added. On success, a 200 status is sent with an array of all the neighborhoods that were added. This route was not used in our app, only through POSTMAN which helped populate the neighborhoods collection with data. Adding neighborhoods to your database is a prerequisite to using any of the reviews routes.

### POST /api/reviews

This route expects a review in the request body. The review properties are userId, username, neighbourhoodId, neighbourhoodName, and review. The review property has inner properties called reviewTitle, userRating, reviewBody, date. The userId and neighbourhoodId are the id’s from MongoDB of the user who made the post request, and the neighborhood of the review. An example request would be 

{ “userId”: "<id from mongo>", “neighbourhoodId”: "<id from mongo>", “username”: “foo”, “review”: {“reviewTitle”: “foo”, “userRating”: 3, reviewBody: “foo”, “date”: “2022/04/04”}}.

The expected response is a 200 status code with the newly posted review. This route is used in our NeighbourhoodPage’s review form which allows a user to post their review.


### GET /api/reviews/user=:userId

This route expects a user's id in the request parameters. It finds all the reviews that this specific user has made, and responds with an array of their reviews on success. This route is used in our Profile page, which displays a user's reviews.


### GET /api/reviews/neighbourhood=:id

This route expects a neighborhood id in the request parameters. It finds all the reviews of that specific neighborhood, and responds with an array of those neighborhood reviews on success. This route is used in our Neighborhood page, which displays all respective neighborhood reviews.

### DELETE /api/reviews/:id 

The route expects an id of a review in the request parameters. If the user is the one who made that review, or if the user is an admin, then they have access to this route. Otherwise a 401 error is sent. Upon success, it finds the review by the id, and removes it from the database. This route is used in the Profile page, where a user has the option to delete any of their reviews by clicking the trash icon next to their review.

### DELETE /api/users/:id

The route expects an id of a user in the request parameter. If the user is an admin, then they have access to this route. Otherwise a 401 error is sent. Upon success, it finds the user by the id, removes it from the database, and returns the new list of users. This route is used in the AdminDashboard page, where an admin, has the option to delete any user by clicking on the Ban User button next to the username.
