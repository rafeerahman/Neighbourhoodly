export const checkRegistration = (SignInTab, handleSignal) => {
    //console.log("Sign Up Check...")

    if (SignInTab.password !== SignInTab.retypePassword) {
        //console.log("failed")
        handleSignal("Password")
        return
    }

    // if (users.some(user => user.email === SignInTab.email)) {
    //     //console.log("failed")
    //     handleSignal("Exists")
    //     return
    // }


    if (SignInTab.password === '' || SignInTab.email === '' || SignInTab.username === '') {
        //console.log('failed')
        return 
    }

    return true
};

export const addUser = (formComp, dashboardComp) => {
    // const url = `/Register`; // may be wrong

    // // The data we are going to send in our request
    // const user = formComp.state

    // // Create our request constructor with all the parameters we need
    // const request = new Request(url, {
    //     method: "post",
    //     body: JSON.stringify(user),
    //     headers: {
    //         Accept: "application/json, text/plain, */*",
    //         "Content-Type": "application/json"
    //     }
    // });

    // // Send the request with fetch()
    // fetch(request)
    //     .then(function (res) {
    //         if (res.status === 200) {
    //             dashboardComp.setState({
    //                 message: {
    //                     body: "Success: Added a student.",
    //                     type: "success"
    //                 }
    //             });
    //         } else {
    //             dashboardComp.setState({
    //                 message: {
    //                     body: "Error: Could not add student.",
    //                     type: "error"
    //                 }
    //             });
    //         }
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
};