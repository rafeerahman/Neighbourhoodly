import ENV from '../config.js'
const API_HOST = ENV.api_host
console.log('Current environment:', ENV.env)

export const addImageAndInfo= (form, username, callback) => {
    // the URL for the request
    const url = `${API_HOST}/api/users/edit`;

    // The data we are going to send in our request
    const formData = new FormData(form);
    if (username.trim().length === 0) {
        formData.delete("username")
    }
    
    // Create our request constructor with all the parameters we need
    // req.body will give text fields, and req.files will give image file (in server.js)
    const request = new Request(url, {
        method: "put",
        body: formData,
        credentials: "include", // includes cookies to the request
    });

    // Send the request with fetch()
    fetch(request)
        .then(function (res) {
            // Handle response we get from the API.
            // Usually check the error codes to see what happened.
            if (res.status === 200) {
                // If image was added successfully, tell the user.
                console.log("Success")
                alert('successully edited')
                callback()
            } else if (res.status === 400) {
                alert("You must enter atleast one field to edit your profile.")
            } else {
                // If server couldn't add the image, tell the user.
                // Here we are adding a generic message, but you could be more specific in your app.
               console.log(res.status + " Error")
               alert((res.status + " Error"))
            }
        })
        .catch(error => {
            console.log(error);
        });
};